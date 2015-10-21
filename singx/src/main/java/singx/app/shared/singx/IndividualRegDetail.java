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
import java.sql.Date;
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

@Table(name = "ast_IndividualRegDetail_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "IndividualRegDetail.DefaultFinders", query = "select e from IndividualRegDetail e where e.systemInfo.activeStatus=1 and e.customerId LIKE :customerId and e.residenceTypeId LIKE :residenceTypeId"), @javax.persistence.NamedQuery(name = "IndividualRegDetail.findByCustomerId", query = "select e from IndividualRegDetail e where e.systemInfo.activeStatus=1 and e.customerId=:customerId"), @javax.persistence.NamedQuery(name = "IndividualRegDetail.findByResidenceTypeId", query = "select e from IndividualRegDetail e where e.systemInfo.activeStatus=1 and e.residenceTypeId=:residenceTypeId"), @javax.persistence.NamedQuery(name = "IndividualRegDetail.findByDocumentId", query = "select e from IndividualRegDetail e where e.systemInfo.activeStatus=1 and e.documentId=:documentId"), @javax.persistence.NamedQuery(name = "IndividualRegDetail.findById", query = "select e from IndividualRegDetail e where e.systemInfo.activeStatus=1 and e.mapId =:mapId") })
public class IndividualRegDetail implements Serializable, CommonEntityInterface, Comparator<IndividualRegDetail> {

    @Column(name = "nationalityId")
    @JsonProperty("nationalityId")
    @NotNull
    @Size(min = 0, max = 256)
    private String nationalityId;

    @Column(name = "idProofValue")
    @JsonProperty("idProofValue")
    @NotNull
    @Size(min = 0, max = 50)
    private String idProofValue;

    @Column(name = "expiryDate")
    @JsonProperty("expiryDate")
    @NotNull
    private Date expiryDate;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "mapId")
    @JsonProperty("mapId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String mapId;

    @Column(name = "customerId")
    @JsonProperty("customerId")
    private String customerId;

    @Column(name = "residenceTypeId")
    @JsonProperty("residenceTypeId")
    private String residenceTypeId;

    @Column(name = "documentId")
    @JsonProperty("documentId")
    private String documentId;

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

    public String getNationalityId() {
        return nationalityId;
    }

    public void setNationalityId(String _nationalityId) {
        if (_nationalityId != null) {
            this.nationalityId = _nationalityId;
        }
    }

    public String getIdProofValue() {
        return idProofValue;
    }

    public void setIdProofValue(String _idProofValue) {
        if (_idProofValue != null) {
            this.idProofValue = _idProofValue;
        }
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date _expiryDate) {
        if (_expiryDate != null) {
            this.expiryDate = _expiryDate;
        }
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

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String _customerId) {
        this.customerId = _customerId;
    }

    public String getResidenceTypeId() {
        return residenceTypeId;
    }

    public void setResidenceTypeId(String _residenceTypeId) {
        this.residenceTypeId = _residenceTypeId;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String _documentId) {
        this.documentId = _documentId;
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
    public int compare(IndividualRegDetail object1, IndividualRegDetail object2) {
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
        if (mapId == null) {
            return super.hashCode();
        } else {
            return mapId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.IndividualRegDetail other = (singx.app.shared.singx.IndividualRegDetail) obj;
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
