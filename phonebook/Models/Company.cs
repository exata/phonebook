using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phonebook.Models
{
    public class Company
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<Person> People { get; set; }
    }
}