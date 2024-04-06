import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddModal({ showModal, handleClose, drName, addAppointment }) {
  //   const [showModal, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  // console.log(patientName);
  // console.log(date);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(patientName, date, drName);

    addAppointment({
      // id: new Date().getTime(),
      id: crypto.randomUUID(),
      patient: patientName,
      day: date,
      consulted: false,
      doctor: drName,
    });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for : {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Patient Name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Password"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>

            <div className="text-center ">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
