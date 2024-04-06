import Container from "react-bootstrap/Container";
import { doctorData } from "../helpers/data";
import { Col, Image, Row } from "react-bootstrap";
import AddModal from "./AddModal";
import { useState } from "react";
import { addLocal } from "../helpers/utis";

const Doctors = ({ apps, setApps }) => {
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  const addAppointment = (newAppo) => {
    setApps([...apps, newAppo]);
    //! localStorage setItem(),getItem(),remove(),clear()
    //! storage string veri saklar o yuzden donusturme yapmalıyız
    localStorage.setItem("appointments", JSON.stringify([...apps, newAppo]));
    addLocal("appointments", newAppo);
  };

  // console.log(doctorData);
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, name, dep, img }) => {
          //   {doctorData.map((doctor) => {
          //     const { id, name, dep, img } = doctor;

          return (
            <Col xs={6} sm={4} lg={3} key={id}>
              <Image
                className="img-thumbnail doctor-img w-100"
                src={img}
                alt={name}
                onClick={() => {
                  setShow(true);
                  setDrName(name);
                }}
              />
              <h5>{name}</h5>
              <p>{dep}</p>
            </Col>
          );
        })}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        drName={drName}
        addAppointment={addAppointment}
      />
    </Container>
  );
};

export default Doctors;
