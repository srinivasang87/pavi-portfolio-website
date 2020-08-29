import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";

const MyModal = (title, imageUrl) => {
    const [show, setShow] = useState(false);

    return (<Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} className="d-block w-100"/>
        </Modal.Body>
      </Modal>)
}

export default MyModal;