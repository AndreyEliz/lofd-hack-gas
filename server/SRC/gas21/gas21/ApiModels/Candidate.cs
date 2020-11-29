using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.ApiModels
{
    public class CandidateDto
    {
        public int Id { get; set; }
        public string Fio { get; set; }
        public string Label { get; set; }
        public string Area { get; set; }
        public DateTime DateOfBirth { get; set; }
        public bool Internal { get; set; }
        public string Status { get; set; }
        public string Source { get; set; }
        public int Quality { get; set; }
        public string Type { get; set; }

        public ContactsDto Contacts { get; set; }

        public ICollection<EducationDto> Education { get; set; }
        public ICollection<LanguagesDto> Languages { get; set; }
        public ICollection<PublicationDto> Publication { get; set; }
        public ICollection<string> Skills { get; set; }

    }
}
