package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgMasterAddressRepository;
import singx.app.shared.singx.CfgMasterAddress;
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
import singx.app.shared.singx.InputDataType;
import singx.app.server.repository.InputDataTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgMasterAddressTestCase {

    @Autowired
    private CfgMasterAddressRepository<CfgMasterAddress> cfgmasteraddressRepository;

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
            InputDataType inputdatatype = new InputDataType();
            inputdatatype.setInputTypeName("KffLrrFzZMpRneSWzpZLJbihrEh03O6DqtAXl16TPTv6bA1SWu");
            InputDataType InputDataTypeTest = inputdatatypeRepository.save(inputdatatype);
            map.put("InputDataTypePrimaryKey", inputdatatype._getPrimarykey().toString());
            CfgMasterAddress cfgmasteraddress = new CfgMasterAddress();
            cfgmasteraddress.setDisplayName("UkYB3twE0J4s6pW0rpoI0TazYjNeeWi35g0VmX9GZh8VskL93h");
            cfgmasteraddress.setDisplaySeq(2147483647);
            cfgmasteraddress.setInputTypeId((java.lang.Integer) InputDataTypeTest._getPrimarykey());
            cfgmasteraddress.setIsMandatory(true);
            cfgmasteraddress.setMaxLength(2147483647);
            cfgmasteraddress.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgmasteraddress.setEntityValidator(entityValidator);
            cfgmasteraddress.isValid();
            cfgmasteraddressRepository.save(cfgmasteraddress);
            map.put("CfgMasterAddressPrimaryKey", cfgmasteraddress._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private InputDataTypeRepository<InputDataType> inputdatatypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgMasterAddressPrimaryKey"));
            CfgMasterAddress cfgmasteraddress = cfgmasteraddressRepository.findById((java.lang.String) map.get("CfgMasterAddressPrimaryKey"));
            cfgmasteraddress.setDisplayName("VAPg9actEII9AvgMP51BLSMvNgyNshd1skHgObhEoKxzj3Ksmz");
            cfgmasteraddress.setDisplaySeq(2147483647);
            cfgmasteraddress.setMaxLength(2147483647);
            cfgmasteraddress.setVersionId(1);
            cfgmasteraddress.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgmasteraddressRepository.update(cfgmasteraddress);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgMasterAddressPrimaryKey"));
            cfgmasteraddressRepository.findById((java.lang.String) map.get("CfgMasterAddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findByinputTypeId() {
        try {
            java.util.List<CfgMasterAddress> listofinputTypeId = cfgmasteraddressRepository.findByInputTypeId((java.lang.Integer) map.get("InputDataTypePrimaryKey"));
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
            org.junit.Assert.assertNotNull(map.get("CfgMasterAddressPrimaryKey"));
            cfgmasteraddressRepository.delete((java.lang.String) map.get("CfgMasterAddressPrimaryKey")); /* Deleting refrenced data */
            inputdatatypeRepository.delete((java.lang.Integer) map.get("InputDataTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
