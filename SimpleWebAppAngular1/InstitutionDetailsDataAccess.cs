using System.Collections.Generic;
using System.Linq;

namespace SimpleWebAppAngular1
{
    public class InstitutionDetailsDataAccess: IInstitutionDetailsDataAccess
    {
        readonly InstitutionInfoDataAccess _infoDataAccess = new InstitutionInfoDataAccess();
        //readonly InstitutionUIInfoDataAccess _UIinfoDataAccess = new InstitutionUIInfoDataAccess();
        

        public List<InstitutionDetails> GetAll()
        {
            List<InstitutionInfo> institutionsInfo = _infoDataAccess.GetAll();
            List<InstitutionUIInfo> institutionsUIInfo = new List<InstitutionUIInfo>();//_UIinfoDataAccess.GetAll();

            return InstitutionDetailsMapper.CreateInstitutionDetailSet(institutionsInfo, institutionsUIInfo);
        }

        public InstitutionDetails Get(int id)
        {
            return this.GetAll().FirstOrDefault(x => x.Info.InstitutionId == id);
        }
    }

    public interface IInstitutionDetailsDataAccess: IDataAccess<InstitutionDetails>
    {

    }
}
