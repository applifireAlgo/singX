package singx.app.shared.backoffice;
import com.athena.server.bizService.DTOMapperInterface;

public class GetICProfileStatus implements DTOMapperInterface {

    private Long profileStatus;

    public GetICProfileStatus(Object obj) {
        if (obj != null) {
            profileStatus = (java.lang.Long) obj;
        } else {
            profileStatus = null;
        }
    }

    public Long getProfileStatus() {
        return profileStatus;
    }
}
