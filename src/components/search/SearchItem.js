import { Col, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLocalData, saveLocalData, removeLocalData, isIncludeLocalData } from '../../utils/localStorage';
import { useDispatch } from 'react-redux';

import { pushFavorite, removeFavorite } from '../../modules/favorite';

const CustomCard = styled(Card)`
  margin-top: 5px;
`;

const HeadDiv = styled.div`
  font-size: 15px;
  font-weight: bolder;
`;

const BodyDiv = styled.div`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AlignHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarButton = styled.button`
  background-color: transparent;
  color: ${props => props.isFavorite ? '#F2CB61' : '#EAEAEA' };
  padding: 0;
  border: none;
`;

const STORAGE_KEY = 'favorite';

function SearchItem({ props }) {

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [desc, setDesc] = useState('');

  const [isFavorite, setIsFavorite] = useState(false);

  const onClick = () => {
    const localData = getLocalData({
      storageKey: STORAGE_KEY
    });

    if (isFavorite) {
      removeLocalData({
        storageKey: STORAGE_KEY,
        fullName: fullName
      });
      dispatch(removeFavorite(fullName));
      setIsFavorite(false);
    } else if (localData.length < 4) {
      const dataBody = {
        name, owner, fullName, desc
      };

      saveLocalData({
        storageKey: STORAGE_KEY,
        dataBody: dataBody
      });
      dispatch(pushFavorite(dataBody));
      setIsFavorite(true);
    } else {
      return alert('즐겨찾기는 최대 4개까지 등록 가능합니다.');
    }
  }

  useEffect(() => {
    setFullName(props.full_name);
    setName(props.name);
    setOwner(props.owner.login);
    setDesc(props.description);

    if (isIncludeLocalData({ storageKey: STORAGE_KEY, fullName: props.full_name })) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <Col>
      <CustomCard>
        <Card.Header>
          <AlignHead>
            <HeadDiv>{ fullName }</HeadDiv>
            <StarButton onClick={ onClick } isFavorite={ isFavorite }>
              <FontAwesomeIcon icon={ faStar }/>
            </StarButton>
          </AlignHead>
        </Card.Header>
        <Card.Body>
          <BodyDiv>
          { desc }
          </BodyDiv>
        </Card.Body>
      </CustomCard>
    </Col>
  );
}

export default SearchItem;