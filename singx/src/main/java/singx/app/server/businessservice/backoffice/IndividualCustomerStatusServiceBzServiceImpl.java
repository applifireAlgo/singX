package singx.app.server.businessservice.backoffice;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import java.lang.Override;
import java.util.List;
import singx.app.shared.backoffice.GetICProfileStatus;

@Component
public class IndividualCustomerStatusServiceBzServiceImpl implements IndividualCustomerStatusServiceBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<GetICProfileStatus> executeQueryGetICProfileStatus(String ccmapcontactid) throws Exception {
        java.util.List<singx.app.shared.backoffice.GetICProfileStatus> listDtoInterface = new java.util.ArrayList<singx.app.shared.backoffice.GetICProfileStatus>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "DAD4A65D-220D-47E0-A6D0-AEFDEC0DC8AC");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectCcmapcontactid = new atg.taglib.json.util.JSONObject();
            jsonObjectCcmapcontactid.put("name", "ccmapcontactid");
            jsonObjectCcmapcontactid.put("value", ccmapcontactid);
            jsonObjectCcmapcontactid.put("datatype", "VARCHAR");
            jsonObjectCcmapcontactid.put("index", 1);
            jsonArray.add(jsonObjectCcmapcontactid);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("singx.app.shared.backoffice.GetICProfileStatus", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
