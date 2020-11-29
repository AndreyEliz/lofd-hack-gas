using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using gas21.ApiModels;
using gas21.Interfaces;
using gas21.Repo;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web;
using gas21.services;
using System.IO;

namespace gas21.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly ICandidatesRepository _candidatesRepo;
        private readonly IMapper _mapper;
        private readonly CvService _cvService;
        public CandidatesController(ICandidatesRepository candidatesRepository, IMapper mapper, CvService cvService)
        {
            _candidatesRepo = candidatesRepository;
            _mapper = mapper;
            _cvService = cvService;
        }

        [HttpGet]
        public async Task<ActionResult> All()
        {
            var dbResult = _candidatesRepo.All();
            var mapResult = _mapper.Map<List<Cv>, List<CandidateDto>>(dbResult);
            string result = JsonConvert.SerializeObject(mapResult, Formatting.Indented, new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });

            return Content(result, "application/json");
        }


        [HttpPost]
        public async Task<ActionResult> UploadCandidate([FromBody]CandidateDto candidate)
        {
            var id = _candidatesRepo.UploadCandidate(candidate);

            return Content($"{{ \"id\" : {id} }}", "application/json");
        }

        [HttpGet("{name}")]
        public async Task<FileStreamResult> File(string name)
        {
            var filepath = Path.Combine(Path.Combine(Directory.GetCurrentDirectory(), "Files"), name);
            FileStream fs = new FileStream(filepath, FileMode.Open);
            string file_type = "application/pdf";
            string file_name = "PDFIcon.pdf";
            return File(fs, file_type, file_name);
        }


        [HttpPost]
        public async Task<ActionResult> UploadCsv(IFormFile file)
        {
            var baseUrl = Request.Host.Value;
            var name = $"{Guid.NewGuid().ToString()}.pdf";
            var fileFolder = Path.Combine(Directory.GetCurrentDirectory(), "Files");

            if(!Directory.Exists(fileFolder))
            {
                Directory.CreateDirectory(fileFolder);
            }

            var path = Path.Combine(fileFolder, name);
            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }

            using (var stream = new FileStream(path, FileMode.OpenOrCreate))
            {
                stream.Position = 0;
                await file.CopyToAsync(stream);
                stream.Flush();
                stream.Close();

                var result = await _cvService.MakeRequest(Request.Scheme +"://"+ baseUrl + @"/api/Candidates/File/"+ name);
                return Content($"{{\"result\" : {result}}}", "application/json");
            }
        }
    }
}