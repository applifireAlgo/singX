package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.BankRepository;
import singx.app.shared.singx.Bank;
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
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.singx.WireTransferMode;
import singx.app.server.repository.WireTransferModeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class BankTestCase {

    @Autowired
    private BankRepository<Bank> bankRepository;

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
            Country country = new Country();
            country.setCapital("xhpK1i0VDU4iEdd1p5gjVVAJNnBBpvqh");
            country.setCapitalLatitude(10);
            country.setCapitalLongitude(6);
            country.setCountryCode1("tXN");
            country.setCountryCode2("pc2");
            country.setCountryFlag("ukONDJdOySHAk6f2dU9PAi2ob8uaeBUnLB6S0D5P9XPD5OqyzB");
            country.setCountryName("kySPaWPZXhnv5FhKwlPGtMj9DbYQjPwfcG4kACkbUsjTYEzeiU");
            country.setCurrencyCode("KNQ");
            country.setCurrencyName("xTjX6VQFjz5Sullbfceo564fYg35LsJaRpMKckZCtEOSiN2Y6R");
            country.setCurrencySymbol("cx86cNP3DziFMUR8OJym9dGbXLqiG6TL");
            country.setIsoNumeric(1);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            Bank bank = new Bank();
            bank.setBankCode("RgxjvyNEb1");
            bank.setBankName("aDVMJ5mqQaE54vX0TVuZndIt0mYzuSDpKxzdnc6OgEIcBQn7cO");
            bank.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<WireTransferMode> listOfWireTransferMode = new java.util.ArrayList<WireTransferMode>();
            WireTransferMode wiretransfermode = new WireTransferMode();
            wiretransfermode.setCountryId((java.lang.String) CountryTest._getPrimarykey());
            wiretransfermode.setWireTransferModeName("yfQcoxkzXtKJWAs3uNAP11bm5kvcL3qKfYi0GfocmEcitcAeG0");
            listOfWireTransferMode.add(wiretransfermode);
            bank.addAllWireTransferMode(listOfWireTransferMode);
            bank.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            bank.setEntityValidator(entityValidator);
            bank.isValid();
            bankRepository.save(bank);
            map.put("BankPrimaryKey", bank._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private WireTransferModeRepository<WireTransferMode> wiretransfermodeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("BankPrimaryKey"));
            Bank bank = bankRepository.findById((java.lang.String) map.get("BankPrimaryKey"));
            bank.setBankCode("RZJJKZDfof");
            bank.setBankName("qaZuED2HvuPuV9NpG2Jq9v8Dkg32QyR25Lct4U81H7rCCcU4pE");
            bank.setVersionId(1);
            bank.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            bankRepository.update(bank);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("BankPrimaryKey"));
            bankRepository.findById((java.lang.String) map.get("BankPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Bank> listofcountryId = bankRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("BankPrimaryKey"));
            bankRepository.delete((java.lang.String) map.get("BankPrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
