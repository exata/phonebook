using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace phonebook.Models
{
    public class Company
    {

        public int Id { get; set; }

        [Display(Name="Company")]
        [Required(ErrorMessage="And Company Name is Required"), MinLength(2)]
        public string Name { get; set; }
        
        public virtual ICollection<Person> People { get; set; }
    }
}