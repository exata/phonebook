using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phonebook.Models
{
    public class Person
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public int CompanyId { get; set; }
        public virtual Company Company { get; set; }

    }
}