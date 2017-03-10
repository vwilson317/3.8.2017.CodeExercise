using System.Collections.Generic;

namespace SimpleWebAppAngular1
{
    public interface IInstitutionDetails
    {
       
        InstitutionInfo Info { get; set; }
        List<InstitutionUIInfo> UIInfo { get; set; }
    }
}