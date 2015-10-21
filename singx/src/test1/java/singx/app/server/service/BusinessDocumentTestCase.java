package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.BusinessDocumentRepository;
import singx.app.shared.singx.BusinessDocument;
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
import singx.app.shared.singx.CfgDocCorporate;
import singx.app.server.repository.CfgDocCorporateRepository;
import singx.app.shared.singx.CompanyCategory;
import singx.app.server.repository.CompanyCategoryRepository;
import singx.app.shared.singx.CompanyType;
import singx.app.server.repository.CompanyTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class BusinessDocumentTestCase {

    @Autowired
    private BusinessDocumentRepository<BusinessDocument> businessdocumentRepository;

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
            country.setCapital("ETJ0gxu0hKMciO2GNMfzjI0XovwkAWnQ");
            country.setCapitalLatitude(1);
            country.setCapitalLongitude(4);
            country.setCountryCode1("0k0");
            country.setCountryCode2("M4F");
            country.setCountryFlag("4RWblTIuVaBgESR1ypjcDxenS1b1gSLEEQha6tAlWrGnIGaM2R");
            country.setCountryName("N0phNOYX0MsOLP0eqIpShybXrR033MxlZWjwjv1RpYB4s8JsqS");
            country.setCurrencyCode("JcQ");
            country.setCurrencyName("JmvWKpieBO41Ojc3eJ2msQVt7CtiHj7XYzsWcIJp3fE4Vq6jQ0");
            country.setCurrencySymbol("uri5Hx2XYo3kAcCwx4RV2CdHv5JOIBD5");
            country.setIsoNumeric(6);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Gender gender = new Gender();
            gender.setGender("sX9IHO2CO7f9wo9fT2SCqZBBvjGJ4hpXRone8xnDkwr0pzgG8d");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("IvHSs7eklJZZLIKWDvwfBisPkU3fmxmnwFDdK2omBFdZbZbPq2");
            callingcode.setCallingCode("zu7xnCQ5LGChGsSYA3iHM0HEWkWLlLB6oHBtj9JRjeH4qm5E9e");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("4KyHfJ60ok22mfzkNsJZ2bnO10db6Faul5KIcFEDLXPw0MYFIq");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("4w7sWpkdzOzJ7uHBxY10Z63mfSDam8h3iVO2KMJQhD05g173xZ");
            singxcontacts.setFirstName("cEe6Jf8zS5gqsusTfPvUrC9muL7QlyZzoiraJa3x38WWxXQC9K");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("Yxb3uX53T4ltcZWFdLcrVl9aGuVF1HqbT3oGDb2elv1GyC1OHh");
            singxcontacts.setMiddleName("j51RrtqPbZQW7cCUEoaUEAK6hNfZue6oIegGMSnKpt6sj7TK5l");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            CfgDocCorporate cfgdoccorporate = new CfgDocCorporate();
            CompanyCategory companycategory = new CompanyCategory();
            companycategory.setCompanyCategoryName("b1HtEZHeLnURyv9jVZswqpKhdhkmRCkqt2XXcrQvbFVs1oEJAr");
            companycategory.setCompanyCategoryName("pwOmrRxstE3kQQwOk7r5liuh9BEhzvhr8KrEB9Dsoaxrsi2EH0");
            companycategory.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CompanyCategory CompanyCategoryTest = companycategoryRepository.save(companycategory);
            map.put("CompanyCategoryPrimaryKey", companycategory._getPrimarykey());
            CompanyType companytype = new CompanyType();
            companytype.setCompanyTypeName("LlyI9HIiL7DlRRI2oq6YuJbgQZ1v1jEyndSblILrepC1yjrctY");
            CompanyType CompanyTypeTest = companytypeRepository.save(companytype);
            map.put("CompanyTypePrimaryKey", companytype._getPrimarykey());
            cfgdoccorporate.setCompanyCategory((java.lang.String) CompanyCategoryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccorporate.setCompanyType((java.lang.String) CompanyTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccorporate.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgdoccorporate.setDisplaySeq(2147483647);
            cfgdoccorporate.setDocumentname("m9ZhY8mZE248TBPKuoZ4p58OB6H2b2VBPePEaAWbtIaZvOucM8");
            cfgdoccorporate.setIsExpiryDateReqd(true);
            cfgdoccorporate.setIsIssueDateReqd(true);
            cfgdoccorporate.setIsMandatory(true);
            cfgdoccorporate.setIsReferenceNoReqd(true);
            cfgdoccorporate.setMaxSize(2147483647);
            cfgdoccorporate.setRemarks("ZWi05tr7o0tqpo50543ZTspEErHht9sB6a4oYrEtCWObzvzI6U");
            CfgDocCorporate CfgDocCorporateTest = cfgdoccorporateRepository.save(cfgdoccorporate);
            map.put("CfgDocCorporatePrimaryKey", cfgdoccorporate._getPrimarykey());
            BusinessDocument businessdocument = new BusinessDocument();
            businessdocument.setContactId((java.lang.String) SingxContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            businessdocument.setDocFile("Eoy");
            businessdocument.setDocumentId((java.lang.String) CfgDocCorporateTest._getPrimarykey());
            businessdocument.setExpiryDate(new java.sql.Date(123456789));
            businessdocument.setIssueDate(new java.sql.Date(123456789));
            businessdocument.setReferenceNo("rArOoOrQH487R8FdRVRQSPtheUENjoFGvTTDnpirX95syA9awh");
            businessdocument.setRemarks("VPwfg6FGdDMv3wDDhW1OSHVWYb51w7kF41T2qQ0Zu8zYBeffjt");
            businessdocument.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            businessdocument.setEntityValidator(entityValidator);
            businessdocument.isValid();
            businessdocumentRepository.save(businessdocument);
            map.put("BusinessDocumentPrimaryKey", businessdocument._getPrimarykey());
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
    private CfgDocCorporateRepository<CfgDocCorporate> cfgdoccorporateRepository;

    @Autowired
    private CompanyCategoryRepository<CompanyCategory> companycategoryRepository;

    @Autowired
    private CompanyTypeRepository<CompanyType> companytypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("BusinessDocumentPrimaryKey"));
            BusinessDocument businessdocument = businessdocumentRepository.findById((java.lang.String) map.get("BusinessDocumentPrimaryKey"));
            businessdocument.setDocFile("GVX");
            businessdocument.setExpiryDate(new java.sql.Date(123456789));
            businessdocument.setIssueDate(new java.sql.Date(123456789));
            businessdocument.setReferenceNo("GMsX6J6QML0RDjBIhUL5tYAccvqj3qpMh1AwopoAy923gfAL2b");
            businessdocument.setRemarks("WzX2P1x7ip8UahBuolOnEva7fUhOIgtj7jEa4ob99RJBVDcnuG");
            businessdocument.setVersionId(1);
            businessdocument.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            businessdocumentRepository.update(businessdocument);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<BusinessDocument> listofcontactId = businessdocumentRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
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
            java.util.List<BusinessDocument> listofdocumentId = businessdocumentRepository.findByDocumentId((java.lang.String) map.get("CfgDocCorporatePrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("BusinessDocumentPrimaryKey"));
            businessdocumentRepository.findById((java.lang.String) map.get("BusinessDocumentPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("BusinessDocumentPrimaryKey"));
            businessdocumentRepository.delete((java.lang.String) map.get("BusinessDocumentPrimaryKey")); /* Deleting refrenced data */
            cfgdoccorporateRepository.delete((java.lang.String) map.get("CfgDocCorporatePrimaryKey")); /* Deleting refrenced data */
            companytypeRepository.delete((java.lang.String) map.get("CompanyTypePrimaryKey")); /* Deleting refrenced data */
            companycategoryRepository.delete((java.lang.String) map.get("CompanyCategoryPrimaryKey")); /* Deleting refrenced data */
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
