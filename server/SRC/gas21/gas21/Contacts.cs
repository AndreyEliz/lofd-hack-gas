using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Contacts
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Skype { get; set; }
        public string Site { get; set; }
        public int CandidateId { get; set; }

        public Cv Candidate { get; set; }
    }
}
