using System.Data;

namespace SimpleWebAppAngular1
{
    public class InstitutionUIInfoTable : DataTable
    {
        public new static string TableName = "app.type_InstitutionUIInfo";

        public InstitutionUIInfoTable(InstitutionUIInfo obj)
        {
            Columns.Add("InstitutionId", typeof(int));
            Columns.Add("HasInlineOffers", typeof(bool));
            Columns.Add("AccountDetailsWidgetLogos", typeof(int));
            Columns.Add("AccountOverviewWidgetLogos", typeof(int));
            Columns.Add("HasGeo", typeof(byte));
            Columns.Add("HasMobile", typeof(byte));
            Columns.Add("IsTiledFlag", typeof(byte));
            Columns.Add("UIPlatformType", typeof(string));
            Columns.Add("ColumnsInRewardSummary", typeof(int));

            Rows.Add(obj.InstitutionId, obj.HasInlineOffers, obj.AccountOverviewWidgetLogos,
                obj.AccountDetailsWidgetLogos, obj.HasGeo, obj.HasMobile, obj.IsTiledFlag, obj.UIPlatformType, obj.ColumnsInRewardSummary);
        }
    }
}
