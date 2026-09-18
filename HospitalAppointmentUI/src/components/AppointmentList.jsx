import { useEffect, useState } from "react";

function AppointmentList({ refresh }) {

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {

    fetch("https://localhost:7106/api/Appointments")
      .then(response => response.json())
      .then(data => {
        setAppointments(data);
      })
      .catch(error => {
        console.error("Error fetching appointments:", error);
      });

  }, [refresh]);

  return (
    <div className="appointment-list">

      <h2>Booked Appointments</h2>

      {appointments.map(appointment => (

        <div className="appointment-card" key={appointment.id}>

          <h3>Appointment #{appointment.id}</h3>

          <p>
            <strong>Patient:</strong>{" "}
            {appointment.patient?.name}
          </p>

          <p>
            <strong>Doctor:</strong>{" "}
            {appointment.doctor?.name}
          </p>

          <p>
            <strong>Specialization:</strong>{" "}
            {appointment.doctor?.specialization}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(appointment.appointmentDate).toLocaleString()}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {appointment.status}
          </p>

        </div>

      ))}

    </div>
  );
}

export default AppointmentList;