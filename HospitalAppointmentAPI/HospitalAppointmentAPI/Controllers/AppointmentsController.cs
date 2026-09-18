using HospitalAppointmentAPI.Data;
using HospitalAppointmentAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalAppointmentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AppointmentsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Appointment>>> GetAppointments()
        {
            return await _context.Appointments
     .Include(a => a.Patient)
     .Include(a => a.Doctor)
     .ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Appointment>> CreateAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);

            await _context.SaveChangesAsync();

            return Ok(appointment);
        }
    }
}