import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

function DoctorList({ refresh }) {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

    fetch("https://localhost:7106/api/Doctors")
      .then(response => response.json())
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
      });

  }, [refresh]);

  return (
    <div>

      <h2>Our Doctors</h2>

      {doctors.map(doctor => (

        <DoctorCard
          key={doctor.id}
          doctor={doctor}
        />

      ))}

    </div>
  );
}

export default DoctorList;
