package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CfgMasterDocumentsRepository;
import singx.app.shared.singx.CfgMasterDocuments;
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

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CfgMasterDocumentsTestCase {

    @Autowired
    private CfgMasterDocumentsRepository<CfgMasterDocuments> cfgmasterdocumentsRepository;

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
            CfgMasterDocuments cfgmasterdocuments = new CfgMasterDocuments();
            cfgmasterdocuments.setDocumentName("fP7FBFEDAaLIfJNFAPYYPFeu0wZVD6Al6gDc9SfF5QSyrJU97g");
            cfgmasterdocuments.setIsExpiryDateReqd(true);
            cfgmasterdocuments.setIsIssueDateReqd(true);
            cfgmasterdocuments.setIsReferenceNoReqd(true);
            cfgmasterdocuments.setRemarks("MRHBKQErIzXbDIrNGNVjFuIzqNb0Frh43S3Va8DnOT7EwPk01W");
            cfgmasterdocuments.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            cfgmasterdocuments.setEntityValidator(entityValidator);
            cfgmasterdocuments.isValid();
            cfgmasterdocumentsRepository.save(cfgmasterdocuments);
            map.put("CfgMasterDocumentsPrimaryKey", cfgmasterdocuments._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgMasterDocumentsPrimaryKey"));
            CfgMasterDocuments cfgmasterdocuments = cfgmasterdocumentsRepository.findById((java.lang.String) map.get("CfgMasterDocumentsPrimaryKey"));
            cfgmasterdocuments.setDocumentName("0Lvs7lAPFHiDJLWlkw4S1AH238PncdLw1HuhRIZn2wVrQ5Ee49");
            cfgmasterdocuments.setRemarks("Ld5O6nM6XgUFVgL8G2udYKgykgPRWjoutXi8qmbDr8MsiTB0S4");
            cfgmasterdocuments.setVersionId(1);
            cfgmasterdocuments.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            cfgmasterdocumentsRepository.update(cfgmasterdocuments);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgMasterDocumentsPrimaryKey"));
            cfgmasterdocumentsRepository.findById((java.lang.String) map.get("CfgMasterDocumentsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("CfgMasterDocumentsPrimaryKey"));
            cfgmasterdocumentsRepository.delete((java.lang.String) map.get("CfgMasterDocumentsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
