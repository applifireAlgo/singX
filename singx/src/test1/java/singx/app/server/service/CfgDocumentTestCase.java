package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgDocumentRepository;
import singx.app.shared.singx.CfgDocument;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.singx.CustomerType;
import singx.app.server.repository.CustomerTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgDocumentTestCase {

    @Autowired
    private CfgDocumentRepository<CfgDocument> cfgdocumentRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            Country country = new Country();
            country.setCapital("vSYR2zuPcQZXjQuYsK9jdlyntJTgqlRA");
            country.setCapitalLatitude(1);
            country.setCapitalLongitude(10);
            country.setCountryCode1("sWI");
            country.setCountryCode2("09K");
            country.setCountryFlag("xAF4i7hsOACFun9Nsq6mj6jKQjFatQADgazWIpImm3V5Ekfprs");
            country.setCountryName("nPObmapjTWhV8SOusxvFoutM6pMktdJ6aKXPqB18Pq3pSMDbvS");
            country.setCurrencyCode("KV2");
            country.setCurrencyName("G70GTvPr7l4tHtgRkdxpal4NDAuzpZmagHdQucLIkTmrxBj5PP");
            country.setCurrencySymbol("FhOgnPHD4O8nsIhBP0rg4NByFKeme3c4");
            country.setIsoNumeric(2);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            CustomerType customertype = new CustomerType();
            customertype.setCustomerTypeName("NYOYY3WrtugmdLqBBMuSfgQgSRo75ZRL0vgyEUzcokPNVwuX5x");
            CustomerType CustomerTypeTest = customertypeRepository.save(customertype);
            map.put("CustomerTypePrimaryKey", customertype._getPrimarykey());
            CfgDocument cfgdocument = new CfgDocument();
            cfgdocument.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdocument.setCustomerType((java.lang.String) CustomerTypeTest._getPrimarykey());
            cfgdocument.setDisplaySeq(2147483647);
            cfgdocument.setDocumentName("YhkPmkrW1dOSW4PggksPc9MphwyvvfGqO1dFoGAeK5kWYVmklv");
            cfgdocument.setIsExpiryDateReqd(true);
            cfgdocument.setIsIssueDateReqd(true);
            cfgdocument.setIsMandatory(true);
            cfgdocument.setIsReferenceNoReqd(true);
            cfgdocument.setMaxSize(2147483647);
            cfgdocument.setRemarks("1v1Ji3i97qnN5fQ0NIrOe4Iqxt0cYIvm4ljin7D5wwqlUZFjBR");
            cfgdocument.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgdocument.setEntityValidator(entityValidator);
            cfgdocument.isValid();
            cfgdocumentRepository.save(cfgdocument);
            map.put("CfgDocumentPrimaryKey", cfgdocument._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private CustomerTypeRepository<CustomerType> customertypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocumentPrimaryKey"));
            CfgDocument cfgdocument = cfgdocumentRepository.findById((java.lang.String) map.get("CfgDocumentPrimaryKey"));
            cfgdocument.setDisplaySeq(2147483647);
            cfgdocument.setDocumentName("xYhqqGuIqnkc2EH2yIhmfnzvFFiegcdG8ODvq0iiEMPUT4zpOP");
            cfgdocument.setMaxSize(2147483647);
            cfgdocument.setRemarks("RE30a9pFNd8qQv4Erh9g3HER4vptIHAxkZ3BR11udpF7mZGkHr");
            cfgdocument.setVersionId(1);
            cfgdocument.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgdocumentRepository.update(cfgdocument);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<CfgDocument> listofcountryId = cfgdocumentRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycustomerType() {
        try {
            java.util.List<CfgDocument> listofcustomerType = cfgdocumentRepository.findByCustomerType((java.lang.String) map.get("CustomerTypePrimaryKey"));
            if (listofcustomerType.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocumentPrimaryKey"));
            cfgdocumentRepository.findById((java.lang.String) map.get("CfgDocumentPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocumentPrimaryKey"));
            cfgdocumentRepository.delete((java.lang.String) map.get("CfgDocumentPrimaryKey")); /* Deleting refrenced data */
            customertypeRepository.delete((java.lang.String) map.get("CustomerTypePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
