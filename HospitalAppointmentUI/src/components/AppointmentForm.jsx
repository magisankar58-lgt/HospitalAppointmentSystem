import { useEffect, useState } from "react";

function AppointmentForm({ onAppointmentBooked, refresh }) {

  const [patientId, setPatientId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);


  // Get doctors from API
  useEffect(() => {

    fetch("https://localhost:7106/api/Doctors")
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
      });

  }, []);


  // Get patients from API
  useEffect(() => {

    fetch("https://localhost:7106/api/Patients")
      .then(response => response.json())
      .then(data => {
        setPatients(data);
      })
      .catch(error => {
        console.error("Error fetching patients:", error);
      });

  }, [refresh]);


  const handleSubmit = async (event) => {

    event.preventDefault();

    const appointment = {
      patientId: Number(patientId),
      doctorId: Number(doctorId),
      appointmentDate: appointmentDate,
      status: "Booked"
    };


    try {

      const response = await fetch(
        "https://localhost:7106/api/Appointments",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(appointment)
        }
      );


      if (response.ok) {

        alert("Appointment booked successfully!");

        onAppointmentBooked();

        setPatientId("");
        setDoctorId("");
        setAppointmentDate("");

      } else {

        alert("Failed to book appointment.");

      }

    } catch (error) {

      console.error(error);
      alert("Something went wrong.");

    }
  };


  return (
    <div className="appointment-form">

      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>

        {/* Patient */}

        <label>Patient</label>

        <select
          value={patientId}
          onChange={(event) => setPatientId(event.target.value)}
          required
        >

          <option value="">
            Select Patient
          </option>

          {patients.map(patient => (

            <option
              key={patient.id}
              value={patient.id}
            >
              {patient.name} - Age {patient.age}
            </option>

          ))}

        </select>


        {/* Doctor */}

        <label>Doctor</label>

        <select
          value={doctorId}
          onChange={(event) => setDoctorId(event.target.value)}
          required
        >

          <option value="">
            Select Doctor
          </option>

          {doctors.map(doctor => (

            <option
              key={doctor.id}
              value={doctor.id}
            >
              {doctor.name} - {doctor.specialization}
            </option>

          ))}

        </select>


        {/* Appointment Date */}

        <label>Appointment Date</label>

        <input
          type="datetime-local"
          value={appointmentDate}
          onChange={(event) => setAppointmentDate(event.target.value)}
          required
        />


        <button type="submit">
          Book Appointment
        </button>

      </form>

    </div>
  );
}

export default AppointmentForm;