using System;
using System.Collections.Generic;

namespace SimpleWebApi.Controllers
{
    public class TitleResource
    {
        public int TitleId { get; set; }
        public string TitleName { get; set; }
        public Nullable<int> ReleaseYear { get; set; }
        public List<AwardsResource> Awards{ get; set; }
    }
}