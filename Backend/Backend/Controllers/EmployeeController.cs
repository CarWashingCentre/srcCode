using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly AppDbContext _context;
        public EmployeeController(AppDbContext context)
        {
            _context = context;
        }


        [HttpPost] // Endpoint for user registration
        public async Task<IActionResult> RegisterUser(Employee employee)
        {
            if (ModelState.IsValid)
            {
                // Check if the email is already registered
                if (await _context.Employees.AnyAsync(u => u.GovtProof == employee.GovtProof))
                {
                    return Conflict("Aadhar already registered");
                }

                _context.Employees.Add(employee);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }

    }
}
