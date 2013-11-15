using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace phonebook.Models
{
    public class Person
    {

        public int Id { get; set; }
        public string Name { get; set; }

        [Display(Name="Company")]
        [Required(ErrorMessage="An Company is Required")]
        public int CompanyId { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Phone Number"), MaxLength(14)]
        public string Phone { get; set; }

        [Display(Name = "Street")]
        public string Street { get; set; }

        [Display(Name = "Company")]
        public virtual Company Company { get; set; }

    }
}