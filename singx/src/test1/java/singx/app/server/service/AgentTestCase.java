package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.AgentRepository;
import singx.app.shared.singx.Agent;
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
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AgentTestCase {

    @Autowired
    private AgentRepository<Agent> agentRepository;

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
            corecontacts.setAge(116);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("8jhBlkUwEUnoHNB1idwOyFFzDZzpbQh9rGevmkEd6CZHxsUzZ1");
            corecontacts.setFirstName("q9PPwpk3p8VdvOUdtvR7LN1PcrfYWd1oHI15g0pVGZF7svC2tI");
            Gender gender = new Gender();
            gender.setGender("XfMqbAsoVKL83UgfSAs15YdwDJ0GUE4p54W38mJTPdsoKstvmp");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Pf");
            language.setAlpha3("VfZ");
            language.setAlpha4("uYiq");
            language.setAlpha4parentid(3);
            language.setLanguage("KEzRjEf6EBuOIrtn248qKSkLBiRxmY8QaInGiX0LADbMdagMkx");
            language.setLanguageDescription("jcnUXHprRmnTqHS4HpkD4yVfLEGd41hIaeTStvHUCFy0OfsCmX");
            language.setLanguageIcon("yUTSl9GTIbD9OXD24YkY0yAu5Zf2ZLnxhhVvU4T7NX0jruxQf3");
            language.setLanguageType("euOxim5DB0BCCPy7ADqw92W8NZ03Vtgu");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("QQkj5ZrfzpcLcuD1YT2XODl0fNQgdz7jbM8NlnsSMro5RzGjUc");
            timezone.setCountry("z0WKCcZ8blrb8Jp8LI220kblTQUsy7ptpLov2dlieKUY1FnAaO");
            timezone.setGmtLabel("nw1j82iPRpyNV8Lk48FFvbecDTKw5pEbToouqgql5ZmtSQpY88");
            timezone.setTimeZoneLabel("o3Yz7rWVMfcoPxGk5Nt86VhAGpftGQOlNGwNKvYZLy8HEWXAhe");
            timezone.setUtcdifference(8);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("ziltRjm0cYRkvwAqPg85kyx1NttuPnVmiUm3AJELZVIslaN7VU");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(56);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("pU54AEQfzoaMcqcIMYZUc2cbDZiNZ4y8GM7AusFHsyfSWVlG7v");
            corecontacts.setFirstName("SfoY9L96xE859q3dLW6QbK5N79QFerqg6G0pdAIwgVO4XMfoRo");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("0cplTsLOcslT8E8iLjcd7nWZtbVnq38EhKqxcYccPGw0KWe2bC");
            corecontacts.setMiddleName("s8NTAPAgIEw0J5M4s9TW5dltlFY8V10Z5EmouNZIojOkgzxfso");
            corecontacts.setNativeFirstName("Cs2lEvIJbqlxT6UlEv5F6qQubWP4zOcberjQuXhhbXecyUvwJs");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("KOPk8kG8kb6b412ydZHM7JajMrLLfqIwkE40x8FBkrJQdurEeL");
            corecontacts.setNativeMiddleName("uGcGRdrbZl4x5pEs5ZPZR9tam9fjvi1B1ukon8C8KJsHymLNwq");
            corecontacts.setNativeTitle("wVehUEfu4MpdPb86EG4tQLkLgzsji1g29nWQ5DQXiKJU71GJXQ");
            corecontacts.setPhoneNumber("KILEO8Ml3RfjF5iGHTY9");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            Country country = new Country();
            country.setCapital("e4NgXRxoSmKK4AggqlJ1Uc41GbeYg6bK");
            country.setCapitalLatitude(2);
            country.setCapitalLongitude(11);
            country.setCountryCode1("Z5J");
            country.setCountryCode2("Ch0");
            country.setCountryFlag("0SjwXql0mdjf1szxCqgWvqUFPcAKMYH4rDPT7qUmuDO9SvtR7k");
            country.setCountryName("9P2v34nZpHy0zc03oOYJAfAp0IURkePx6l3KeoYXbMaTTBKsQB");
            country.setCurrencyCode("nYh");
            country.setCurrencyName("cLgrSFCJEZ3JGoQCgaNvh6rrLjyIC9HbRosSACbrCRaRRAJGQ0");
            country.setCurrencySymbol("9YC8Glyp3DqTLCUxm8ZLAAbp8o1g3VoU");
            country.setIsoNumeric(4);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Agent agent = new Agent();
            agent.setAgencyName("DaV1eVzSa7AmrVsLxssdcAlcgyX0DLftwN6N6CjcfwwEeCPril");
            agent.setAgentCode("mBRWmqvW8t2C21m32fZJXD1GSdRABA4cYbfME1iEFeoXE9zD8f");
            agent.setAgentName("rKMlI5Lcxl0iVgtiQSFU5K4M19wJqZzcExlrBeh70cQlmCU21Y");
            agent.setCoreContacts(corecontacts);
            agent.setCountryId((java.lang.String) CountryTest._getPrimarykey());
            agent.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            agent.setEntityValidator(entityValidator);
            agent.isValid();
            agentRepository.save(agent);
            map.put("AgentPrimaryKey", agent._getPrimarykey());
            map.put("CoreContactsPrimaryKey", agent.getCoreContacts()._getPrimarykey());
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
    private CountryRepository<Country> countryRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AgentPrimaryKey"));
            Agent agent = agentRepository.findById((java.lang.String) map.get("AgentPrimaryKey"));
            agent.setAgencyName("TlSZnsH5fhK7aZWh5yvUuTlsTsodr7PkLSBeVoe5emQNXuDr3R");
            agent.setAgentCode("5qp0oedD7RkHG41oUJrtmDaY5dEdROgwjyUHzhO9Y77LzITieP");
            agent.setAgentName("8pHPxcSuU6fQyQfXX61eedlZrhQNhtdnhO5YB99Ext0b7lzjZO");
            agent.setVersionId(1);
            agent.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            agentRepository.update(agent);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AgentPrimaryKey"));
            agentRepository.findById((java.lang.String) map.get("AgentPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<Agent> listofcontactId = agentRepository.findByContactId((java.lang.String) map.get("CoreContactsPrimaryKey"));
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
    public void test3findBycountryId() {
        try {
            java.util.List<Agent> listofcountryId = agentRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("AgentPrimaryKey"));
            agentRepository.delete((java.lang.String) map.get("AgentPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
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
