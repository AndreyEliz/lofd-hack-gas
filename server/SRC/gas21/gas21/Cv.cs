using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Cv
    {
        public Cv()
        {
            Awards = new HashSet<Awards>();
            Contacts = new HashSet<Contacts>();
            Education = new HashSet<Education>();
            Languages = new HashSet<Languages>();
            Publication = new HashSet<Publication>();
            Skills = new HashSet<Skills>();
        }

        public int Id { get; set; }
        public string Fio { get; set; }
        public string Label { get; set; }
        public string Area { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Salary { get; set; }

        public bool Internal { get; set; }
        public string Status { get; set; }
        public string Source { get;set; }
        public int Quality { get; set; }
        public string Type { get; set; } 

        public ICollection<Awards> Awards { get; set; }
        public ICollection<Contacts> Contacts { get; set; }
        public ICollection<Education> Education { get; set; }
        public ICollection<Languages> Languages { get; set; }
        public ICollection<Publication> Publication { get; set; }
        public ICollection<Skills> Skills { get; set; }
    }
}
