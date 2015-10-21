package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgDocIndividualRepository;
import singx.app.shared.singx.CfgDocIndividual;
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
import singx.app.shared.singx.ResidenceType;
import singx.app.server.repository.ResidenceTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgDocIndividualTestCase {

    @Autowired
    private CfgDocIndividualRepository<CfgDocIndividual> cfgdocindividualRepository;

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
            country.setCapital("3cYDpIqnHAN5gwDNit7TUolZ6XSlCUIU");
            country.setCapitalLatitude(1);
            country.setCapitalLongitude(1);
            country.setCountryCode1("TSC");
            country.setCountryCode2("RFC");
            country.setCountryFlag("4Nz770TNjExolQRl2HqE0bf6EodgQRC6DaMHek2i8K0gmRRF96");
            country.setCountryName("8hhFRf5idvw0vwSAH14MahmjNW695Acl4HvwOz6uqg3g1RC8Ri");
            country.setCurrencyCode("PgC");
            country.setCurrencyName("0ufQt5WHIW6wtsXJ8etv5wrggXcnVEnNVBvmaR1mBbRsLxGpkA");
            country.setCurrencySymbol("ZiBlGMpgUOjiOcxXRoYAvgv0SUSJ0vKk");
            country.setIsoNumeric(4);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            ResidenceType residencetype = new ResidenceType();
            residencetype.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            residencetype.setResidenceTypeName("JNnCsNTw3xNc1CuxIYTGvT5jeznHI7uoEPn0iferkfrEa9llf5");
            ResidenceType ResidenceTypeTest = residencetypeRepository.save(residencetype);
            map.put("ResidenceTypePrimaryKey", residencetype._getPrimarykey());
            CfgDocIndividual cfgdocindividual = new CfgDocIndividual();
            cfgdocindividual.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdocindividual.setDisplaySeq(2147483647);
            cfgdocindividual.setDocumentName("Gev5wSZnJK6Jxe2AFs8yaj88VZpFOpC3JiWhIBOGDtNEtX2nQZ");
            cfgdocindividual.setIsExpiryDateReqd(true);
            cfgdocindividual.setIsIssueDateReqd(true);
            cfgdocindividual.setIsMandatory(true);
            cfgdocindividual.setIsReferenceNoReqd(true);
            cfgdocindividual.setMaxSize(2147483647);
            cfgdocindividual.setRemarks("Qdpex5Jh0Zal4h8GPXigv4M5rbvW39gfTFbRODptDdZqhCpFoN");
            cfgdocindividual.setResidenceTypeId((java.lang.String) ResidenceTypeTest._getPrimarykey());
            cfgdocindividual.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgdocindividual.setEntityValidator(entityValidator);
            cfgdocindividual.isValid();
            cfgdocindividualRepository.save(cfgdocindividual);
            map.put("CfgDocIndividualPrimaryKey", cfgdocindividual._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private ResidenceTypeRepository<ResidenceType> residencetypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocIndividualPrimaryKey"));
            CfgDocIndividual cfgdocindividual = cfgdocindividualRepository.findById((java.lang.String) map.get("CfgDocIndividualPrimaryKey"));
            cfgdocindividual.setDisplaySeq(2147483647);
            cfgdocindividual.setDocumentName("pX5Pal175n0WM53IPwmQlsrSDizG12Lm0vjOLjXxswtIVyhtkD");
            cfgdocindividual.setMaxSize(2147483647);
            cfgdocindividual.setRemarks("KUFFq7NwiSghwAPal4RwtVSAPXA0ZOib7OQKUenSuT1IVPiei8");
            cfgdocindividual.setVersionId(1);
            cfgdocindividual.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgdocindividualRepository.update(cfgdocindividual);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<CfgDocIndividual> listofcountryId = cfgdocindividualRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CfgDocIndividualPrimaryKey"));
            cfgdocindividualRepository.findById((java.lang.String) map.get("CfgDocIndividualPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findByresidenceTypeId() {
        try {
            java.util.List<CfgDocIndividual> listofresidenceTypeId = cfgdocindividualRepository.findByResidenceTypeId((java.lang.String) map.get("ResidenceTypePrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CfgDocIndividualPrimaryKey"));
            cfgdocindividualRepository.delete((java.lang.String) map.get("CfgDocIndividualPrimaryKey")); /* Deleting refrenced data */
            residencetypeRepository.delete((java.lang.String) map.get("ResidenceTypePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
