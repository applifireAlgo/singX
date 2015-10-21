package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgDocCorporateRepository;
import singx.app.shared.singx.CfgDocCorporate;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgDocCorporateTestCase {

    @Autowired
    private CfgDocCorporateRepository<CfgDocCorporate> cfgdoccorporateRepository;

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
            companycategory.setCompanyCategoryName("XYFgAMPCW5B6xPNauy7X9jDJObxNxOOj6c4e5g9ZsDOM02QwZY");
            Country country = new Country();
            country.setCapital("JjNJWqfgc3KuhhuZok0GbbAyrxdijlTG");
            country.setCapitalLatitude(5);
            country.setCapitalLongitude(10);
            country.setCountryCode1("1Dr");
            country.setCountryCode2("dY8");
            country.setCountryFlag("mMaRV4lthbhwNfeSyl9DVrBfWO18cVb3D3bvlew6Svz2HImmEe");
            country.setCountryName("tb4xgHZ2dZmW1mG6463x2qhew50py9Vsz5Cv6xYvDKKldXnsDn");
            country.setCurrencyCode("lzy");
            country.setCurrencyName("vglBieTIzN5NBO9NOhia7CUNWASFOs2VkLNVb6mS0oOWIn3wCQ");
            country.setCurrencySymbol("rlMjgnBphuQoYbg1lcdTq3mC47MKX3TF");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            companycategory.setCompanyCategoryName("iSdZjCnaJKZrzWITpKIMMTscdL47eAswptsVr7iCl4rUkYbbkj");
            companycategory.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CompanyCategory CompanyCategoryTest = companycategoryRepository.save(companycategory);
            map.put("CompanyCategoryPrimaryKey", companycategory._getPrimarykey());
            CompanyType companytype = new CompanyType();
            companytype.setCompanyTypeName("FDid3E1K9fQqFiPbVs3V1LMFsmHGnYmGp0GPU5bnjuyIUHNhgD");
            CompanyType CompanyTypeTest = companytypeRepository.save(companytype);
            map.put("CompanyTypePrimaryKey", companytype._getPrimarykey());
            CfgDocCorporate cfgdoccorporate = new CfgDocCorporate();
            cfgdoccorporate.setCompanyCategory((java.lang.String) CompanyCategoryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccorporate.setCompanyType((java.lang.String) CompanyTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccorporate.setCountryId((java.lang.String) CountryTest._getPrimarykey());
            cfgdoccorporate.setDisplaySeq(2147483647);
            cfgdoccorporate.setDocumentname("L6rYJZ5BL1QkPmjgn1Ro64K9lov8E0BnqVK1buMxaOSkulWwPK");
            cfgdoccorporate.setIsExpiryDateReqd(true);
            cfgdoccorporate.setIsIssueDateReqd(true);
            cfgdoccorporate.setIsMandatory(true);
            cfgdoccorporate.setIsReferenceNoReqd(true);
            cfgdoccorporate.setMaxSize(2147483647);
            cfgdoccorporate.setRemarks("hh87j0Eh6cERz4UrpdmRtFIvHai839vbrZD8py7Xj9i8Zfyxw6");
            cfgdoccorporate.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgdoccorporate.setEntityValidator(entityValidator);
            cfgdoccorporate.isValid();
            cfgdoccorporateRepository.save(cfgdoccorporate);
            map.put("CfgDocCorporatePrimaryKey", cfgdoccorporate._getPrimarykey());
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

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCorporatePrimaryKey"));
            CfgDocCorporate cfgdoccorporate = cfgdoccorporateRepository.findById((java.lang.String) map.get("CfgDocCorporatePrimaryKey"));
            cfgdoccorporate.setDisplaySeq(2147483647);
            cfgdoccorporate.setDocumentname("ERrw1ph0Nv1WcpPO94Na9WwBYiBLFB5kj0hKB1y6fLj7mBHcOf");
            cfgdoccorporate.setMaxSize(2147483647);
            cfgdoccorporate.setRemarks("6rPBjnnNUsIUBetJyvtaXZHgAwe6OON4M6LtnZvfvKEyv61t9S");
            cfgdoccorporate.setVersionId(1);
            cfgdoccorporate.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgdoccorporateRepository.update(cfgdoccorporate);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycompanyCategory() {
        try {
            java.util.List<CfgDocCorporate> listofcompanyCategory = cfgdoccorporateRepository.findByCompanyCategory((java.lang.String) map.get("CompanyCategoryPrimaryKey"));
            if (listofcompanyCategory.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycompanyType() {
        try {
            java.util.List<CfgDocCorporate> listofcompanyType = cfgdoccorporateRepository.findByCompanyType((java.lang.String) map.get("CompanyTypePrimaryKey"));
            if (listofcompanyType.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<CfgDocCorporate> listofcountryId = cfgdoccorporateRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCorporatePrimaryKey"));
            cfgdoccorporateRepository.findById((java.lang.String) map.get("CfgDocCorporatePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCorporatePrimaryKey"));
            cfgdoccorporateRepository.delete((java.lang.String) map.get("CfgDocCorporatePrimaryKey")); /* Deleting refrenced data */
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
