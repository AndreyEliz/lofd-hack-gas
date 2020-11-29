using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Awards
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Summary { get; set; }
        public int CandidateId { get; set; }

        public Cv Candidate { get; set; }
    }
}
