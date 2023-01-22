import { useEffect, useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

import { getIssues } from '../../utils/github';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function IssueModal({ showModal, setShowModal, repoFullName, repoName, repoOwner }) {

  const [curPage, setCurPage] = useState(1);
  const [totalCount, setTotalCount] = useState(30);

  const [issue, setIssue] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  }

  const getIssueData = async page => {
    const issueData = await getIssues(repoOwner, repoName, page);

    setIssue(issueData);
  }

  useEffect(() => {
    if (showModal) {
      getIssueData(curPage);
    }
  }, [showModal, curPage]);

  return (
    <Modal show={ showModal } onHide={ closeModal } backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>issues of { repoFullName }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup variant="flush">
          {
            !issue
              ? <></>
              : (
                  issue.map(item => (
                    <ListGroup.Item action onClick={() => window.open(item.html_url)}>
                      { item.title }
                    </ListGroup.Item>
                  ))
                )
          }
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={ closeModal }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IssueModal;