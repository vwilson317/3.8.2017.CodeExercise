using System.Configuration;

namespace SimpleWebAppAngular1
{
    public class InstitutionInfoDataAccess : DataAccessBase<InstitutionInfo>, IInstitutionInfoDataAccess
    {
        public InstitutionInfoDataAccess()
            : base(ConfigurationManager.ConnectionStrings["OMS_DB"].ConnectionString) { }

        public override string GetAllSp()
        {
            return "dbo.p_GetInstitutionInfo";
        }

        public override string GetByIdSp()
        {
            return string.Empty;
        }

        public override string QueryBySp()
        {
            return string.Empty;
        }

        public override string GetUpdateSp()
        {
            return string.Empty;
        }
    }

    public interface IInstitutionInfoDataAccess : IDataAccess<InstitutionInfo>
    {

    }
}
