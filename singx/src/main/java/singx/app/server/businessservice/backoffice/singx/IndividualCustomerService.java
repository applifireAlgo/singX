package singx.app.server.businessservice.backoffice.singx;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import singx.app.server.repository.CustomerXContactsRepository;
import singx.app.server.repository.IndividualRegDetailRepository;
import singx.app.server.repository.SingXCustomerRepository;
import singx.app.server.repository.SingxContactsRepository;
import singx.app.server.service.sessionmgt.SessionDataMgtService;
import singx.app.shared.singx.CustomerXContacts;
import singx.app.shared.singx.IndividualRegDetail;
import singx.app.shared.singx.SingXCustomer;
import singx.app.shared.singx.SingxContacts;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import singx.app.shared.backoffice.singx.CustomerContaDTO;

@Component
public class IndividualCustomerService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private SingXCustomerRepository<SingXCustomer> singXCustomerRepository;

    @Autowired
    private IndividualRegDetailRepository<IndividualRegDetail> individualRegDetailRepository;

    @Autowired
    private SingxContactsRepository<SingxContacts> singxContactsRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private CustomerXContactsRepository<CustomerXContacts> customerXContactsRepository;

    public void genCustomer(CustomerContaDTO individualDTO) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            singx.app.shared.backoffice.acl.ContactACL contactacl_0 = new singx.app.shared.backoffice.acl.ContactACL(individualDTO);
            singx.app.shared.backoffice.acl.CustomerACL customeracl_1 = new singx.app.shared.backoffice.acl.CustomerACL(individualDTO);
            singx.app.shared.backoffice.acl.IndividualCustACL individualcustacl_2 = new singx.app.shared.backoffice.acl.IndividualCustACL(individualDTO);
            if (contactacl_0 == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.SingxContacts singxcontacts_3 = singxContactsRepository.save(contactacl_0.contactACL());
            if (customeracl_1 == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.SingXCustomer singxcustomer_4 = singXCustomerRepository.save(customeracl_1.custAcl());
            if (individualcustacl_2 == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.IndividualRegDetail individualregdetail_5 = individualRegDetailRepository.save(individualcustacl_2.indiCustAcl());
            ruleEngineInterface.initialize("6588197e-fb36-43c7-85d6-4cf37ab54044");
            ruleEngineInterface.add(contactacl_0);
            ruleEngineInterface.add(customeracl_1);
            ruleEngineInterface.add(individualcustacl_2);
            ruleEngineInterface.add(singxcontacts_3);
            ruleEngineInterface.add(singxcustomer_4);
            ruleEngineInterface.add(individualregdetail_5);
            ruleEngineInterface.add(individualDTO);
            ruleEngineInterface.executeRule();
            individualRegDetailRepository.update((singx.app.shared.singx.IndividualRegDetail) ruleEngineInterface.getResult("individualregdetail_5"));
            if ((singx.app.shared.singx.CustomerXContacts) ruleEngineInterface.getResult("customerxcontacts_75") == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.CustomerXContacts customerxcontacts_7 = customerXContactsRepository.save((singx.app.shared.singx.CustomerXContacts) ruleEngineInterface.getResult("customerxcontacts_75"));
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        }
    }
}
