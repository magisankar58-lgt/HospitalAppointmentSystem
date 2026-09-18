import { useEffect, useState } from "react";

function PatientList({ refresh }) {

  const [patients, setPatients] = useState([]);

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

  return (
    <div className="patient-list">

      <h2>Our Patients</h2>

      {patients.map(patient => (

        <div className="patient-card" key={patient.id}>

          <h3>{patient.name}</h3>

          <p>
            <strong>Age:</strong> {patient.age}
          </p>

          <p>
            <strong>Gender:</strong> {patient.gender}
          </p>

          <p>
            <strong>Phone:</strong> {patient.phone}
          </p>

          <p>
            <strong>Email:</strong> {patient.email}
          </p>

        </div>

      ))}

    </div>
  );
}

export default PatientList;