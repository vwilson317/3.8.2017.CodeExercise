namespace SimpleWebAppAngular1
{
    public interface IInstitutionInfo
    {
        /// <summary>
        /// Gets the Financial Institution's Id.
        /// </summary>
        int InstitutionId { get; set; }

        /// <summary>
        /// Gets the Financial Institution's Name.
        /// </summary>
        string BankName { get; set; }

        /// <summary>
        /// Gets the Financial Institution's Code Name.
        /// </summary>
        string CodeName { get; set; }

        /// <summary>
        /// Gets the Financial Institution's OPS Version.
        /// </summary>
        string Version { get; set; }

      
    }

    public class InstitutionInfo : IInstitutionInfo
    {

        public int InstitutionId {get; set; }

        public string BankName { get; set; }
        

        public string CodeName {get; set; }


        public string Version { get; set; }
       
    }
}