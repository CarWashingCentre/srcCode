using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Users")]
    public class Login
    {
        [Required]
        [Column("email")]
        public string? Email { get; set; }

        [Required]
        [Column("password")]
        public string? Password { get; set; }

         [Required]
        [Column("roleid")] // Specify the actual field name in the database
        public int RoleId { get; set; }
    }
}
