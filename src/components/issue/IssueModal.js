import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { getIssues } from '../../utils/github';

function IssueModal({ showModal, setShowModal, repoFullName, repoName, repoOwner }) {

  const [page, setPage] = useState(1);
  const [issue, setIssue] = useState([]);

  const closeModal = () => {
    setShowModal(false);
  }

  const getIssueData = async page => {
    console.log('this page is', page)
    const issueData = await getIssues(repoOwner, repoName, page);
    console.log(issueData)
  }

  useEffect(() => {
    if (showModal) {
      getIssueData(page);
    }
  }, [showModal, page]);

  return (
    <Modal show={ showModal } onHide={ closeModal } backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>issues of { repoFullName }</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        내용
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={ closeModal }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IssueModal;