using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.ApiModels
{
    public class EducationDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Area { get; set; }
        public string Degree { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
