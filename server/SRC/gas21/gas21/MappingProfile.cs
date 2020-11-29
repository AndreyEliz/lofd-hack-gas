using AutoMapper;
using gas21.ApiModels;
using System.Collections.Generic;
using System.Linq;

namespace gas21
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Languages, LanguagesDto>();
            CreateMap<Publication, PublicationDto>();
            CreateMap<Contacts, ContactsDto>();
            CreateMap<Education, EducationDto>();
            CreateMap<Cv, CandidateDto>()
                .ForMember(r => r.Skills, m => m.MapFrom(f => f.Skills.Select(s => s.Name)))
                .ForMember(r => r.Publication, m => m.MapFrom(f => f.Publication))
                .ForMember(r => r.Education, m => m.MapFrom(f => f.Education))
                .ForMember(r => r.Languages, m => m.MapFrom(f => f.Languages))
                .ForMember(r => r.Contacts, m=>m.MapFrom(c=>c.Contacts.FirstOrDefault()));
        }
    }
}

