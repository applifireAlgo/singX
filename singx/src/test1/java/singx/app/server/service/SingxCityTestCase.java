package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.SingxCityRepository;
import singx.app.shared.singx.SingxCity;
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
import singx.app.shared.location.State;
import singx.app.server.repository.StateRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class SingxCityTestCase {

    @Autowired
    private SingxCityRepository<SingxCity> singxcityRepository;

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
            State state = new State();
            Country country = new Country();
            country.setCapital("VRozkb2sh7Pd4jAHoJ0gs9aqnZuq3oAZ");
            country.setCapitalLatitude(6);
            country.setCapitalLongitude(10);
            country.setCountryCode1("vvn");
            country.setCountryCode2("CkX");
            country.setCountryFlag("95rD2RDywqHNlYo8Kw2AjTBZesvlRTAECLoXcEWqzyyYUJfCe4");
            country.setCountryName("AlnGkRPemlEUkXvMLWYxfngwedlSQWqAu1SetiVpLQNCk8neTA");
            country.setCurrencyCode("rhx");
            country.setCurrencyName("n7O5haGMcBqzgtsh6tPvt9N15sbil6lyUYpqdGNeQ8GMJtiWSW");
            country.setCurrencySymbol("P1P3conYHFoXZhIf1tlqxorxeeqk0TNt");
            country.setIsoNumeric(11);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("DplEprO2UtfWrjA0cILzrDI3Wlr1ByXWIiT0vR9ml3FwaouKxH");
            state.setStateCapitalLatitude(2);
            state.setStateCapitalLongitude(9);
            state.setStateCode(1);
            state.setStateCodeChar2("8t6LF3oWUHOvmFS7bNTgh4BsPISOq5md");
            state.setStateCodeChar3("DlRqyGcmtlgPf4AhfmAw93kmTJpyvpS8");
            state.setStateDescription("Me8cO8lQU9jyI5avyYBIu1pSaOOwcdsu9G2Qtx1fqzYz7xci12");
            state.setStateFlag("p4dQbRyzGCfhs5Pki4UhLZGQ61D5oiXFZZhpok67no2bcD75jP");
            state.setStateName("nvVdgdSObs9SKzdwhgvSfEg4lCwtBNRCIrkeyL0CzUaF2mv9qH");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            SingxCity singxcity = new SingxCity();
            singxcity.setCityName("moYOhDg3eS4yxmcIvWfNTFfB7sbI8IJBiFKUxuEvuainpcWppD");
            singxcity.setStateId((java.lang.String) StateTest._getPrimarykey());
            singxcity.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            singxcity.setEntityValidator(entityValidator);
            singxcity.isValid();
            singxcityRepository.save(singxcity);
            map.put("SingxCityPrimaryKey", singxcity._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("SingxCityPrimaryKey"));
            SingxCity singxcity = singxcityRepository.findById((java.lang.String) map.get("SingxCityPrimaryKey"));
            singxcity.setCityName("w5jDzKdiETQ5ZGWl2f2FQ0TRg8Q3Uoy3X8YfTp3h0gFwDgkAD9");
            singxcity.setVersionId(1);
            singxcity.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            singxcityRepository.update(singxcity);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("SingxCityPrimaryKey"));
            singxcityRepository.findById((java.lang.String) map.get("SingxCityPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<SingxCity> listofstateId = singxcityRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("SingxCityPrimaryKey"));
            singxcityRepository.delete((java.lang.String) map.get("SingxCityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
