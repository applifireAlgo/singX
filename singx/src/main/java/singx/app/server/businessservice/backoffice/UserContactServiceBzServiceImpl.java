package singx.app.server.businessservice.backoffice;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import java.lang.Override;
import java.util.List;
import singx.app.shared.backoffice.GetUserContact;

@Component
public class UserContactServiceBzServiceImpl implements UserContactServiceBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<GetUserContact> executeQueryGetUserContact(String userid) throws Exception {
        java.util.List<singx.app.shared.backoffice.GetUserContact> listDtoInterface = new java.util.ArrayList<singx.app.shared.backoffice.GetUserContact>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "6A484D4B-B76D-4400-A11A-3D03BFCE5E67");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            atg.taglib.json.util.JSONObject jsonObjectUserid = new atg.taglib.json.util.JSONObject();
            jsonObjectUserid.put("name", "userid");
            jsonObjectUserid.put("value", userid);
            jsonObjectUserid.put("datatype", "VARCHAR");
            jsonObjectUserid.put("index", 1);
            jsonArray.add(jsonObjectUserid);
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("singx.app.shared.backoffice.GetUserContact", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
