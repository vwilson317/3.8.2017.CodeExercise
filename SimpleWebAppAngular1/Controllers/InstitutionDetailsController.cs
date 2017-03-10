using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SimpleWebAppAngular1.Controllers
{
    public class InstitutionDetailsController : ApiController
    {
        //private InstitutionDetailsDataAccess _dataAccess = new InstitutionDetailsDataAccess();


        // GET: api/InstitutionDetails/GetAll
        [HttpGet]
        [Route("api/institutionDetails")]
        public HttpResponseMessage Get()
        {
            var fakeData = GenerateFakeData();
            return Request.CreateResponse(HttpStatusCode.OK, fakeData);
            //return _dataAccess.GetAll();
        }

        #region removeLater
        private List<InstitutionDetails> GenerateFakeData()
        {
            var listOfFIs = new List<InstitutionDetails>();

            for (int i = 0; i < 20; i++)
            {
                var info = new InstitutionInfo
                {
                    BankName = "Bank of America " + i,
                    CodeName = "Spidey" + i,
                    InstitutionId = i,
                    Version = "4.3." + i
                };

                var uiInfo = new List<InstitutionUIInfo>{new InstitutionUIInfo
                {
                    AccountOverviewWidgetLogos = 4,
                    AccountDetailsWidgetLogos = 2,
                    ColumnsInRewardSummary = 3,
                    HasGeo = i%2 == 0,
                    HasMobile = (i+1)%3 == 0,
                    HasInlineOffers = (i+4)%3 == 0,
                    InstitutionId = 1,
                    IsTiledFlag = i%3,
                    UIPlatformType = "Credit"
                }};

                listOfFIs.Add(new InstitutionDetails { Info = info, UIInfo = uiInfo });
            }

            var id = new InstitutionDetails
            {
                Info = new InstitutionInfo
                {
                    BankName = "FIS",
                    CodeName = "Firebird",
                    InstitutionId = 5,
                    Version = "4.2.5"
                },
                UIInfo = new List<InstitutionUIInfo>
                {
                    new InstitutionUIInfo
                    {
                        AccountOverviewWidgetLogos = 4,
                        AccountDetailsWidgetLogos = 2,
                        ColumnsInRewardSummary = 3,
                        HasGeo = true,
                        HasMobile = false,
                        HasInlineOffers = true,
                        InstitutionId = 5,
                        IsTiledFlag = 4,
                        UIPlatformType = "Credit"
                    },
                    new InstitutionUIInfo
                    {
                        AccountOverviewWidgetLogos = 4,
                        AccountDetailsWidgetLogos = 2,
                        ColumnsInRewardSummary = 3,
                        HasGeo = true,
                        HasMobile = false,
                        HasInlineOffers = false,
                        InstitutionId = 5,
                        IsTiledFlag = 4,
                        UIPlatformType = "Loyalty"
                    },
                    new InstitutionUIInfo
                    {
                        AccountOverviewWidgetLogos = 4,
                        AccountDetailsWidgetLogos = 2,
                        ColumnsInRewardSummary = 3,
                        HasGeo = true,
                        HasMobile = false,
                        HasInlineOffers = false,
                        InstitutionId = 5,
                        IsTiledFlag = 4,
                        UIPlatformType = "Online Banking"
                    }
                }
            };

            listOfFIs.Add(id);

            return listOfFIs;
        }
        #endregion

        // GET: api/InstitutionDetails/5
        [HttpGet]
        [Route("api/institutionDetails/{id:int}")]
        public HttpResponseMessage Get(int id)
        {
            //var data = _dataAccess.Get(id);
            return Request.CreateResponse(HttpStatusCode.OK, GenerateFakeData().FirstOrDefault());
        }

        [HttpPost]
        [Route("api/institutionDetails")]
        public HttpResponseMessage UpdateInstitution(InstitutionDetails detail)
        {
            try
            {
                foreach (var currentUiInfo in detail.UIInfo)
                {
                    //_dataAccess.UpdateInstitution(currentUiInfo);
                }
            }
            catch(Exception e)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, e.Message);
            }

            //update to return updated detail from server
            return Request.CreateResponse(HttpStatusCode.OK, detail);
        }

    }
}
