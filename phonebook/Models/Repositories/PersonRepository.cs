using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace phonebook.Models.Repositories
{
    public class PersonRepository
    {

        PhonebookContext db = new PhonebookContext();

        public IEnumerable<Person> All(string busca, string email, string phone, string companyid)
        {
            var result = from e in db.People
                         select e;

            if (!string.IsNullOrEmpty(busca))
            {
                result = result.Where(e => e.Name.Contains(busca));
            }

            if (!string.IsNullOrEmpty(email))
            {
                result = result.Where(e => e.Email.Contains(email));

            }

            if (!string.IsNullOrEmpty(phone))
            {
                result = result.Where(e => e.Phone.Contains(phone));
            }

            if (!string.IsNullOrEmpty(companyid))
            {
                int x = int.Parse(companyid);
                result = result.Where(e => e.CompanyId.Equals(x));
            }

            return result;

        }

    }
}