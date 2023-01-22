import { useSelector } from 'react-redux';

import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import FavoriteCard from './FavoriteCard';

const CustomRow = styled(Row)`
  min-height: 125px;
  display: flex;
  align-items: center;
`;

function FavoriteContainer() {

  const selector = useSelector(state => state.favorite);

  return (
    <CustomRow xs={ 1 } md={ 4 }>
      {
        selector.list.map(item => <FavoriteCard key={ item.fullName } props={ item } />)
      }
    </CustomRow>
  );
}

export default FavoriteContainer;