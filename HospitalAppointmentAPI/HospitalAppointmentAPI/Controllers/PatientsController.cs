using HospitalAppointmentAPI.Data;
using HospitalAppointmentAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalAppointmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PatientsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            return await _context.Patients.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> CreatePatient(Patient patient)
        {
            _context.Patients.Add(patient);

            await _context.SaveChangesAsync();

            return Ok(patient);
        }
    }
}