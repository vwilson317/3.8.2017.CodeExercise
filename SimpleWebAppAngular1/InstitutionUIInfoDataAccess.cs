using System.Configuration;

namespace SimpleWebAppAngular1
{
    public class InstitutionUIInfoDataAccess : DataAccessBase<InstitutionUIInfo>, IInstitutionUIInfoDataAccess
    {
        public InstitutionUIInfoDataAccess() 
            : base(ConfigurationManager.ConnectionStrings["FI_Info_DB"].ConnectionString)
        {
        }

        public override string GetAllSp()
        {
            return "app.p_GetInstitutionUIInfo";
        }

        public override string GetByIdSp()
        {
            return string.Empty;
        }

        public override string QueryBySp()
        {
            return "app.p_GetInstitutionUIInfoById";
        }


        public override string GetUpdateSp()
        {
            return "app.p_ModifyInstitutionUIInfo";
        }
    }

    public interface IInstitutionUIInfoDataAccess : IDataAccess<InstitutionUIInfo>
    {

    }
}
