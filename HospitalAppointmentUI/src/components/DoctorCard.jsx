function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">

      <h3>{doctor.name}</h3>

      <p>
        <strong>Specialization:</strong> {doctor.specialization}
      </p>

      <p>
        <strong>Phone:</strong> {doctor.phone}
      </p>

      <p>
        <strong>Email:</strong> {doctor.email}
      </p>


    </div>
  );
}

export default DoctorCard;