package singx.app.server.businessservice.backoffice;
import java.util.List;
import singx.app.shared.backoffice.GetUserContact;

public interface UserContactServiceBzService {

    public List<GetUserContact> executeQueryGetUserContact(String userid) throws Exception;
}
