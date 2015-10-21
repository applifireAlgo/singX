package singx.app.server.businessservice.backoffice.singx;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import singx.app.server.businessservice.backoffice.IndividualCustomerStatusServiceBzServiceImpl;
import singx.app.server.service.sessionmgt.SessionDataMgtService;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;
import singx.app.shared.backoffice.GetICProfileStatus;

@Component
public class IndividualProfileStatusService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private IndividualCustomerStatusServiceBzServiceImpl individualCustomerStatusServiceBzServiceImpl;

    public List<GetICProfileStatus> individualProfileStatus() throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        java.util.List<singx.app.shared.backoffice.GetICProfileStatus> geticprofilestatus_22;
        try {
            java.lang.String singxcontactId = (java.lang.String) sessionService.getSessionData("singxcontactId");
            if (singxcontactId == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("Data not found in session");
            }
            geticprofilestatus_22 = individualCustomerStatusServiceBzServiceImpl.executeQueryGetICProfileStatus(singxcontactId);
            return geticprofilestatus_22;
        } catch (java.lang.Exception e) {
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        }
    }
}
