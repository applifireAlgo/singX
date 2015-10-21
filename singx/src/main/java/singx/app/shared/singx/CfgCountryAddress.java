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
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
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

@Table(name = "ast_CfgCountryAddress_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "CfgCountryAddress.DefaultFinders", query = "select e from CfgCountryAddress e where e.systemInfo.activeStatus=1 and e.addressId LIKE :addressId and e.countryId LIKE :countryId"), @javax.persistence.NamedQuery(name = "CfgCountryAddress.findByInputTypeId", query = "select e from CfgCountryAddress e where e.systemInfo.activeStatus=1 and e.inputTypeId=:inputTypeId"), @javax.persistence.NamedQuery(name = "CfgCountryAddress.findByCountryId", query = "select e from CfgCountryAddress e where e.systemInfo.activeStatus=1 and e.countryId=:countryId"), @javax.persistence.NamedQuery(name = "CfgCountryAddress.findById", query = "select e from CfgCountryAddress e where e.systemInfo.activeStatus=1 and e.addressId =:addressId") })
public class CfgCountryAddress implements Serializable, CommonEntityInterface, Comparator<CfgCountryAddress> {

    @Column(name = "displayName")
    @JsonProperty("displayName")
    @NotNull
    @Size(min = 0, max = 50)
    private String displayName;

    @Column(name = "isMandatory")
    @JsonProperty("isMandatory")
    @NotNull
    private Boolean isMandatory;

    @Column(name = "maxLength")
    @JsonProperty("maxLength")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer maxLength;

    @Column(name = "displaySeq")
    @JsonProperty("displaySeq")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer displaySeq;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "addressId")
    @JsonProperty("addressId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String addressId;

    @Column(name = "inputTypeId")
    @JsonProperty("inputTypeId")
    private Integer inputTypeId;

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

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String _displayName) {
        if (_displayName != null) {
            this.displayName = _displayName;
        }
    }

    public Boolean getIsMandatory() {
        return isMandatory;
    }

    public void setIsMandatory(Boolean _isMandatory) {
        if (_isMandatory != null) {
            this.isMandatory = _isMandatory;
        }
    }

    public Integer getMaxLength() {
        return maxLength;
    }

    public void setMaxLength(Integer _maxLength) {
        if (_maxLength != null) {
            this.maxLength = _maxLength;
        }
    }

    public Integer getDisplaySeq() {
        return displaySeq;
    }

    public void setDisplaySeq(Integer _displaySeq) {
        if (_displaySeq != null) {
            this.displaySeq = _displaySeq;
        }
    }

    public String getPrimaryKey() {
        return addressId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return addressId;
    }

    public String getAddressId() {
        return addressId;
    }

    public void setAddressId(String _addressId) {
        this.addressId = _addressId;
    }

    public Integer getInputTypeId() {
        return inputTypeId;
    }

    public void setInputTypeId(Integer _inputTypeId) {
        this.inputTypeId = _inputTypeId;
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
    public int compare(CfgCountryAddress object1, CfgCountryAddress object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        sb.append((displayName == null ? " " : displayName));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (addressId == null) {
            return super.hashCode();
        } else {
            return addressId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.CfgCountryAddress other = (singx.app.shared.singx.CfgCountryAddress) obj;
            if (addressId == null) {
                return false;
            } else if (!addressId.equals(other.addressId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
