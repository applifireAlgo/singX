package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.LoginRepository;
import singx.app.shared.authentication.Login;
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
import singx.app.shared.contacts.CoreContacts;
import singx.app.server.repository.CoreContactsRepository;
import singx.app.shared.contacts.Gender;
import singx.app.server.repository.GenderRepository;
import singx.app.shared.location.Language;
import singx.app.server.repository.LanguageRepository;
import singx.app.shared.location.Timezone;
import singx.app.server.repository.TimezoneRepository;
import singx.app.shared.contacts.Title;
import singx.app.server.repository.TitleRepository;
import singx.app.shared.authentication.User;
import singx.app.server.repository.UserRepository;
import singx.app.shared.authentication.UserAccessDomain;
import singx.app.server.repository.UserAccessDomainRepository;
import singx.app.shared.authentication.UserAccessLevel;
import singx.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase {

    @Autowired
    private LoginRepository<Login> loginRepository;

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
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(108);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("kNEikHqUEA092f5jG38U5LNMrtoH32Azslz338eIn39DAvLztN");
            corecontacts.setFirstName("CyuXjJ7pvQv7gSbb9EjASRdzcniTX7rtfPQF9LoYnspixR5cKa");
            Gender gender = new Gender();
            gender.setGender("9zJZG6GCkHUJpENx2BI2UHDYD93iAdOy6T5mGlfRzpI5zwWlby");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("es");
            language.setAlpha3("hdX");
            language.setAlpha4("1vIG");
            language.setAlpha4parentid(2);
            language.setLanguage("MU3GbKFWpGzSGzh0VsIO9pmhFMjsnaiSNPHGt5lbt8mm6AsWTc");
            language.setLanguageDescription("bzliGXrw6eaHYLui7wE3nLP27rw6JIGvqpqWt4bZX0Q23wXH26");
            language.setLanguageIcon("8zdwYHdMu1DLzJLb8gntVGV6LPzN7GaRjMMbL1uVuSyS722lti");
            language.setLanguageType("ozGlCklNJhWv9H7DVAN3I4UXZk9KxT9n");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("YHvGKkYNJUt5C8lk8Mf3o3Ml8H2ytcdNocHe7wdvCvIdEaH6YF");
            timezone.setCountry("uMhIo2TMtmSS1ynYgqLH7k3Q6Bf8WW7mfUjMxM0Dv5jyqRMOCs");
            timezone.setGmtLabel("VBaMhPPWbjiyIw2HjFC6sFXc274QW6jSpX8yw3ddPXKRjp2rby");
            timezone.setTimeZoneLabel("7POfZSMcECgaHoHqWf7P7sEFckLdC3vVh5pv5Gn6iCN0IqRMaG");
            timezone.setUtcdifference(3);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("OXstiM4kgUyfrxbm6xEY8rhQdbw1jHdrqzK9EdG2XIopHtxxQv");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(103);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("e1T88N3z7WihMlZLqnpMJzj5eYV4ApAR5ROLGKrx9ltExi8miD");
            corecontacts.setFirstName("RzIS2dCKKBVjbSvSebJrSS1qeZ7bJd01wD23uIxkjWLpA5UQHW");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("6r9fSmVF0cZpPuocl9tUHHjMYyioZD5IdicyUPeIDLFVqjFgqg");
            corecontacts.setMiddleName("TJqxgJPFxMRHmwHNbBYxb6wYHp7cX8GAozYY7vMkmSSbWvJKJe");
            corecontacts.setNativeFirstName("SwSm2sDMO9ZxcuxeQ0vVf0fjbl7s6VK0bWgBPt5cqy4I8ybsKT");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("U2gkyk29fzH0USzB4zlBHGiOd3M7fbYePL0twSkzzSkDPFNhWC");
            corecontacts.setNativeMiddleName("ITUxegGM7GZKSmkLECJwNyn3qEBuS3lGnUEvcKMCPQZSMs4XRU");
            corecontacts.setNativeTitle("ZGdRPw5GJpcc5weLfOEQixerjnigLIqoUVurPbezpFV5WVWQdV");
            corecontacts.setPhoneNumber("KPhApekwJxZy4A1kt1Uf");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(1);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(0);
            user.setIsLocked(1);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("qtOG4HJTnWmMSw7jg8bj1A1R3HJW6bXJRr6kGlbCWHywiy1XBD");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(756);
            user.setUserAccessCode(3);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("lRYp8FBXgx3dwVSxoVupiJDVE1kXCd6Ad2rtqs337b3InDYauC");
            useraccessdomain.setDomainHelp("0Weobfj0SKfR7kHlDrJMZJt3eitsbFcJm2v82WbjDLjd8xeeK5");
            useraccessdomain.setDomainIcon("V5aaMgI4gBVCuhfTvuNe1iZwUkNfRqxKLKYXPNGyht0EnOp9vj");
            useraccessdomain.setDomainName("Eew9zDB0gyJ1zmL3SrqYUMisdgVbstn4Cp7lqIU6R3NERnSdQm");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("GOefGb7DV8N3GlAdoswdEN3ommCkytoL1bNzzJutaL3cQfwjxQ");
            useraccesslevel.setLevelHelp("HLrT0JKc5fhnrYIFSkmtrYFYmchfKidP9m2LpnzfaS1emKLCLo");
            useraccesslevel.setLevelIcon("dSs4Uw6nJzJ923Z5IeBbsdmFUncKDsQlMdBav1kWmsWOwNESRh");
            useraccesslevel.setLevelName("iTjv1su9HWBGeCvF6e3Ji1AMJvUjcPJjl08vnGJjThwWNAUGlI");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(0);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(1);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("RDjhxesVPiOZdxkRYfsYwObI4AJsuxDCurt5iT1uzth4hvVBV3");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(460);
            user.setUserAccessCode(8);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(10);
            login.setIsAuthenticated(true);
            login.setLoginId("uuHuy4wTQejbkG6mLs9re0DYwbfNEIujKtomrjdf8fP3Fbjjw8");
            login.setServerAuthImage("HaofVKxmvwfjEuM1XEtD2kwypaA8Mwox");
            login.setServerAuthText("uBdOck2JtvYAxOYb");
            login.setUser(user);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.setEntityValidator(entityValidator);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserPrimaryKey", login.getUser()._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(3);
            login.setLoginId("D4vqWYXQeeSr8h2H4HTmSUzkPaitZjA9Em3he456lLeAOMRjJe");
            login.setServerAuthImage("zhhnUoBasTMr6YDkWNTzfzr3W49sGN4g");
            login.setServerAuthText("Ym3UvBxAhuNakQkq");
            login.setVersionId(1);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<Login> listofcontactId = loginRepository.findByContactId((java.lang.String) map.get("CoreContactsPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findByuserId() {
        try {
            java.util.List<Login> listofuserId = loginRepository.findByUserId((java.lang.String) map.get("UserPrimaryKey"));
            if (listofuserId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
