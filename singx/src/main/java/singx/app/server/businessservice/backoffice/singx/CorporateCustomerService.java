package singx.app.server.businessservice.backoffice.singx;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import singx.app.server.repository.CorporateRegDetailRepository;
import singx.app.server.repository.CustomerXContactsRepository;
import singx.app.server.repository.SingXCustomerRepository;
import singx.app.server.repository.SingxContactsRepository;
import singx.app.server.service.sessionmgt.SessionDataMgtService;
import singx.app.shared.singx.CorporateRegDetail;
import singx.app.shared.singx.CustomerXContacts;
import singx.app.shared.singx.SingXCustomer;
import singx.app.shared.singx.SingxContacts;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import singx.app.shared.backoffice.singx.CustomerContaDTO;

@Component
public class CorporateCustomerService {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private CorporateRegDetailRepository<CorporateRegDetail> corporateRegDetailRepository;

    @Autowired
    private SingXCustomerRepository<SingXCustomer> singXCustomerRepository;

    @Autowired
    private SingxContactsRepository<SingxContacts> singxContactsRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private CustomerXContactsRepository<CustomerXContacts> customerXContactsRepository;

    public void genCustomer(CustomerContaDTO corporateDTO) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            singx.app.shared.backoffice.acl.ContactACL contactacl_0 = new singx.app.shared.backoffice.acl.ContactACL(corporateDTO);
            singx.app.shared.backoffice.acl.CustomerACL customeracl_1 = new singx.app.shared.backoffice.acl.CustomerACL(corporateDTO);
            singx.app.shared.backoffice.acl.CorporateCustACL corporatecustacl_2 = new singx.app.shared.backoffice.acl.CorporateCustACL(corporateDTO);
            if (contactacl_0.contactACL() == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.SingxContacts singxcontacts_3 = singxContactsRepository.save(contactacl_0.contactACL());
            if (customeracl_1.custAcl() == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.SingXCustomer singxcustomer_4 = singXCustomerRepository.save(customeracl_1.custAcl());
            if (corporatecustacl_2.corpCustACL() == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.CorporateRegDetail corporateregdetail_5 = corporateRegDetailRepository.save(corporatecustacl_2.corpCustACL());
            ruleEngineInterface.initialize("561a62f1-5d62-4184-a08a-38da36d36a36");
            ruleEngineInterface.add(contactacl_0);
            ruleEngineInterface.add(customeracl_1);
            ruleEngineInterface.add(corporatecustacl_2);
            ruleEngineInterface.add(singxcontacts_3);
            ruleEngineInterface.add(singxcustomer_4);
            ruleEngineInterface.add(corporateregdetail_5);
            ruleEngineInterface.add(corporateDTO);
            ruleEngineInterface.executeRule();
            corporateRegDetailRepository.update((singx.app.shared.singx.CorporateRegDetail) ruleEngineInterface.getResult("corporateregdetail_5"));
            if ((singx.app.shared.singx.CustomerXContacts) ruleEngineInterface.getResult("customerxcontacts_89") == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            singx.app.shared.singx.CustomerXContacts customerxcontacts_7 = customerXContactsRepository.save((singx.app.shared.singx.CustomerXContacts) ruleEngineInterface.getResult("customerxcontacts_89"));
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        }
    }
}
