using System;
using AutoMapper.Configuration.Conventions;

namespace SimpleWebApi.Controllers
{
    public class AwardsResource
    {
        public int AwardId { get; set; }
        //TODO: figure out why this doesn't work
        public Nullable<bool> AwardWon { get; set; }
        public Nullable<int> AwardYear { get; set; }
        [MapTo("Award1")]
        public string Award1 { get; set; }
        public string AwardCompany { get; set; }

    }
}