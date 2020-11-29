using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Languages
    {
        public int Id { get; set; }
        public string Language { get; set; }
        public int CandidateId { get; set; }
        public string Level { get; set; }

        public Cv Candidate { get; set; }
    }
}
