import { useState } from "react";

function AddDoctor({ onDoctorAdded }) {

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (event) => {

    event.preventDefault();

    const doctor = {
      name: name,
      specialization: specialization,
      phone: phone,
      email: email
    };


    try {

      const response = await fetch(
        "https://localhost:7106/api/Doctors",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(doctor)
        }
      );


      if (response.ok) {

        alert("Doctor added successfully!");

        onDoctorAdded();

        setName("");
        setSpecialization("");
        setPhone("");
        setEmail("");

      } else {

        alert("Failed to add doctor.");

      }

} catch (error) {

  console.error("Doctor API Error:", error);

  alert("Error: " + error.message);

}
  };


  return (
    <div className="add-doctor">

      <h2>Add Doctor</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />


        <label>Specialization</label>

        <input
          type="text"
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
          required
        />


        <label>Phone</label>

        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />


        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />


        <button type="submit">
          Add Doctor
        </button>

      </form>

    </div>
  );
}

export default AddDoctor;