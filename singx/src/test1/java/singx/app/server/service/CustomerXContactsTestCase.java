package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CustomerXContactsRepository;
import singx.app.shared.singx.CustomerXContacts;
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
import singx.app.shared.singx.SingxContacts;
import singx.app.server.repository.SingxContactsRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.contacts.Gender;
import singx.app.server.repository.GenderRepository;
import singx.app.shared.singx.CallingCode;
import singx.app.server.repository.CallingCodeRepository;
import singx.app.shared.singx.SingxPrefix;
import singx.app.server.repository.SingxPrefixRepository;
import singx.app.shared.singx.SingXCustomer;
import singx.app.server.repository.SingXCustomerRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CustomerXContactsTestCase {

    @Autowired
    private CustomerXContactsRepository<CustomerXContacts> customerxcontactsRepository;

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
            SingxContacts singxcontacts = new SingxContacts();
            Country country = new Country();
            country.setCapital("kQFeRTZaa2haeE3eKsqO5oiL18VWqzRF");
            country.setCapitalLatitude(9);
            country.setCapitalLongitude(9);
            country.setCountryCode1("Dc3");
            country.setCountryCode2("B7n");
            country.setCountryFlag("aHep5UWuO9koiNP3u5xkkP9VlvsJ5qi53LwQAPhkTSR2josUru");
            country.setCountryName("6Yw64GzFz8HA3iunpy5wtHxqShAkY2uVp4VKDkW1udJVqM07cG");
            country.setCurrencyCode("iCk");
            country.setCurrencyName("rUi32h38r0Xf2x4nobdfx4iCo7YTjVqVZBsfKZyKV8YzFyqYmh");
            country.setCurrencySymbol("0WSKNuwuOWX0nOh0ofcKhmAFb9iCrIVF");
            country.setIsoNumeric(7);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Gender gender = new Gender();
            gender.setGender("IO35YAOXcysNmmw7WHzDtFeoWIrx5FC5JqJfpFy1GWQOXuTQkM");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("hVvvjrAHi7aZPOdOOIAzUD7w8XNo4dEEqNyaC5PZBuEgiBYtCz");
            callingcode.setCallingCode("59Tjw5ZJRBFQ8aPCkhRFp0ZiDTEVuUEbAgYHPsQKgEIeq895Tu");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("KPPch3NGjjImKZRfnBDZS641hAOKUTWWiqz8YK2ZfIxAyLFSVR");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("JfdzKB0AYi9hu5M6YFVIaPzZyeQUPak5w40R4LG2JlHR3RtcXE");
            singxcontacts.setFirstName("qMUrCVzhgTgRHSdpUThsfj5z2S7WyY4XYkcqQWAg199IiNHyrV");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("wni9TQwUnZTazxoo4Uj9J9uowsZI2OThX8UeiixNPTUilFIEOf");
            singxcontacts.setMiddleName("MT4tSWyE1FdWpzSFc0A8VsgAd5jBBh1Xjz9HNsqTUJNgButl23");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            SingXCustomer singxcustomer = new SingXCustomer();
            singxcustomer.setCountryId("V6p9w2w9HpPSHNMpYzphTbu5REvo7sHQJLoC76pW9OBpjrmVdQ");
            singxcustomer.setCustomerTypeId("SFJyMENF8yRBjNB4tJTLigx3VwetLliSETkKNuJM43Z3CNKvXC");
            singxcustomer.setEmailId("aRpmaRRCylPzrZrRCXoC6nLOJsMVnsDlm7bNuFTNqKgIvD4rye");
            SingXCustomer SingXCustomerTest = singxcustomerRepository.save(singxcustomer);
            map.put("SingXCustomerPrimaryKey", singxcustomer._getPrimarykey());
            CustomerXContacts customerxcontacts = new CustomerXContacts();
            customerxcontacts.setContactId((java.lang.String) SingxContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            customerxcontacts.setCustomerId((java.lang.String) SingXCustomerTest._getPrimarykey());
            customerxcontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            customerxcontacts.setEntityValidator(entityValidator);
            customerxcontacts.isValid();
            customerxcontactsRepository.save(customerxcontacts);
            map.put("CustomerXContactsPrimaryKey", customerxcontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private SingxContactsRepository<SingxContacts> singxcontactsRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private CallingCodeRepository<CallingCode> callingcodeRepository;

    @Autowired
    private SingxPrefixRepository<SingxPrefix> singxprefixRepository;

    @Autowired
    private SingXCustomerRepository<SingXCustomer> singxcustomerRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CustomerXContactsPrimaryKey"));
            CustomerXContacts customerxcontacts = customerxcontactsRepository.findById((java.lang.String) map.get("CustomerXContactsPrimaryKey"));
            customerxcontacts.setVersionId(1);
            customerxcontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            customerxcontactsRepository.update(customerxcontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<CustomerXContacts> listofcontactId = customerxcontactsRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
            if (listofcontactId.size() == 0) {
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
            java.util.List<CustomerXContacts> listofcustomerId = customerxcontactsRepository.findByCustomerId((java.lang.String) map.get("SingXCustomerPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CustomerXContactsPrimaryKey"));
            customerxcontactsRepository.findById((java.lang.String) map.get("CustomerXContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CustomerXContactsPrimaryKey"));
            customerxcontactsRepository.delete((java.lang.String) map.get("CustomerXContactsPrimaryKey")); /* Deleting refrenced data */
            singxcustomerRepository.delete((java.lang.String) map.get("SingXCustomerPrimaryKey")); /* Deleting refrenced data */
            singxcontactsRepository.delete((java.lang.String) map.get("SingxContactsPrimaryKey")); /* Deleting refrenced data */
            singxprefixRepository.delete((java.lang.String) map.get("SingxPrefixPrimaryKey")); /* Deleting refrenced data */
            callingcodeRepository.delete((java.lang.String) map.get("CallingCodePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
