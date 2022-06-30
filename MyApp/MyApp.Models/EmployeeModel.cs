using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace MyApp.Models
{
    public class EmployeeModel
    {
        public int EmployeeID { get; set; }
        
        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [EmailAddress][Required]
        public string Email { get; set; }

        public string Address { get; set; }

        [Required]
        public int Code { get; set; }
    }
}
