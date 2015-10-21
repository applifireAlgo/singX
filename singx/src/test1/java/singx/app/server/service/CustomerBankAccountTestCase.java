package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CustomerBankAccountRepository;
import singx.app.shared.singx.CustomerBankAccount;
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
import singx.app.shared.singx.Bank;
import singx.app.server.repository.BankRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.singx.BankBranch;
import singx.app.server.repository.BankBranchRepository;
import singx.app.shared.singx.SingxContacts;
import singx.app.server.repository.SingxContactsRepository;
import singx.app.shared.contacts.Gender;
import singx.app.server.repository.GenderRepository;
import singx.app.shared.singx.CallingCode;
import singx.app.server.repository.CallingCodeRepository;
import singx.app.shared.singx.SingxPrefix;
import singx.app.server.repository.SingxPrefixRepository;
import singx.app.shared.singx.WireTransferMode;
import singx.app.server.repository.WireTransferModeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CustomerBankAccountTestCase {

    @Autowired
    private CustomerBankAccountRepository<CustomerBankAccount> customerbankaccountRepository;

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
            Bank bank = new Bank();
            bank.setBankCode("zHuQjCWCU6");
            bank.setBankName("EdX6PGq5s50QkPbLmBvfwogQBOx0nsRPjd3L5jjAAkwWFY4ly2");
            Country country = new Country();
            country.setCapital("GzOkOmSiSxDzU75sHb0Pm07x3s8FIUB7");
            country.setCapitalLatitude(11);
            country.setCapitalLongitude(4);
            country.setCountryCode1("Jvl");
            country.setCountryCode2("wPX");
            country.setCountryFlag("aUWo5N9StBiMIeAVlVlg7XTu1m4sZQIaMQQ62bGJ1nmib89CSb");
            country.setCountryName("fi057oDVo6YW8teXGsEvpOjH37w6rb5zf5Qmro8GFuZbw5tx33");
            country.setCurrencyCode("dyd");
            country.setCurrencyName("qZqqkegBmsjAftB8NGrKfTCRg6Qv9LHX5dSvjTL9X9XomEiIB5");
            country.setCurrencySymbol("fA7FOwc5zYucli3NzqS4ag2HcnrKhXcW");
            country.setIsoNumeric(11);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            bank.setBankCode("OFl0np7xPX");
            bank.setBankName("uw8wkbuVpqOE0ixsu1PdiPSqLgxrMmyXIJ0mjEU0ZSaC5IdNU5");
            bank.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            Bank BankTest = bankRepository.save(bank);
            map.put("BankPrimaryKey", bank._getPrimarykey());
            BankBranch bankbranch = new BankBranch();
            bankbranch.setBankId((java.lang.String) BankTest._getPrimarykey()); /* ******Adding refrenced table data */
            bankbranch.setBranchCode("ZlNNQGqYSQv7oGswXADVCYzjHFXzi6GbRsh7UjS9Eda2M5qxwD");
            bankbranch.setBranchName("u37eLdNWuSZ1qewmbYa6kVhLmQoakRFqw1JjOBk8Ohz3sWt7Wd");
            bankbranch.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            BankBranch BankBranchTest = bankbranchRepository.save(bankbranch);
            map.put("BankBranchPrimaryKey", bankbranch._getPrimarykey());
            SingxContacts singxcontacts = new SingxContacts();
            Gender gender = new Gender();
            gender.setGender("MSdr9VayHuqtfTLQe5Ph4SWpdUSowdNcihioaOP8Di5I9nnFyi");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("OfU839yulNPoB7CnBb8oYYyWmZCQtllDzk7yaJIPeZO53iDC9V");
            callingcode.setCallingCode("eOur6g8FP6olJZeDDeWi8VvBtW5XiyHemP8di2FocgMGZ8yMCi");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("2Ly3q1WdWk2TFZySXZWNt9kkiv80C3LLDTDvPC3EFX0UZfsUdW");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("1nqP4ygIm4UdThHqgGMdsuPdpMhYjpdBU54ZynsAYuMzcWqFzq");
            singxcontacts.setFirstName("ZAleunfVUaemSc2GIjCM9FQFGJYreiQhxLW1eBQqaUsoQoVxiX");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("hOGLeJIrNGYrzDlpP005xBhXjGBRpzaDhLRNZtvXG1LvSIBZDd");
            singxcontacts.setMiddleName("RPYKRevtAPvVMAbmSJn3MJiYaRH9cza5OLmyX3wEZ2ZaQuxMqY");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            WireTransferMode wiretransfermode = new WireTransferMode();
            wiretransfermode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            wiretransfermode.setWireTransferModeName("nXvB7VTtlX0hQ1XmTDkeF6Ib24MB7hv4PC9pf7wOfhkHDR3WZH");
            WireTransferMode WireTransferModeTest = wiretransfermodeRepository.save(wiretransfermode);
            map.put("WireTransferModePrimaryKey", wiretransfermode._getPrimarykey());
            CustomerBankAccount customerbankaccount = new CustomerBankAccount();
            customerbankaccount.setAccountNumber("hAd9NTF1kParGrylWPefsYbuAs4PB3NIwzvTPM84nrisH3KwpN");
            customerbankaccount.setBankId((java.lang.String) BankTest._getPrimarykey()); /* ******Adding refrenced table data */
            customerbankaccount.setBranchId((java.lang.String) BankBranchTest._getPrimarykey()); /* ******Adding refrenced table data */
            customerbankaccount.setContactId((java.lang.String) SingxContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            customerbankaccount.setFirstName("0TIWLI3nVknBfBlQhDZeLlU3exJAqzmeLzDxVCadbbaU3FxQMG");
            customerbankaccount.setJointAccHolderName("SpLEMwKkdawuOk3AOQaOVuCKNRDpGIqaxGtjMNIaAsZSqfqDTs");
            customerbankaccount.setLastName("p2jgpLfCLLpzgCHCrSHfHSOCkTQx8ZaoZcMOLFKvnDH7VoH9vj");
            customerbankaccount.setMiddleName("eKnld69fFYp7xePiyEw2aPsrwNSDITtDprMC5cWWapxwghrysP");
            customerbankaccount.setWireTransferModeId((java.lang.String) WireTransferModeTest._getPrimarykey());
            customerbankaccount.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            customerbankaccount.setEntityValidator(entityValidator);
            customerbankaccount.isValid();
            customerbankaccountRepository.save(customerbankaccount);
            map.put("CustomerBankAccountPrimaryKey", customerbankaccount._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private BankRepository<Bank> bankRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private BankBranchRepository<BankBranch> bankbranchRepository;

    @Autowired
    private SingxContactsRepository<SingxContacts> singxcontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private CallingCodeRepository<CallingCode> callingcodeRepository;

    @Autowired
    private SingxPrefixRepository<SingxPrefix> singxprefixRepository;

    @Autowired
    private WireTransferModeRepository<WireTransferMode> wiretransfermodeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CustomerBankAccountPrimaryKey"));
            CustomerBankAccount customerbankaccount = customerbankaccountRepository.findById((java.lang.String) map.get("CustomerBankAccountPrimaryKey"));
            customerbankaccount.setAccountNumber("44mUPOo1fYNLDHMkhjkKJPVywn5AoTTqWcczutVM3t01lRjoxA");
            customerbankaccount.setFirstName("UGSGrdiU2Ch3NlAr73eQRPIiIhYqBDfgJaJA6LsdKXpqUtmWa9");
            customerbankaccount.setJointAccHolderName("WpGiCuPczgMmRpfMtt593yfCoTxnFcR6hIUa6rY2X5BIXOxyGl");
            customerbankaccount.setLastName("x47xKFr6IZMiiUGGVlWrPTfldKakI5PFK1o5GzpJgCxhJUcs9o");
            customerbankaccount.setMiddleName("al2H9iw5Sj4T5YSbeBQCfcAXRtweZHdWsgZYgFTsJhT3MBtJxo");
            customerbankaccount.setVersionId(1);
            customerbankaccount.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            customerbankaccountRepository.update(customerbankaccount);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBybankId() {
        try {
            java.util.List<CustomerBankAccount> listofbankId = customerbankaccountRepository.findByBankId((java.lang.String) map.get("BankPrimaryKey"));
            if (listofbankId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBybranchId() {
        try {
            java.util.List<CustomerBankAccount> listofbranchId = customerbankaccountRepository.findByBranchId((java.lang.String) map.get("BankBranchPrimaryKey"));
            if (listofbranchId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<CustomerBankAccount> listofcontactId = customerbankaccountRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CustomerBankAccountPrimaryKey"));
            customerbankaccountRepository.findById((java.lang.String) map.get("CustomerBankAccountPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBywireTransferModeId() {
        try {
            java.util.List<CustomerBankAccount> listofwireTransferModeId = customerbankaccountRepository.findByWireTransferModeId((java.lang.String) map.get("WireTransferModePrimaryKey"));
            if (listofwireTransferModeId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CustomerBankAccountPrimaryKey"));
            customerbankaccountRepository.delete((java.lang.String) map.get("CustomerBankAccountPrimaryKey")); /* Deleting refrenced data */
            wiretransfermodeRepository.delete((java.lang.String) map.get("WireTransferModePrimaryKey")); /* Deleting refrenced data */
            singxcontactsRepository.delete((java.lang.String) map.get("SingxContactsPrimaryKey")); /* Deleting refrenced data */
            singxprefixRepository.delete((java.lang.String) map.get("SingxPrefixPrimaryKey")); /* Deleting refrenced data */
            callingcodeRepository.delete((java.lang.String) map.get("CallingCodePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            bankbranchRepository.delete((java.lang.String) map.get("BankBranchPrimaryKey")); /* Deleting refrenced data */
            bankRepository.delete((java.lang.String) map.get("BankPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
