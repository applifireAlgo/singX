package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgDocCntIndividualRepository;
import singx.app.shared.singx.CfgDocCntIndividual;
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
public class CfgDocCntIndividualTestCase {

    @Autowired
    private CfgDocCntIndividualRepository<CfgDocCntIndividual> cfgdoccntindividualRepository;

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
            country.setCapital("oSjsmsEuFWfYREZEWQsVZkx3jdqH7i4L");
            country.setCapitalLatitude(5);
            country.setCapitalLongitude(3);
            country.setCountryCode1("UQF");
            country.setCountryCode2("9P1");
            country.setCountryFlag("dA7GEeflEbA3FreJuUkII8xWCXmsvCqgxEsmokJuXrb8CZ9jWt");
            country.setCountryName("kf5tW13Z8uWsMQ2uU7FrcU8IubhTV0Qgzs8VQIV9TxLuxu6LHn");
            country.setCurrencyCode("ODO");
            country.setCurrencyName("uyah37n8N6hNCY6rdd5viHmR9Qi3Xw8azlQkhXaBahuInLUDF2");
            country.setCurrencySymbol("K4HlaFIO9MhEt1Fyyh9qBFaazx8AmpSk");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            ResidenceType residencetype = new ResidenceType();
            residencetype.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            residencetype.setResidenceTypeName("lNqTHmk66B3jKOpmHjr7ShuDLMA8nWS7kwhFGJkq82OvcL1Ngw");
            ResidenceType ResidenceTypeTest = residencetypeRepository.save(residencetype);
            map.put("ResidenceTypePrimaryKey", residencetype._getPrimarykey());
            CfgDocCntIndividual cfgdoccntindividual = new CfgDocCntIndividual();
            cfgdoccntindividual.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccntindividual.setMandatoryDocCount(2147483647);
            cfgdoccntindividual.setOtherDocCount(2147483647);
            cfgdoccntindividual.setResidenceTypeId((java.lang.String) ResidenceTypeTest._getPrimarykey());
            cfgdoccntindividual.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgdoccntindividual.setEntityValidator(entityValidator);
            cfgdoccntindividual.isValid();
            cfgdoccntindividualRepository.save(cfgdoccntindividual);
            map.put("CfgDocCntIndividualPrimaryKey", cfgdoccntindividual._getPrimarykey());
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
            org.junit.Assert.assertNotNull(map.get("CfgDocCntIndividualPrimaryKey"));
            CfgDocCntIndividual cfgdoccntindividual = cfgdoccntindividualRepository.findById((java.lang.String) map.get("CfgDocCntIndividualPrimaryKey"));
            cfgdoccntindividual.setMandatoryDocCount(2147483647);
            cfgdoccntindividual.setOtherDocCount(2147483647);
            cfgdoccntindividual.setVersionId(1);
            cfgdoccntindividual.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgdoccntindividualRepository.update(cfgdoccntindividual);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgDocCntIndividualPrimaryKey"));
            cfgdoccntindividualRepository.findById((java.lang.String) map.get("CfgDocCntIndividualPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<CfgDocCntIndividual> listofcountryId = cfgdoccntindividualRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test3findByresidenceTypeId() {
        try {
            java.util.List<CfgDocCntIndividual> listofresidenceTypeId = cfgdoccntindividualRepository.findByResidenceTypeId((java.lang.String) map.get("ResidenceTypePrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CfgDocCntIndividualPrimaryKey"));
            cfgdoccntindividualRepository.delete((java.lang.String) map.get("CfgDocCntIndividualPrimaryKey")); /* Deleting refrenced data */
            residencetypeRepository.delete((java.lang.String) map.get("ResidenceTypePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
