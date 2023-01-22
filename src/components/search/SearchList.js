import { useEffect, useState } from 'react';
import { useSelector } from  'react-redux';

import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import { getRepositories } from '../../utils/github';
import SearchItem from './SearchItem';
import CustomPagination from '../Pagination';

const CustomRow = styled(Row)`
  margin-top: 30px;
  min-height: 200px;
  max-height: 1200px;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

function SearchList() {
  const { keyword, page } = useSelector(state => state.search);
  const [repos, setRepos] = useState();

  const [curPage, setCurPage] = useState(page);
  const [totalCount, setTotalCount] = useState(0);

  const getRepoData = async (keyword, curPage) => {
    if (!keyword) return;
    const repoData  = await getRepositories(keyword, curPage);

    setRepos(repoData);

    setTotalCount(repoData.total_count > 1000 ? 1000 : repoData.total_count);
  }

  useEffect(() => {
    getRepoData(keyword, curPage);
  }, [keyword, curPage]);

  return (
    !repos
      ? <></>
      : !repos.items.length
        ? (
            <CustomRow>
              검색결과가 없습니다. 검색어를 확인해주세요.
            </CustomRow>
          )
        : (
            <CustomRow xs={ 1 } md={ 1 }>
              {
                repos.items.map(repo => <SearchItem key={ repo.id } props={ repo } />)
              }
              <CustomPagination
                page={ curPage }
                totalCount={ totalCount }
                limit={ 10 }
                setPage={ setCurPage }
              />
            </CustomRow>
        )
  );
}

export default SearchList;