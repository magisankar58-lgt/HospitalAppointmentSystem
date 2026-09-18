import { useState } from "react";
import Navbar from "./components/Navbar";
import DoctorList from "./components/DoctorList";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import AddDoctor from "./components/AddDoctor";
import AddPatient from "./components/AddPatient";
import PatientList from "./components/PatientList";

function App() {

  const [refresh, setRefresh] = useState(0);

  return (
    <div>

      <Navbar />

      <main>

        <h1>Welcome to Our Hospital</h1>

        <p>
          Book and manage your hospital appointments easily.
        </p>

        <button>Book Appointment</button>

        <DoctorList
          refresh={refresh}
        />

        <AddDoctor
          onDoctorAdded={() => setRefresh(refresh + 1)}
        />

        <AddPatient
          onPatientAdded={() => setRefresh(refresh + 1)}
        />
        <PatientList
  refresh={refresh}
/>

<AppointmentForm
  onAppointmentBooked={() => setRefresh(refresh + 1)}
  refresh={refresh}
/>

        <AppointmentList
          refresh={refresh}
        />

      </main>

    </div>
  );
}

export default App;