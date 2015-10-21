package singx.app.shared.backoffice;
import com.athena.server.bizService.DTOMapperInterface;

public class GetUserContact implements DTOMapperInterface {

    private String contactId;

    private String customerId;

    public GetUserContact(Object[] aryObject) {
        if (aryObject != null) {
            contactId = (java.lang.String) aryObject[0];
            customerId = (java.lang.String) aryObject[1];
        } else {
            contactId = null;
            customerId = null;
        }
    }

    public String getContactId() {
        return contactId;
    }

    public String getCustomerId() {
        return customerId;
    }
}
