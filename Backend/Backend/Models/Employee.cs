using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("Employee")]
    public class Employee
    {

        [Required]
        [Column("Id")]
        public int Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String GovtProof { get; set; }
        public String Contact { get; set; }
        public String Address { get; set; }
        public int ZIPCode { get; set; }

        
        public ICollection<Attendance>? Attendances { get; set; }
    }
}
