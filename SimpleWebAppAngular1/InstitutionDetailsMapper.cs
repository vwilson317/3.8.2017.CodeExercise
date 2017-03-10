using System.Collections.Generic;
using System.Linq;

namespace SimpleWebAppAngular1
{
    public static class InstitutionDetailsMapper
    {


        public static List<InstitutionDetails> CreateInstitutionDetailSet(List<InstitutionInfo> institutionsInfo, List<InstitutionUIInfo> institutionsUIInfo)
        {

            var instituionsDetails = new List<InstitutionDetails>();

            foreach (var institutionInfo in institutionsInfo)
            {
                var institutionDetails = new InstitutionDetails
                {
                    Info = institutionInfo,
                    UIInfo = institutionsUIInfo.Where(x => x.InstitutionId == institutionInfo.InstitutionId).ToList()
                };

                instituionsDetails.Add(institutionDetails);
            }
            
            return instituionsDetails;
        }

    }
}