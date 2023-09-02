using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Attendance
    {
        [Key]
        public int AttendanceId { get; set; }
        public String EmpName { get; set; }
        public DateTime Date { get; set; }
        public Boolean Attendance_Status { get; set; }

        public Employee? Employee { get; set; }
    }
}




