package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgDocCntCorporateRepository;
import singx.app.shared.singx.CfgDocCntCorporate;
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
public class CfgDocCntCorporateTestCase {

    @Autowired
    private CfgDocCntCorporateRepository<CfgDocCntCorporate> cfgdoccntcorporateRepository;

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
            companycategory.setCompanyCategoryName("gInzBGJpq66anI7iDZ2tdHVxMt3LxlylHcSMQKpUfwYGvv68tC");
            Country country = new Country();
            country.setCapital("lp8F49uirKgCbhLcIqd3y3l3bbIIMbr0");
            country.setCapitalLatitude(8);
            country.setCapitalLongitude(8);
            country.setCountryCode1("IME");
            country.setCountryCode2("lyo");
            country.setCountryFlag("l2wmDuccME77HazCCkgEDzV39L0pV8JHYG7I56V4oTCDp1k7lC");
            country.setCountryName("ET1FFUDEdWM8vEvnKqa2Axyb8d4ZJOzkyqyMeFUGSOh3r0TsV0");
            country.setCurrencyCode("2wF");
            country.setCurrencyName("rhO794IXt3B0kS8ZFrHKnIw4srAFFMAJf3R2bbe4xuvxZKhtLt");
            country.setCurrencySymbol("kTBfpXKCuc60I8GhOpXUibFamfo42vn9");
            country.setIsoNumeric(4);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            companycategory.setCompanyCategoryName("rLI1JwpfAFaSuRubDR2gRAksDxqdb2QiXKO0jkjFXcMAga5nXd");
            companycategory.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CompanyCategory CompanyCategoryTest = companycategoryRepository.save(companycategory);
            map.put("CompanyCategoryPrimaryKey", companycategory._getPrimarykey());
            CompanyType companytype = new CompanyType();
            companytype.setCompanyTypeName("4xxVPHXyyOfusLLapQML6iZNvGFymERZ0w6WZTe8Fnud6zeIF8");
            CompanyType CompanyTypeTest = companytypeRepository.save(companytype);
            map.put("CompanyTypePrimaryKey", companytype._getPrimarykey());
            CfgDocCntCorporate cfgdoccntcorporate = new CfgDocCntCorporate();
            cfgdoccntcorporate.setCompanyCategoryId((java.lang.String) CompanyCategoryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccntcorporate.setCompanyTypeId((java.lang.String) CompanyTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccntcorporate.setCountryId((java.lang.String) CountryTest._getPrimarykey());
            cfgdoccntcorporate.setMandatoryDocCount(2147483647);
            cfgdoccntcorporate.setOtherDocCount(2147483647);
            cfgdoccntcorporate.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgdoccntcorporate.setEntityValidator(entityValidator);
            cfgdoccntcorporate.isValid();
            cfgdoccntcorporateRepository.save(cfgdoccntcorporate);
            map.put("CfgDocCntCorporatePrimaryKey", cfgdoccntcorporate._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("CfgDocCntCorporatePrimaryKey"));
            CfgDocCntCorporate cfgdoccntcorporate = cfgdoccntcorporateRepository.findById((java.lang.String) map.get("CfgDocCntCorporatePrimaryKey"));
            cfgdoccntcorporate.setMandatoryDocCount(2147483647);
            cfgdoccntcorporate.setOtherDocCount(2147483647);
            cfgdoccntcorporate.setVersionId(1);
            cfgdoccntcorporate.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgdoccntcorporateRepository.update(cfgdoccntcorporate);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCntCorporatePrimaryKey"));
            cfgdoccntcorporateRepository.findById((java.lang.String) map.get("CfgDocCntCorporatePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycompanyCategoryId() {
        try {
            java.util.List<CfgDocCntCorporate> listofcompanyCategoryId = cfgdoccntcorporateRepository.findByCompanyCategoryId((java.lang.String) map.get("CompanyCategoryPrimaryKey"));
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
            java.util.List<CfgDocCntCorporate> listofcompanyTypeId = cfgdoccntcorporateRepository.findByCompanyTypeId((java.lang.String) map.get("CompanyTypePrimaryKey"));
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
    public void test3findBycountryId() {
        try {
            java.util.List<CfgDocCntCorporate> listofcountryId = cfgdoccntcorporateRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCntCorporatePrimaryKey"));
            cfgdoccntcorporateRepository.delete((java.lang.String) map.get("CfgDocCntCorporatePrimaryKey")); /* Deleting refrenced data */
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
