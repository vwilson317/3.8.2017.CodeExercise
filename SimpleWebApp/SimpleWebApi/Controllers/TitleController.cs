using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MVC = System.Web.Mvc;
using DataAccess;
using AutoMapper;
using Newtonsoft.Json;

namespace SimpleWebApi.Controllers
{
    public class TitleController : ApiController
    {
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public TitleController(IRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public HttpResponseMessage Get()
        {
            var data = _repository.Entity<Title>();
            var list = data.Select(x => x).ToList();
            var resources = list.Select(y => _mapper.Map<TitleResource>(y)).ToList();

            var jsonResponse = JsonConvert.SerializeObject(resources);
            return Request.CreateResponse(HttpStatusCode.Accepted, jsonResponse);
        }
    }

    public class TitleResource
    {
        public string TitleName { get; set; }
    }
}
