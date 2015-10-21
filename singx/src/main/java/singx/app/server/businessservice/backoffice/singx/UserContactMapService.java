package singx.app.server.businessservice.backoffice.singx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import singx.app.server.businessservice.backoffice.UserContactServiceBzServiceImpl;
import singx.app.server.service.sessionmgt.SessionDataMgtService;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class UserContactMapService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private UserContactServiceBzServiceImpl userContactServiceBzServiceImpl;

    public void getConatctInfo() throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            java.lang.String userId = (java.lang.String) sessionService.getSessionData("userId");
            if (userId == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("Data not found in session");
            }
            if (userId == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            java.util.List<singx.app.shared.backoffice.GetUserContact> getusercontact_21 = userContactServiceBzServiceImpl.executeQueryGetUserContact(userId);
            for (singx.app.shared.backoffice.GetUserContact _getusercontact_21 : getusercontact_21) {
                sessionService.setSessionAttributeForString("singxcontactId", _getusercontact_21.getContactId());
            }
            for (singx.app.shared.backoffice.GetUserContact _getusercontact_21 : getusercontact_21) {
                sessionService.setSessionAttributeForString("singxcustomerId", _getusercontact_21.getCustomerId());
            }
        } catch (java.lang.Exception e) {
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        }
    }
}
