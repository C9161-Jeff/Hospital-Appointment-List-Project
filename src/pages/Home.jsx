import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
// import { appointmentData } from "../helpers/data";

const Home = () => {
  const [appointments, setAppointment] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  console.log(appointments);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors setApps={setAppointment} apps={appointments} />
      <AppointmentList apps={appointments} setApps={setAppointment} />
    </main>
  );
};

export default Home;
