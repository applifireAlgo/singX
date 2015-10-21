package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgCountryAddressRepository;
import singx.app.shared.singx.CfgCountryAddress;
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
import singx.app.shared.singx.InputDataType;
import singx.app.server.repository.InputDataTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgCountryAddressTestCase {

    @Autowired
    private CfgCountryAddressRepository<CfgCountryAddress> cfgcountryaddressRepository;

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
            country.setCapital("vbEOImM6QGPtZG326TAW9Bb7EwE2NbFK");
            country.setCapitalLatitude(4);
            country.setCapitalLongitude(9);
            country.setCountryCode1("3gs");
            country.setCountryCode2("5wx");
            country.setCountryFlag("xnBOciU3olFQps2hwVA8L0X4mzTszSVPA6YLEhObVZ2pJGWAgD");
            country.setCountryName("u5GhjUMiRA8pxulAf9GGY7W1fAVy9QPyl8W3FjKowlUSQZgzmT");
            country.setCurrencyCode("AN9");
            country.setCurrencyName("xsZ861WJqgFXAHEGpKY9PC1aWTEXFS85o5ueOWCreqbwTGxgLl");
            country.setCurrencySymbol("DGv7YMGrWSnwuuub7qOEzLMHKNhRY3tb");
            country.setIsoNumeric(5);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            InputDataType inputdatatype = new InputDataType();
            inputdatatype.setInputTypeName("uu7O8dOuhSecsyxmMST2XFqGAoEiaROZox4xEaj9I3BvKzdvHH");
            InputDataType InputDataTypeTest = inputdatatypeRepository.save(inputdatatype);
            map.put("InputDataTypePrimaryKey", inputdatatype._getPrimarykey().toString());
            CfgCountryAddress cfgcountryaddress = new CfgCountryAddress();
            cfgcountryaddress.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            cfgcountryaddress.setDisplayName("wku4G5EKOJwCV6RsD8bklrQg9bkpL4BeJWJUdljZ9LbDlXf650");
            cfgcountryaddress.setDisplaySeq(2147483647);
            cfgcountryaddress.setInputTypeId((java.lang.Integer) InputDataTypeTest._getPrimarykey());
            cfgcountryaddress.setIsMandatory(true);
            cfgcountryaddress.setMaxLength(2147483647);
            cfgcountryaddress.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgcountryaddress.setEntityValidator(entityValidator);
            cfgcountryaddress.isValid();
            cfgcountryaddressRepository.save(cfgcountryaddress);
            map.put("CfgCountryAddressPrimaryKey", cfgcountryaddress._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private InputDataTypeRepository<InputDataType> inputdatatypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgCountryAddressPrimaryKey"));
            CfgCountryAddress cfgcountryaddress = cfgcountryaddressRepository.findById((java.lang.String) map.get("CfgCountryAddressPrimaryKey"));
            cfgcountryaddress.setDisplayName("CEQKtZcUCLp3ecJql2IuyCDVo1thMpGUEobrz9I0oSRi0afsx1");
            cfgcountryaddress.setDisplaySeq(2147483647);
            cfgcountryaddress.setMaxLength(2147483647);
            cfgcountryaddress.setVersionId(1);
            cfgcountryaddress.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgcountryaddressRepository.update(cfgcountryaddress);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgCountryAddressPrimaryKey"));
            cfgcountryaddressRepository.findById((java.lang.String) map.get("CfgCountryAddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<CfgCountryAddress> listofcountryId = cfgcountryaddressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
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
    public void test3findByinputTypeId() {
        try {
            java.util.List<CfgCountryAddress> listofinputTypeId = cfgcountryaddressRepository.findByInputTypeId((java.lang.Integer) map.get("InputDataTypePrimaryKey"));
            if (listofinputTypeId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CfgCountryAddressPrimaryKey"));
            cfgcountryaddressRepository.delete((java.lang.String) map.get("CfgCountryAddressPrimaryKey")); /* Deleting refrenced data */
            inputdatatypeRepository.delete((java.lang.Integer) map.get("InputDataTypePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
