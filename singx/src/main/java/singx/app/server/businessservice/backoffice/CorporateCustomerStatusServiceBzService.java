package singx.app.server.businessservice.backoffice;
import java.util.List;
import singx.app.shared.backoffice.GetCCProfileStatus;

public interface CorporateCustomerStatusServiceBzService {

    public List<GetCCProfileStatus> executeQueryGetCCProfileStatus(Integer ccmapcontactid) throws Exception;
}
