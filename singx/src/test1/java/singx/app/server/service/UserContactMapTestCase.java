package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.UserContactMapRepository;
import singx.app.shared.singx.UserContactMap;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class UserContactMapTestCase {

    @Autowired
    private UserContactMapRepository<UserContactMap> usercontactmapRepository;

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
            country.setCapital("4OP3pTcXDS8TCdrH3qydMEoQwM3eSdyc");
            country.setCapitalLatitude(0);
            country.setCapitalLongitude(7);
            country.setCountryCode1("9VN");
            country.setCountryCode2("ag3");
            country.setCountryFlag("GEpqtGat4nDj297kLewYZeAb8OkDz93q5sUbeAWfQWUPXWYB7W");
            country.setCountryName("uH2B7y2L37ku1mYyuCi9xVp5rzPYf59hMPWNmydxwyRhBqIBC9");
            country.setCurrencyCode("7jm");
            country.setCurrencyName("LthOKqBEzBn7Qpe0BaWXgRuwC6ayWHDPG3Iiz6xG6DTbvxtWd0");
            country.setCurrencySymbol("ftXvZWAauGZdlNRaC5Q0jiE4sSGtmF6f");
            country.setIsoNumeric(5);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Gender gender = new Gender();
            gender.setGender("MytiBneOapk0sgQGBewzW1L5rbMKCPW1Qx64ySq3qTK43qwfrE");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("FTPMhA8hQy7bgB9pDHkKw919QSr9pkSDch8ii6MwihTjxXL2zh");
            callingcode.setCallingCode("AksKeM6rznIkOTVLY9miyaT7ylZzGTtiyGEOq1oOrr9R3b9Bki");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("DPrxrZCWFDpQJKB3CzLhxFh1MjcinkKbUmyZG1blvq6j90ywlf");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("jMI5tgaO3sh3SQevovhPAqEWjVBkQsIUjgknqn0h02XpFeYnB4");
            singxcontacts.setFirstName("JfS5iFzjJfsFIYzF1672iCHnNiQNzeogcyowS93ghCu7l7Y058");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("CwXMhco0FwJs3wF2pSliJcWRTBTTEC1pijhJ1aRLOZ6fbHimAL");
            singxcontacts.setMiddleName("JPsT8UQiZgkfRZpiehmhYQACx04CoYlobksSixrYyWUW7tI6rG");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            UserContactMap usercontactmap = new UserContactMap();
            usercontactmap.setContactId((java.lang.String) SingxContactsTest._getPrimarykey());
            usercontactmap.setUserId("2VwQ5ujF3gsm3TDjnhYPBHnZzDMGTU6bRp6kh2h5NcFNILZj21");
            usercontactmap.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            usercontactmap.setEntityValidator(entityValidator);
            usercontactmap.isValid();
            usercontactmapRepository.save(usercontactmap);
            map.put("UserContactMapPrimaryKey", usercontactmap._getPrimarykey());
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

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("UserContactMapPrimaryKey"));
            UserContactMap usercontactmap = usercontactmapRepository.findById((java.lang.String) map.get("UserContactMapPrimaryKey"));
            usercontactmap.setUserId("ysgMDcR6HXr8VR3GQ3zrKfocPWF4IicifWWHlmdMaFccRNjr7r");
            usercontactmap.setVersionId(1);
            usercontactmap.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            usercontactmapRepository.update(usercontactmap);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<UserContactMap> listofcontactId = usercontactmapRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("UserContactMapPrimaryKey"));
            usercontactmapRepository.findById((java.lang.String) map.get("UserContactMapPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("UserContactMapPrimaryKey"));
            usercontactmapRepository.delete((java.lang.String) map.get("UserContactMapPrimaryKey")); /* Deleting refrenced data */
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
