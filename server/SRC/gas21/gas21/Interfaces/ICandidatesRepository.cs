using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gas21.ApiModels;

namespace gas21.Interfaces
{
    public interface ICandidatesRepository
    {
        List<Cv> All();
        int UploadCandidate(CandidateDto candidate);
    }
}
