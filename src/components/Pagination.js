import { Pagination, Col } from 'react-bootstrap';

import styled from 'styled-components';

const CustomCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

function CustomPagination({ page, totalCount, limit, setPage }) {

  const pages = [];
  const prevEllipsis = [];
  const nextEllipsis = [];

  let endPage = parseInt(totalCount / limit);
  if (totalCount > limit * endPage) {
    endPage++;
  }

  let leftSide = page - 2;
  if (leftSide <= 0) leftSide = 1;

  let rightSide = page + 2;
  if (rightSide > endPage) rightSide = endPage;

  for (let num = leftSide; num <= rightSide; num++) {
    if (num <= endPage) {
      pages.push(num);

      if (endPage === 1) break;
    }
  }

  if (leftSide !== 1) {
    prevEllipsis.push(leftSide - 1);
  }

  if (rightSide !== endPage) {
    nextEllipsis.push(rightSide + 1);
  }

  return (
    <CustomCol>
      <Pagination>
        <Pagination.First onClick={ () => setPage(1)} disabled={ page === 1 }/>
          <Pagination.Prev onClick={ () => setPage(page - 1) } disabled={ page === 1 } />
          { prevEllipsis.map(prev => (
              <Pagination.Ellipsis
                key={ prev }
                onClick={ () => setPage(prev) }
              />
          )) }
          { pages.map(curPage => (
            <Pagination.Item
              key={ curPage }
              active={ curPage === page }
              onClick={ () => setPage(curPage) }
            >
              { curPage }
            </Pagination.Item>
          )) }
          { nextEllipsis.map(next => (
              <Pagination.Ellipsis
                key={ next }
                onClick={ () => setPage(next) }
              />
          )) }
          <Pagination.Next onClick={ () => setPage(page + 1) } disabled={ page === endPage } />
          <Pagination.Last onClick={ () => setPage(endPage) } disabled={ page === endPage } />
      </Pagination>
    </CustomCol>
  );
}

export default CustomPagination;