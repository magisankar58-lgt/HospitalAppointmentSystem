# Hospital Appointment System

A full-stack web application for managing doctors, patients, and hospital appointments.

## Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS
* Vite

### Backend

* C#
* ASP.NET Core Web API
* Entity Framework Core

### Database

* Microsoft SQL Server

## Features

* View doctors
* Add new doctors
* View patients
* Add new patients
* Book hospital appointments
* View booked appointments
* Display doctor and patient details
* Connect React frontend with ASP.NET Core Web API
* Store and retrieve data using SQL Server

## Project Architecture

```text
React Frontend
      ↓
ASP.NET Core Web API
      ↓
Entity Framework Core
      ↓
SQL Server Database
```

## Main Modules

### Doctor Management

* Add doctor
* View doctors
* Store doctor name, specialization, phone and email

### Patient Management

* Add patient
* View patients
* Store patient name, age, gender, phone and email

### Appointment Management

* Select a patient
* Select a doctor
* Select appointment date and time
* Book an appointment
* View booked appointments

## API Endpoints

```text
GET  /api/Doctors
POST /api/Doctors

GET  /api/Patients
POST /api/Patients

GET  /api/Appointments
POST /api/Appointments
```

## Database

The application uses SQL Server with the following main tables:

* Doctors
* Patients
* Appointments

Entity Framework Core migrations are used to create and update the database schema.

## How to Run

### Backend

1. Open `HospitalAppointmentAPI` in Visual Studio.
2. Make sure SQL Server is running.
3. Update the connection string in `appsettings.json` according to your local SQL Server configuration.
4. Run the ASP.NET Core Web API.
5. Open Swagger to test the API.

### Frontend

Open the `HospitalAppointmentUI` folder in a terminal and run:

```bash
npm install
npm run dev
```

Then open the URL shown by Vite in the terminal.

## What I Learned

Through this project, I practiced:

* React components
* React state management using `useState`
* API calls using `fetch`
* React `useEffect`
* ASP.NET Core Web API
* C# backend development
* Entity Framework Core
* SQL Server database integration
* REST API communication
* CRUD operations
* Connecting frontend, backend and database

## Author

Magi S
