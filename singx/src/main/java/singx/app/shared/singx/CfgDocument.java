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

@Table(name = "ast_CfgDocument_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "CfgDocument.DefaultFinders", query = "select e from CfgDocument e where e.systemInfo.activeStatus=1 and e.documentId LIKE :documentId and e.documentName LIKE :documentName and e.countryId LIKE :countryId"), @javax.persistence.NamedQuery(name = "CfgDocument.findByCustomerType", query = "select e from CfgDocument e where e.systemInfo.activeStatus=1 and e.customerType=:customerType"), @javax.persistence.NamedQuery(name = "CfgDocument.findByCountryId", query = "select e from CfgDocument e where e.systemInfo.activeStatus=1 and e.countryId=:countryId"), @javax.persistence.NamedQuery(name = "CfgDocument.findById", query = "select e from CfgDocument e where e.systemInfo.activeStatus=1 and e.documentId =:documentId") })
public class CfgDocument implements Serializable, CommonEntityInterface, Comparator<CfgDocument> {

    @Column(name = "documentName")
    @JsonProperty("documentName")
    @NotNull
    @Size(min = 0, max = 50)
    private String documentName;

    @Column(name = "isReferenceNoReqd")
    @JsonProperty("isReferenceNoReqd")
    private Boolean isReferenceNoReqd;

    @Column(name = "isIssueDateReqd")
    @JsonProperty("isIssueDateReqd")
    private Boolean isIssueDateReqd;

    @Column(name = "isExpiryDateReqd")
    @JsonProperty("isExpiryDateReqd")
    private Boolean isExpiryDateReqd;

    @Column(name = "remarks")
    @JsonProperty("remarks")
    @Size(min = 0, max = 200)
    private String remarks;

    @Column(name = "isMandatory")
    @JsonProperty("isMandatory")
    private Boolean isMandatory;

    @Column(name = "displaySeq")
    @JsonProperty("displaySeq")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer displaySeq;

    @Column(name = "maxSize")
    @JsonProperty("maxSize")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer maxSize;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "documentId")
    @JsonProperty("documentId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String documentId;

    @Column(name = "customerType")
    @JsonProperty("customerType")
    private String customerType;

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

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String _documentName) {
        if (_documentName != null) {
            this.documentName = _documentName;
        }
    }

    public Boolean getIsReferenceNoReqd() {
        return isReferenceNoReqd;
    }

    public void setIsReferenceNoReqd(Boolean _isReferenceNoReqd) {
        this.isReferenceNoReqd = _isReferenceNoReqd;
    }

    public Boolean getIsIssueDateReqd() {
        return isIssueDateReqd;
    }

    public void setIsIssueDateReqd(Boolean _isIssueDateReqd) {
        this.isIssueDateReqd = _isIssueDateReqd;
    }

    public Boolean getIsExpiryDateReqd() {
        return isExpiryDateReqd;
    }

    public void setIsExpiryDateReqd(Boolean _isExpiryDateReqd) {
        this.isExpiryDateReqd = _isExpiryDateReqd;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String _remarks) {
        this.remarks = _remarks;
    }

    public Boolean getIsMandatory() {
        return isMandatory;
    }

    public void setIsMandatory(Boolean _isMandatory) {
        this.isMandatory = _isMandatory;
    }

    public Integer getDisplaySeq() {
        return displaySeq;
    }

    public void setDisplaySeq(Integer _displaySeq) {
        if (_displaySeq != null) {
            this.displaySeq = _displaySeq;
        }
    }

    public Integer getMaxSize() {
        return maxSize;
    }

    public void setMaxSize(Integer _maxSize) {
        if (_maxSize != null) {
            this.maxSize = _maxSize;
        }
    }

    public String getPrimaryKey() {
        return documentId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return documentId;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String _documentId) {
        this.documentId = _documentId;
    }

    public String getCustomerType() {
        return customerType;
    }

    public void setCustomerType(String _customerType) {
        this.customerType = _customerType;
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
    public int compare(CfgDocument object1, CfgDocument object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (documentId == null) {
            return super.hashCode();
        } else {
            return documentId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.CfgDocument other = (singx.app.shared.singx.CfgDocument) obj;
            if (documentId == null) {
                return false;
            } else if (!documentId.equals(other.documentId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
