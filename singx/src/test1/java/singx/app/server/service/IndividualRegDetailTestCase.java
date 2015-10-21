package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.IndividualRegDetailRepository;
import singx.app.shared.singx.IndividualRegDetail;
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
import singx.app.shared.singx.SingXCustomer;
import singx.app.server.repository.SingXCustomerRepository;
import singx.app.shared.singx.CfgDocIndividual;
import singx.app.server.repository.CfgDocIndividualRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.singx.ResidenceType;
import singx.app.server.repository.ResidenceTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class IndividualRegDetailTestCase {

    @Autowired
    private IndividualRegDetailRepository<IndividualRegDetail> individualregdetailRepository;

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
            SingXCustomer singxcustomer = new SingXCustomer();
            singxcustomer.setCountryId("3uTlN5zgNBV7sWlymqa7S7Xh2Gh0H65N6uNIafkMkA3bTZZdXs");
            singxcustomer.setCustomerTypeId("3WvGtgDPeOFMLchvnlClRYlulLyjxz71SvglUqg9vvbk1nH3OQ");
            singxcustomer.setEmailId("uZBk626L7Ldhce3wrs0lSiDDrWpfJbnZDHOSKqCpt6fZYD7vJO");
            SingXCustomer SingXCustomerTest = singxcustomerRepository.save(singxcustomer);
            map.put("SingXCustomerPrimaryKey", singxcustomer._getPrimarykey());
            CfgDocIndividual cfgdocindividual = new CfgDocIndividual();
            Country country = new Country();
            country.setCapital("zBDY8NjaB5LpS4L9X50mk5tPjMFg9MbU");
            country.setCapitalLatitude(4);
            country.setCapitalLongitude(11);
            country.setCountryCode1("JdS");
            country.setCountryCode2("UOt");
            country.setCountryFlag("mC3uZW22TgQxGdUUTEVJAvia3nbBKJuJ2jvvYx9VPGvumXJGBH");
            country.setCountryName("KHQnD9dQAcxod3BxGQHamVVMExAMlZaAbFNAlvKc0SvNKRaS7q");
            country.setCurrencyCode("N8f");
            country.setCurrencyName("suqfuiCHonVsXzghUQoFYlp890LacycjWJs00cLzVI3UYaUeso");
            country.setCurrencySymbol("agPa5tG584gEROZwE55bx1eJqsrCbRUW");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            ResidenceType residencetype = new ResidenceType();
            residencetype.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            residencetype.setResidenceTypeName("kzkgCfoxw836BMCiNoQsbcUbBmgDlXNW4e3dOwZMMiw0m38Skq");
            ResidenceType ResidenceTypeTest = residencetypeRepository.save(residencetype);
            map.put("ResidenceTypePrimaryKey", residencetype._getPrimarykey());
            cfgdocindividual.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdocindividual.setDisplaySeq(2147483647);
            cfgdocindividual.setDocumentName("EUz6j8sFAOxwdqfpqKOxUINeSWJVKesIhblccJxvv0Bf38VXtI");
            cfgdocindividual.setIsExpiryDateReqd(true);
            cfgdocindividual.setIsIssueDateReqd(true);
            cfgdocindividual.setIsMandatory(true);
            cfgdocindividual.setIsReferenceNoReqd(true);
            cfgdocindividual.setMaxSize(2147483647);
            cfgdocindividual.setRemarks("Mtu0cqGN1IHmHHhpW6bXzs5hKiqTTEE9HSVhFESJdEVBynnWrp");
            cfgdocindividual.setResidenceTypeId((java.lang.String) ResidenceTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            CfgDocIndividual CfgDocIndividualTest = cfgdocindividualRepository.save(cfgdocindividual);
            map.put("CfgDocIndividualPrimaryKey", cfgdocindividual._getPrimarykey());
            IndividualRegDetail individualregdetail = new IndividualRegDetail();
            individualregdetail.setCustomerId((java.lang.String) SingXCustomerTest._getPrimarykey()); /* ******Adding refrenced table data */
            individualregdetail.setDocumentId((java.lang.String) CfgDocIndividualTest._getPrimarykey()); /* ******Adding refrenced table data */
            individualregdetail.setExpiryDate(new java.sql.Date(123456789));
            individualregdetail.setIdProofValue("xWbht9DFhwB8VNoGQgiAuUBokZNlwLzyDdIwTmuzwWub7elanh");
            individualregdetail.setNationalityId("8tBQtB3lemNB4T47RcPQxwhdwfgurFCuX2BuNNfQ4xo0HV8QM3");
            individualregdetail.setResidenceTypeId((java.lang.String) ResidenceTypeTest._getPrimarykey());
            individualregdetail.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            individualregdetail.setEntityValidator(entityValidator);
            individualregdetail.isValid();
            individualregdetailRepository.save(individualregdetail);
            map.put("IndividualRegDetailPrimaryKey", individualregdetail._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private SingXCustomerRepository<SingXCustomer> singxcustomerRepository;

    @Autowired
    private CfgDocIndividualRepository<CfgDocIndividual> cfgdocindividualRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private ResidenceTypeRepository<ResidenceType> residencetypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("IndividualRegDetailPrimaryKey"));
            IndividualRegDetail individualregdetail = individualregdetailRepository.findById((java.lang.String) map.get("IndividualRegDetailPrimaryKey"));
            individualregdetail.setExpiryDate(new java.sql.Date(123456789));
            individualregdetail.setIdProofValue("25tyffDY5qAEPeJ1PqgeefZ3CHxTCDzb7UukDltvFwKigBqqA3");
            individualregdetail.setNationalityId("5ns8qQbfX54LYKYHWhBWGMNjkAGrZzLMuVPxrYu2xwOah8mvSM");
            individualregdetail.setVersionId(1);
            individualregdetail.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            individualregdetailRepository.update(individualregdetail);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycustomerId() {
        try {
            java.util.List<IndividualRegDetail> listofcustomerId = individualregdetailRepository.findByCustomerId((java.lang.String) map.get("SingXCustomerPrimaryKey"));
            if (listofcustomerId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBydocumentId() {
        try {
            java.util.List<IndividualRegDetail> listofdocumentId = individualregdetailRepository.findByDocumentId((java.lang.String) map.get("CfgDocIndividualPrimaryKey"));
            if (listofdocumentId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("IndividualRegDetailPrimaryKey"));
            individualregdetailRepository.findById((java.lang.String) map.get("IndividualRegDetailPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findByresidenceTypeId() {
        try {
            java.util.List<IndividualRegDetail> listofresidenceTypeId = individualregdetailRepository.findByResidenceTypeId((java.lang.String) map.get("ResidenceTypePrimaryKey"));
            if (listofresidenceTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("IndividualRegDetailPrimaryKey"));
            individualregdetailRepository.delete((java.lang.String) map.get("IndividualRegDetailPrimaryKey")); /* Deleting refrenced data */
            cfgdocindividualRepository.delete((java.lang.String) map.get("CfgDocIndividualPrimaryKey")); /* Deleting refrenced data */
            residencetypeRepository.delete((java.lang.String) map.get("ResidenceTypePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            singxcustomerRepository.delete((java.lang.String) map.get("SingXCustomerPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
