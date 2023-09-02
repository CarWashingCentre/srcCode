using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    [Table("Admin")]
    public class Admin
    {
        [Required]
        [Column("id")] // Specify the actual field name in the database
        public int Id { get; set; }

        [Required]
        [Column("username")]
        public string? username { get; set; }

        [Required]
        [Column("password")]
        public string? Password { get; set; }
    }
}
