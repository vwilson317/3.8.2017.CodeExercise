using AutoMapper;
using DataAccess;

namespace SimpleWebApi.Controllers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Title, TitleResource>();
        }
    }
}