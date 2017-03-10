using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccess;
using AutoMapper;

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
            var entities = data.Select(x => x).ToList();
            var resources = entities.Select(_mapper.Map<TitleResource>).ToList();

            return Request.CreateResponse(HttpStatusCode.Accepted, resources);
        }
    }

    public class TitleResource
    {
        public string TitleName { get; set; }
    }
}
