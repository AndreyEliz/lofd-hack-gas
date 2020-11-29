using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.ApiModels
{
    public class ContactsDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Skype { get; set; }
        public string Site { get; set; }
    }
}
