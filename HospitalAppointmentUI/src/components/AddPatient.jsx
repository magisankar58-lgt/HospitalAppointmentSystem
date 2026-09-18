import { useState } from "react";

function AddPatient({ onPatientAdded }) {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {

    event.preventDefault();

    const patient = {
      name: name,
      age: Number(age),
      gender: gender,
      phone: phone,
      email: email
    };

    try {

      const response = await fetch(
        "https://localhost:7106/api/Patients",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(patient)
        }
      );

      if (response.ok) {

        alert("Patient added successfully!");

        onPatientAdded();

        setName("");
        setAge("");
        setGender("");
        setPhone("");
        setEmail("");

      } else {

        alert("Failed to add patient.");

      }

    } catch (error) {

      console.error("Patient API Error:", error);

      alert("Error: " + error.message);

    }
  };

  return (
    <div className="add-patient">

      <h2>Add Patient</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label>Age</label>

        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />

        <label>Gender</label>

        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          required
        >

          <option value="">
            Select Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

        </select>

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
          Add Patient
        </button>

      </form>

    </div>
  );
}

export default AddPatient;