using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Publication
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Publisher { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Summary { get; set; }
        public int CandidateId { get; set; }

        public Cv Candidate { get; set; }
    }
}
