using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace phonebook.Models
{
    public class PhonebookContext : DbContext
    {

        public PhonebookContext()  : base("Database") { }

        public DbSet<Company> Companies { get; set; }
        public DbSet<Person> People { get; set; }

    }
}