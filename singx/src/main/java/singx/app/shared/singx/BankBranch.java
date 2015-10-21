package singx.app.shared.singx;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import javax.persistence.Embedded;
import singx.app.shared.EntityAudit;
import singx.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_BankBranch_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "BankBranch.DefaultFinders", query = "select e from BankBranch e where e.systemInfo.activeStatus=1 and e.branchId LIKE :branchId and e.branchCode LIKE :branchCode and e.bankId LIKE :bankId and e.countryId LIKE :countryId"), @javax.persistence.NamedQuery(name = "BankBranch.findByBankId", query = "select e from BankBranch e where e.systemInfo.activeStatus=1 and e.bankId=:bankId"), @javax.persistence.NamedQuery(name = "BankBranch.findByCountryId", query = "select e from BankBranch e where e.systemInfo.activeStatus=1 and e.countryId=:countryId"), @javax.persistence.NamedQuery(name = "BankBranch.findById", query = "select e from BankBranch e where e.systemInfo.activeStatus=1 and e.branchId =:branchId") })
public class BankBranch implements Serializable, CommonEntityInterface, Comparator<BankBranch> {

    @Column(name = "branchName")
    @JsonProperty("branchName")
    @NotNull
    @Size(min = 0, max = 50)
    private String branchName;

    @Column(name = "branchCode")
    @JsonProperty("branchCode")
    @NotNull
    @Size(min = 0, max = 50)
    private String branchCode;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "branchId")
    @JsonProperty("branchId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String branchId;

    @Column(name = "bankId")
    @JsonProperty("bankId")
    private String bankId;

    @Column(name = "countryId")
    @JsonProperty("countryId")
    private String countryId;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String _branchName) {
        if (_branchName != null) {
            this.branchName = _branchName;
        }
    }

    public String getBranchCode() {
        return branchCode;
    }

    public void setBranchCode(String _branchCode) {
        if (_branchCode != null) {
            this.branchCode = _branchCode;
        }
    }

    public String getPrimaryKey() {
        return branchId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return branchId;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String _branchId) {
        this.branchId = _branchId;
    }

    public String getBankId() {
        return bankId;
    }

    public void setBankId(String _bankId) {
        this.bankId = _bankId;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String _countryId) {
        this.countryId = _countryId;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    @JsonIgnore
    @Override
    public boolean isValid() throws SpartanConstraintViolationException, SpartanIncorrectDataException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
        } else {
            throw new SpartanIncorrectDataException("Entity validator is not set");
        }
        return isValid;
    }

    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        System.out.println("Setting logged in user info for " + recordType);
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    @Override
    public int compare(BankBranch object1, BankBranch object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        sb.append((branchName == null ? " " : branchName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (branchId == null) {
            return super.hashCode();
        } else {
            return branchId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.BankBranch other = (singx.app.shared.singx.BankBranch) obj;
            if (branchId == null) {
                return false;
            } else if (!branchId.equals(other.branchId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
