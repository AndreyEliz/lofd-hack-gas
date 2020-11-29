using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.ApiModels
{
    public class PublicationDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Summary { get; set; }
    }
}
