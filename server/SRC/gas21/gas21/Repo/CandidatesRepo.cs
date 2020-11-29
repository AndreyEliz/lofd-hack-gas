using gas21.ApiModels;
using gas21.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gas21.Repo
{
    public class CandidatesRepository : ICandidatesRepository
    {
        private readonly LazyloadContext _context;

        public CandidatesRepository()
        {
            _context = new LazyloadContext();
        }

        public List<Cv> All()
        {
            return _context.Cv
                .Include(i => i.Awards)
                .Include(i => i.Contacts)
                .Include(i => i.Education)
                .Include(i => i.Languages)
                .Include(i => i.Publication)
                .Include(i => i.Skills)
                .ToList();
        }

        public int UploadCandidate(CandidateDto candidate)
        {
            var cv = new Cv
            {
                Contacts = new List<Contacts>
                {
                    new Contacts
                        {
                            Phone = string.IsNullOrEmpty(candidate.Contacts.Phone) ? "" : candidate.Contacts.Phone,
                            Site = string.IsNullOrEmpty(candidate.Contacts.Site) ? "" : candidate.Contacts.Site,
                            Email = string.IsNullOrEmpty(candidate.Contacts.Email) ? "" : candidate.Contacts.Email,
                            Skype = string.IsNullOrEmpty(candidate.Contacts.Skype) ? "" : candidate.Contacts.Skype
                        }
                },
                DateOfBirth = candidate.DateOfBirth,
                Fio = candidate.Fio,
                Skills = candidate.Skills.Select(s => new Skills() { Name = s }).ToList(),
                Area = candidate.Area,
                Internal = false,
                Source = string.Empty,
                Status = candidate.Status,
                Type = candidate.Type
            };
            cv.Area = string.Empty;
            cv.Label = candidate.Label;
            cv.Salary = string.Empty;
            

            _context.Cv.Add(cv);
            _context.SaveChanges();

            return cv.Id;
        }
    }
}
