package singx.app.server.businessservice.backoffice;
import java.util.List;
import singx.app.shared.backoffice.GetICProfileStatus;

public interface IndividualCustomerStatusServiceBzService {

    public List<GetICProfileStatus> executeQueryGetICProfileStatus(String ccmapcontactid) throws Exception;
}
