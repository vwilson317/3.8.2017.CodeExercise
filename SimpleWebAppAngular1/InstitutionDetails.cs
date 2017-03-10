using System.Collections.Generic;

namespace SimpleWebAppAngular1
{ 
    public class InstitutionDetails : IInstitutionDetails
    {
        public InstitutionInfo  Info { get; set; }
        public List<InstitutionUIInfo>  UIInfo { get; set; }
    }

    public class InstitutionUIInfo : IInstitutionUIInfo
    {
        public string UIPlatformType {get; set; }
       

        public int AccountOverviewWidgetLogos {get; set; }
       

        public int AccountDetailsWidgetLogos {get; set; }
       

        public bool HasInlineOffers {get; set; }
       

        public int ColumnsInRewardSummary {get; set; }
       

        public int IsTiledFlag {get; set; }
       

        public bool HasMobile {get; set; }
        

        public bool HasGeo {get; set; }


        public int InstitutionId { get; set; }
    }
}
