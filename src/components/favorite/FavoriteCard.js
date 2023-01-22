import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Col, Card, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { removeLocalData } from '../../utils/localStorage';
import { removeFavorite } from '../../modules/favorite';

import styled from 'styled-components';

import IssueModal from '../issue/IssueModal';

const CustomCard = styled(Card)`
  margin-top: 5px;
`;

const HeadDiv = styled.div`
  font-size: 15px;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  justify-content: end;
  padding: 10px;
`;

const AlignHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StarButton = styled.button`
  background-color: transparent;
  color: #F2CB61;
  padding: 0;
  border: none;
`;

const STORAGE_KEY = 'favorite';

function FavoriteCard({ props }) {

  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');

  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    alert('즐겨찾기 삭제');
    removeLocalData({
      storageKey: STORAGE_KEY,
      fullName: fullName
    });
    dispatch(removeFavorite(fullName));
  }

  useEffect(() => {
    setFullName(props.fullName);
    setName(props.name);
    setOwner(props.owner);
  }, []);

  return (
    <Col>
      <CustomCard>
        <Card.Header>
          <AlignHead>
            <HeadDiv>{ fullName }</HeadDiv>
            <StarButton onClick={ onClick }>
              <FontAwesomeIcon icon={ faStar }/>
            </StarButton>
          </AlignHead>
        </Card.Header>
        <CardBody>
          <Button size="sm" onClick={ () => setShowModal(true) }>
            ISSUE
          </Button>
        </CardBody>
      </CustomCard>

      <IssueModal
        showModal={ showModal }
        setShowModal={ setShowModal }
        repoFullName={ fullName }
        repoName={ name }
        repoOwner={ owner }
      />
    </Col>
  );
}

export default FavoriteCard;