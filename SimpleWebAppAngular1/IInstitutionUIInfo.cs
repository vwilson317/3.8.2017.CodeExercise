namespace SimpleWebAppAngular1
{
    public interface IInstitutionUIInfo
    {
        /// <summary>
        /// Gets the Financial Institution's Id.
        /// </summary>
        int InstitutionId { get; set; }

        /// <summary>
        /// Gets the Platform ID for the Institution.
        /// </summary>
        string UIPlatformType { get; set; }

        /// <summary>
        /// Gets the # of logos in the Account Overview widget for the Institution.
        /// </summary>
        int AccountOverviewWidgetLogos { get; set; }

        /// <summary>
        /// Gets the # of logos in the Account Details widget for the Institution.
        /// </summary>
        int AccountDetailsWidgetLogos { get; set; }

        /// <summary>
        /// Indicates whether the Institution has inline offers.
        /// </summary>
        bool HasInlineOffers { get; set; }

        /// <summary>
        /// Indicates the # of columns in Reward summary for the Institution.
        /// </summary>
        int ColumnsInRewardSummary { get; set; }

        /// <summary>
        /// Indicates whether the Institution has columns in Reward summary or is tiled.
        /// </summary>
        int IsTiledFlag { get; set; }

        /// <summary>
        /// Indicates whether the Institution has mobile feature enabled.
        /// </summary>
        bool HasMobile { get; set; }

        /// <summary>
        /// Indicates whether the Institution has Geo feature enabled.
        /// </summary>
        bool HasGeo { get; set; }
    }
}