package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.BankBranchRepository;
import singx.app.shared.singx.BankBranch;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class BankBranchTestCase {

    @Autowired
    private BankBranchRepository<BankBranch> bankbranchRepository;

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
            bank.setBankCode("7wN3KSC4Ha");
            bank.setBankName("by7brozX6sXetbyh4eQhoZ9N1A708kaHaJm448FmiIG5SErA2e");
            Country country = new Country();
            country.setCapital("mQjZLVIc9uQrGXlQMA4UvtxsZ49BLhub");
            country.setCapitalLatitude(10);
            country.setCapitalLongitude(8);
            country.setCountryCode1("aOo");
            country.setCountryCode2("b06");
            country.setCountryFlag("nTUDCroRKD5DbXgTsb14vnnMbPcOaOPBszIbs8WF3aStMVYhpq");
            country.setCountryName("bbBDFHJwdjpRI2WCA5giYxOwNxmAb9E7ItFqGttIiXeuF5hIug");
            country.setCurrencyCode("C75");
            country.setCurrencyName("dGmeMRvdFcLajn3awkaZehAwGpLfxhP9jPyUuSmNPcHH0mqbu4");
            country.setCurrencySymbol("1ifCQAvzh4MzpebLlloIb3RLmuNC1vp4");
            country.setIsoNumeric(5);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            bank.setBankCode("Qn3cn5kYro");
            bank.setBankName("alylYV7p72xi3TtOf0aORO5si2w7vngKFdKf1qApXT3Zp3I3rp");
            bank.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            Bank BankTest = bankRepository.save(bank);
            map.put("BankPrimaryKey", bank._getPrimarykey());
            BankBranch bankbranch = new BankBranch();
            bankbranch.setBankId((java.lang.String) BankTest._getPrimarykey()); /* ******Adding refrenced table data */
            bankbranch.setBranchCode("xkhLebCp9SYmScpcl5Wivp8K9KDb345sAN7IaTdYnJw6UMhVwM");
            bankbranch.setBranchName("bBIQv7aVhnU9osNfcR8l9PwaXprMTCPGR1wWaLfw00z8C0dsqX");
            bankbranch.setCountryId((java.lang.String) CountryTest._getPrimarykey());
            bankbranch.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            bankbranch.setEntityValidator(entityValidator);
            bankbranch.isValid();
            bankbranchRepository.save(bankbranch);
            map.put("BankBranchPrimaryKey", bankbranch._getPrimarykey());
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

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("BankBranchPrimaryKey"));
            BankBranch bankbranch = bankbranchRepository.findById((java.lang.String) map.get("BankBranchPrimaryKey"));
            bankbranch.setBranchCode("xNY9RGZ7m8pQ5NJNzNGLmGsIqlJaGm0sAvJF8nNHR9NKVjI3PM");
            bankbranch.setBranchName("XOe2FOHx1jkJ6KNck1qyVZ8FzvDgTrkbSDmB8wF5DngiPVwIWE");
            bankbranch.setVersionId(1);
            bankbranch.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            bankbranchRepository.update(bankbranch);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBybankId() {
        try {
            java.util.List<BankBranch> listofbankId = bankbranchRepository.findByBankId((java.lang.String) map.get("BankPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("BankBranchPrimaryKey"));
            bankbranchRepository.findById((java.lang.String) map.get("BankBranchPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<BankBranch> listofcountryId = bankbranchRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("BankBranchPrimaryKey"));
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
