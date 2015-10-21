package singx.app.server.businessservice.backoffice;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import java.lang.Override;
import java.util.List;
import singx.app.shared.backoffice.GetCCProfileStatus;

@Component
public class CorporateCustomerStatusServiceBzServiceImpl implements CorporateCustomerStatusServiceBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<GetCCProfileStatus> executeQueryGetCCProfileStatus(Integer ccmapcontactid) throws Exception {
        java.util.List<singx.app.shared.backoffice.GetCCProfileStatus> listDtoInterface = new java.util.ArrayList<singx.app.shared.backoffice.GetCCProfileStatus>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "FE54E447-90AC-4939-8014-4C0778958B64");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectCcmapcontactid = new atg.taglib.json.util.JSONObject();
            jsonObjectCcmapcontactid.put("name", "ccmapcontactid");
            jsonObjectCcmapcontactid.put("value", ccmapcontactid);
            jsonObjectCcmapcontactid.put("datatype", "INT");
            jsonObjectCcmapcontactid.put("index", 1);
            jsonArray.add(jsonObjectCcmapcontactid);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("singx.app.shared.backoffice.GetCCProfileStatus", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
