package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CorporateRegDetailRepository;
import singx.app.shared.singx.CorporateRegDetail;
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
import singx.app.shared.singx.CompanyCategory;
import singx.app.server.repository.CompanyCategoryRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.singx.CompanyType;
import singx.app.server.repository.CompanyTypeRepository;
import singx.app.shared.singx.SingXCustomer;
import singx.app.server.repository.SingXCustomerRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CorporateRegDetailTestCase {

    @Autowired
    private CorporateRegDetailRepository<CorporateRegDetail> corporateregdetailRepository;

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
            CompanyCategory companycategory = new CompanyCategory();
            companycategory.setCompanyCategoryName("XgMwcoGTWuinCeRunoYM1HzvdFbb7Doy4sGdoMx6x6gjycgMje");
            Country country = new Country();
            country.setCapital("f6rlYGpLgRImeJxi05HUvB325OuNrGJJ");
            country.setCapitalLatitude(7);
            country.setCapitalLongitude(6);
            country.setCountryCode1("VLr");
            country.setCountryCode2("GXK");
            country.setCountryFlag("cBe42wXSIPGWFE9SXk3I2bwA5NWY3wxswv2ISYv0C0fCdaew1S");
            country.setCountryName("KMauOWDPjPIKpWKTc4FaE5N7bFJ5VIZZaeNR1ETko7X6pHofC5");
            country.setCurrencyCode("Fme");
            country.setCurrencyName("iJ4GNIVxhtB7U5bXtBJXyEaSZgB07H9DnnGiZDHEwNM2wPMgKz");
            country.setCurrencySymbol("OgW0JLXQ3Tjg9Wvhtths5H8Fdh1nfgeU");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            companycategory.setCompanyCategoryName("DcuXVd7VW0XbUvMd31wgeOvbdznfI0q2agiaA1I6CeRPDsFsBX");
            companycategory.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CompanyCategory CompanyCategoryTest = companycategoryRepository.save(companycategory);
            map.put("CompanyCategoryPrimaryKey", companycategory._getPrimarykey());
            CompanyType companytype = new CompanyType();
            companytype.setCompanyTypeName("ib1QBCcItH48eNWhBWDwcjYbw9Ccix65v0e9iBYnMLoYsCsFzk");
            CompanyType CompanyTypeTest = companytypeRepository.save(companytype);
            map.put("CompanyTypePrimaryKey", companytype._getPrimarykey());
            SingXCustomer singxcustomer = new SingXCustomer();
            singxcustomer.setCountryId("7TZe3ROMYCjZeanHrTuTiBeaK19EvZiAT5QSwMMGe4ln3GeKfE");
            singxcustomer.setCustomerTypeId("W6kS2c9ywbDjgQXG37E36sJl64i4QYVHiKqpP0Xx64sUIh85wQ");
            singxcustomer.setEmailId("HOwP62sUXAVrB1nef7rnAJbRYAWyV86pRT6R1SwVbkDWWuZswN");
            SingXCustomer SingXCustomerTest = singxcustomerRepository.save(singxcustomer);
            map.put("SingXCustomerPrimaryKey", singxcustomer._getPrimarykey());
            CorporateRegDetail corporateregdetail = new CorporateRegDetail();
            corporateregdetail.setCompanyCategoryId((java.lang.String) CompanyCategoryTest._getPrimarykey()); /* ******Adding refrenced table data */
            corporateregdetail.setCompanyName("ZOLCsCJsd8JYLbsFnGqU85ks5wTVVpmmRzghJcsxWaOk0cJzdN");
            corporateregdetail.setCompanyTypeId((java.lang.String) CompanyTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            corporateregdetail.setCustomerId((java.lang.String) SingXCustomerTest._getPrimarykey());
            corporateregdetail.setHeadOffice("8mfVOOjVJnOB0UhPeTGrZHs6Ol15hE3J4152DbbMfZtaezPYmA");
            corporateregdetail.setRegistrationNumber("QgrIs5hI2DvoCQ9fGDbxSf8dXgu8tsONOS0fyjoQrDWkkNmY9a");
            corporateregdetail.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corporateregdetail.setEntityValidator(entityValidator);
            corporateregdetail.isValid();
            corporateregdetailRepository.save(corporateregdetail);
            map.put("CorporateRegDetailPrimaryKey", corporateregdetail._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CompanyCategoryRepository<CompanyCategory> companycategoryRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private CompanyTypeRepository<CompanyType> companytypeRepository;

    @Autowired
    private SingXCustomerRepository<SingXCustomer> singxcustomerRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CorporateRegDetailPrimaryKey"));
            CorporateRegDetail corporateregdetail = corporateregdetailRepository.findById((java.lang.String) map.get("CorporateRegDetailPrimaryKey"));
            corporateregdetail.setCompanyName("s8IE4QHyFOmHsuoxRkjIcDh6J3Bswo3t1GKaUna7DNfM2eVgkR");
            corporateregdetail.setHeadOffice("JH98DAtz0tbFe5D1Q1aFUdYvOsYn9yLkU2Uv5ld0SHCu9hbpeL");
            corporateregdetail.setRegistrationNumber("vJxn5SDwPP5A71NRRp0aoS8d2J6IuLbsyxgwImBmdqCyibw3Fz");
            corporateregdetail.setVersionId(1);
            corporateregdetail.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corporateregdetailRepository.update(corporateregdetail);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycompanyCategoryId() {
        try {
            java.util.List<CorporateRegDetail> listofcompanyCategoryId = corporateregdetailRepository.findByCompanyCategoryId((java.lang.String) map.get("CompanyCategoryPrimaryKey"));
            if (listofcompanyCategoryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycompanyTypeId() {
        try {
            java.util.List<CorporateRegDetail> listofcompanyTypeId = corporateregdetailRepository.findByCompanyTypeId((java.lang.String) map.get("CompanyTypePrimaryKey"));
            if (listofcompanyTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycustomerId() {
        try {
            java.util.List<CorporateRegDetail> listofcustomerId = corporateregdetailRepository.findByCustomerId((java.lang.String) map.get("SingXCustomerPrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CorporateRegDetailPrimaryKey"));
            corporateregdetailRepository.findById((java.lang.String) map.get("CorporateRegDetailPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CorporateRegDetailPrimaryKey"));
            corporateregdetailRepository.delete((java.lang.String) map.get("CorporateRegDetailPrimaryKey")); /* Deleting refrenced data */
            singxcustomerRepository.delete((java.lang.String) map.get("SingXCustomerPrimaryKey")); /* Deleting refrenced data */
            companytypeRepository.delete((java.lang.String) map.get("CompanyTypePrimaryKey")); /* Deleting refrenced data */
            companycategoryRepository.delete((java.lang.String) map.get("CompanyCategoryPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
