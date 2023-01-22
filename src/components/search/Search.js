import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import SearchList from './SearchList';

const CustomRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

function Search() {
  return (
    <CustomRow>
      <H1>Search GitHub Repository</H1>
      <SearchForm />
      <SearchList />
    </CustomRow>
  );
}

export default Search;