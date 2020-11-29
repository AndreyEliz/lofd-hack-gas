using System;
using System.Collections.Generic;

namespace gas21
{
    public partial class Education
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Area { get; set; }
        public string Degree { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int CandidateId { get; set; }

        public Cv Candidate { get; set; }
    }
}
