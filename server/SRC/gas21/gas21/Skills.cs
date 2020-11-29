using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Skills
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CandidateId { get; set; }

        public Cv Candidate { get; set; }
    }
}
