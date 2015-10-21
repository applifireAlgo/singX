package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.BankTransferModeRepository;
import singx.app.shared.singx.BankTransferMode;
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
import singx.app.shared.singx.WireTransferMode;
import singx.app.server.repository.WireTransferModeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class BankTransferModeTestCase {

    @Autowired
    private BankTransferModeRepository<BankTransferMode> banktransfermodeRepository;

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
            bank.setBankCode("YKdUAv25d1");
            bank.setBankName("H2OulsRJSyJSGp59g8sDavk0vv8J1owO1fIBqd9Zxl5Xcpa42N");
            Country country = new Country();
            country.setCapital("ybaSXGQSPu8sCtGvMJlyWMaRLuBD9CsE");
            country.setCapitalLatitude(8);
            country.setCapitalLongitude(0);
            country.setCountryCode1("hQM");
            country.setCountryCode2("OwK");
            country.setCountryFlag("V822B8s098htGWBa6aWECDwNq9petWCU2iTO3RyrzfU8IoJStg");
            country.setCountryName("FtPl0rFZ5zvCVoZA8MlzPksP8qhzMWcoauN7Q6VwzZQwIXEApz");
            country.setCurrencyCode("qys");
            country.setCurrencyName("nErHMAynRoNLcw5EOcFdZe8DNtxTw3ckzkgMl3QznwJggdR1ij");
            country.setCurrencySymbol("Ma7UOQMUYF2AmqseTyuhASi55vuz4GJ6");
            country.setIsoNumeric(4);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            bank.setBankCode("75QdFj18Z0");
            bank.setBankName("tYlpDj4lHKAsiTovxNncJhrq1XkcBlKkqS39CMCu3cLksRDJdG");
            bank.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            Bank BankTest = bankRepository.save(bank);
            map.put("BankPrimaryKey", bank._getPrimarykey());
            WireTransferMode wiretransfermode = new WireTransferMode();
            wiretransfermode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            wiretransfermode.setWireTransferModeName("krpfFmapvaDD6xIZ4BrXMg9xe0gzylhu6j1SFOEQVswFSwUXum");
            WireTransferMode WireTransferModeTest = wiretransfermodeRepository.save(wiretransfermode);
            map.put("WireTransferModePrimaryKey", wiretransfermode._getPrimarykey());
            BankTransferMode banktransfermode = new BankTransferMode();
            banktransfermode.setBankId((java.lang.String) BankTest._getPrimarykey()); /* ******Adding refrenced table data */
            banktransfermode.setWireTransferModeId((java.lang.String) WireTransferModeTest._getPrimarykey());
            banktransfermode.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            banktransfermode.setEntityValidator(entityValidator);
            banktransfermode.isValid();
            banktransfermodeRepository.save(banktransfermode);
            map.put("BankTransferModePrimaryKey", banktransfermode._getPrimarykey());
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
    private WireTransferModeRepository<WireTransferMode> wiretransfermodeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("BankTransferModePrimaryKey"));
            BankTransferMode banktransfermode = banktransfermodeRepository.findById((java.lang.String) map.get("BankTransferModePrimaryKey"));
            banktransfermode.setVersionId(1);
            banktransfermode.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            banktransfermodeRepository.update(banktransfermode);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBybankId() {
        try {
            java.util.List<BankTransferMode> listofbankId = banktransfermodeRepository.findByBankId((java.lang.String) map.get("BankPrimaryKey"));
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
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("BankTransferModePrimaryKey"));
            banktransfermodeRepository.findById((java.lang.String) map.get("BankTransferModePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBywireTransferModeId() {
        try {
            java.util.List<BankTransferMode> listofwireTransferModeId = banktransfermodeRepository.findByWireTransferModeId((java.lang.String) map.get("WireTransferModePrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("BankTransferModePrimaryKey"));
            banktransfermodeRepository.delete((java.lang.String) map.get("BankTransferModePrimaryKey")); /* Deleting refrenced data */
            wiretransfermodeRepository.delete((java.lang.String) map.get("WireTransferModePrimaryKey")); /* Deleting refrenced data */
            bankRepository.delete((java.lang.String) map.get("BankPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
