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

@Table(name = "ast_CustomerBankAccount_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "CustomerBankAccount.DefaultFinders", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.contactId LIKE :contactId and e.accountNumber LIKE :accountNumber"), @javax.persistence.NamedQuery(name = "CustomerBankAccount.findByContactId", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.contactId=:contactId"), @javax.persistence.NamedQuery(name = "CustomerBankAccount.findByWireTransferModeId", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.wireTransferModeId=:wireTransferModeId"), @javax.persistence.NamedQuery(name = "CustomerBankAccount.findByBankId", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.bankId=:bankId"), @javax.persistence.NamedQuery(name = "CustomerBankAccount.findByBranchId", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.branchId=:branchId"), @javax.persistence.NamedQuery(name = "CustomerBankAccount.findById", query = "select e from CustomerBankAccount e where e.systemInfo.activeStatus=1 and e.mapId =:mapId") })
public class CustomerBankAccount implements Serializable, CommonEntityInterface, Comparator<CustomerBankAccount> {

    @Column(name = "firstName")
    @JsonProperty("firstName")
    @NotNull
    @Size(min = 0, max = 256)
    private String firstName;

    @Column(name = "middleName")
    @JsonProperty("middleName")
    @Size(min = 0, max = 50)
    private String middleName;

    @Column(name = "lastName")
    @JsonProperty("lastName")
    @NotNull
    @Size(min = 0, max = 256)
    private String lastName;

    @Column(name = "accountNumber")
    @JsonProperty("accountNumber")
    @NotNull
    @Size(min = 0, max = 256)
    private String accountNumber;

    @Column(name = "jointAccHolderName")
    @JsonProperty("jointAccHolderName")
    @Size(min = 0, max = 50)
    private String jointAccHolderName;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "mapId")
    @JsonProperty("mapId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String mapId;

    @Column(name = "contactId")
    @JsonProperty("contactId")
    private String contactId;

    @Column(name = "wireTransferModeId")
    @JsonProperty("wireTransferModeId")
    private String wireTransferModeId;

    @Column(name = "bankId")
    @JsonProperty("bankId")
    private String bankId;

    @Column(name = "branchId")
    @JsonProperty("branchId")
    private String branchId;

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String _firstName) {
        if (_firstName != null) {
            this.firstName = _firstName;
        }
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String _middleName) {
        this.middleName = _middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String _lastName) {
        if (_lastName != null) {
            this.lastName = _lastName;
        }
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String _accountNumber) {
        if (_accountNumber != null) {
            this.accountNumber = _accountNumber;
        }
    }

    public String getJointAccHolderName() {
        return jointAccHolderName;
    }

    public void setJointAccHolderName(String _jointAccHolderName) {
        this.jointAccHolderName = _jointAccHolderName;
    }

    public String getPrimaryKey() {
        return mapId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return mapId;
    }

    public String getMapId() {
        return mapId;
    }

    public void setMapId(String _mapId) {
        this.mapId = _mapId;
    }

    public String getContactId() {
        return contactId;
    }

    public void setContactId(String _contactId) {
        this.contactId = _contactId;
    }

    public String getWireTransferModeId() {
        return wireTransferModeId;
    }

    public void setWireTransferModeId(String _wireTransferModeId) {
        this.wireTransferModeId = _wireTransferModeId;
    }

    public String getBankId() {
        return bankId;
    }

    public void setBankId(String _bankId) {
        this.bankId = _bankId;
    }

    public String getBranchId() {
        return branchId;
    }

    public void setBranchId(String _branchId) {
        this.branchId = _branchId;
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
    public int compare(CustomerBankAccount object1, CustomerBankAccount object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        sb.append((firstName == null ? " " : firstName) + ",");
        sb.append((lastName == null ? " " : lastName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (mapId == null) {
            return super.hashCode();
        } else {
            return mapId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.CustomerBankAccount other = (singx.app.shared.singx.CustomerBankAccount) obj;
            if (mapId == null) {
                return false;
            } else if (!mapId.equals(other.mapId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
