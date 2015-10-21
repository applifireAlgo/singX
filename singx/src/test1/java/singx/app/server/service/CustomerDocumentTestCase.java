package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CustomerDocumentRepository;
import singx.app.shared.singx.CustomerDocument;
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
import singx.app.shared.singx.CfgDocIndividual;
import singx.app.server.repository.CfgDocIndividualRepository;
import singx.app.shared.singx.ResidenceType;
import singx.app.server.repository.ResidenceTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CustomerDocumentTestCase {

    @Autowired
    private CustomerDocumentRepository<CustomerDocument> customerdocumentRepository;

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
            country.setCapital("oGXtklJgEe26qq3cO0yQLX0MS0NONkIj");
            country.setCapitalLatitude(3);
            country.setCapitalLongitude(11);
            country.setCountryCode1("PtL");
            country.setCountryCode2("H1o");
            country.setCountryFlag("NBhw55oidYB1lgxG8euR2PCeo7hHTJcxjzDy8gXx11GhlZV06G");
            country.setCountryName("B7l9vGADLsd8CoopbGnhBpTQGp2OGzs18nsOlMdS3FnURYf5Sx");
            country.setCurrencyCode("0BC");
            country.setCurrencyName("5gzw6ijYUHL8W5S1Ub8gJxZjVptYrtBEUjQACgpT1ovrvqPXR9");
            country.setCurrencySymbol("9h1rW8yAwLHoxw61V92irkxUdcJrMX5s");
            country.setIsoNumeric(3);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Gender gender = new Gender();
            gender.setGender("zhweyvj47XFZFPHKm1va78oTye2ckriWrDzmGxQsIORBGYYoAV");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("uhxjkpKajkAlAHzP2fqzFAgdIaEN4yNu9AIblXIS7vhYYJm6SX");
            callingcode.setCallingCode("7knJfTpRtD5w81A33GfPPBFDS1lGuTr6byFtASt2kkCqFOj1Xo");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("MFA2wako1EmmtPMxPpJdz9M3ci5hQjUZw4dOnEcN06sBFMHu0B");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("VomK8HnjHML6tIAXvMIuf1Q8uclSGp1RdovaHLbdI06jicwL7i");
            singxcontacts.setFirstName("dyVMaqz58OpZCD0ebnfpa8qoUnwB92gHXUJtTr6y1R5Acb5ZH6");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("6IJBHCdkn6H2eXl1tcc5gbmJPRQ5j3fGQOnqfTZkD2NGoO010f");
            singxcontacts.setMiddleName("hfULdkreX4RFtwX0V0EOuOcj10wDbggQkw9xb3hAK1LkWJDnUE");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            CfgDocIndividual cfgdocindividual = new CfgDocIndividual();
            ResidenceType residencetype = new ResidenceType();
            residencetype.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            residencetype.setResidenceTypeName("gj3kGFRJ0EH1r2O0glbs3wSgqFMrTrxXG4v8khuYBWPNdrkOr4");
            ResidenceType ResidenceTypeTest = residencetypeRepository.save(residencetype);
            map.put("ResidenceTypePrimaryKey", residencetype._getPrimarykey());
            cfgdocindividual.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdocindividual.setDisplaySeq(2147483647);
            cfgdocindividual.setDocumentName("22i5jPj6fBApdfot9iHT3zyqcocMT5dsP7buuTiAKSoEIHsnLr");
            cfgdocindividual.setIsExpiryDateReqd(true);
            cfgdocindividual.setIsIssueDateReqd(true);
            cfgdocindividual.setIsMandatory(true);
            cfgdocindividual.setIsReferenceNoReqd(true);
            cfgdocindividual.setMaxSize(2147483647);
            cfgdocindividual.setRemarks("8iHiRDVzoEYg9ik4o3yEjxFPBzOtTaftyYVpW2kVKiJDz6I731");
            cfgdocindividual.setResidenceTypeId((java.lang.String) ResidenceTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            CfgDocIndividual CfgDocIndividualTest = cfgdocindividualRepository.save(cfgdocindividual);
            map.put("CfgDocIndividualPrimaryKey", cfgdocindividual._getPrimarykey());
            CustomerDocument customerdocument = new CustomerDocument();
            customerdocument.setContactId((java.lang.String) SingxContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            customerdocument.setDocFile("IUa");
            customerdocument.setDocumentId((java.lang.String) CfgDocIndividualTest._getPrimarykey());
            customerdocument.setExpiryDate(new java.sql.Date(123456789));
            customerdocument.setIssueDate(new java.sql.Date(123456789));
            customerdocument.setReferenceNo("e9bleHdV7ZdA7FNJw0GPujQQA97iSOv8dDN49fsHqpaOyB930V");
            customerdocument.setRemarks("yFGcubOudEJUPVWfNhoF6XI6IiMBYpuAK6mHlnGvT1c8PbHtTz");
            customerdocument.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            customerdocument.setEntityValidator(entityValidator);
            customerdocument.isValid();
            customerdocumentRepository.save(customerdocument);
            map.put("CustomerDocumentPrimaryKey", customerdocument._getPrimarykey());
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
    private CfgDocIndividualRepository<CfgDocIndividual> cfgdocindividualRepository;

    @Autowired
    private ResidenceTypeRepository<ResidenceType> residencetypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CustomerDocumentPrimaryKey"));
            CustomerDocument customerdocument = customerdocumentRepository.findById((java.lang.String) map.get("CustomerDocumentPrimaryKey"));
            customerdocument.setDocFile("Eou");
            customerdocument.setExpiryDate(new java.sql.Date(123456789));
            customerdocument.setIssueDate(new java.sql.Date(123456789));
            customerdocument.setReferenceNo("nQNQinDQHRl0EgoAELPD7YQeOQpiHdGwFgj0FfJBD31eWnFXLi");
            customerdocument.setRemarks("8uNfgF3lghtRJsDvbmMFxMEGkzYp9E1Nny8yK7dh9SfYbkUg0A");
            customerdocument.setVersionId(1);
            customerdocument.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            customerdocumentRepository.update(customerdocument);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<CustomerDocument> listofcontactId = customerdocumentRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
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
    public void test3findBydocumentId() {
        try {
            java.util.List<CustomerDocument> listofdocumentId = customerdocumentRepository.findByDocumentId((java.lang.String) map.get("CfgDocIndividualPrimaryKey"));
            if (listofdocumentId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CustomerDocumentPrimaryKey"));
            customerdocumentRepository.findById((java.lang.String) map.get("CustomerDocumentPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CustomerDocumentPrimaryKey"));
            customerdocumentRepository.delete((java.lang.String) map.get("CustomerDocumentPrimaryKey")); /* Deleting refrenced data */
            cfgdocindividualRepository.delete((java.lang.String) map.get("CfgDocIndividualPrimaryKey")); /* Deleting refrenced data */
            residencetypeRepository.delete((java.lang.String) map.get("ResidenceTypePrimaryKey")); /* Deleting refrenced data */
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
