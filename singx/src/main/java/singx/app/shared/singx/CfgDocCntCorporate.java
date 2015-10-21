package singx.app.shared.singx;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
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

@Table(name = "ast_CfgDocCntCorporate_M")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "CfgDocCntCorporate.DefaultFinders", query = "select e from CfgDocCntCorporate e where e.systemInfo.activeStatus=1 and e.countryId LIKE :countryId"), @javax.persistence.NamedQuery(name = "CfgDocCntCorporate.findByCountryId", query = "select e from CfgDocCntCorporate e where e.systemInfo.activeStatus=1 and e.countryId=:countryId"), @javax.persistence.NamedQuery(name = "CfgDocCntCorporate.findByCompanyTypeId", query = "select e from CfgDocCntCorporate e where e.systemInfo.activeStatus=1 and e.companyTypeId=:companyTypeId"), @javax.persistence.NamedQuery(name = "CfgDocCntCorporate.findByCompanyCategoryId", query = "select e from CfgDocCntCorporate e where e.systemInfo.activeStatus=1 and e.companyCategoryId=:companyCategoryId"), @javax.persistence.NamedQuery(name = "CfgDocCntCorporate.findById", query = "select e from CfgDocCntCorporate e where e.systemInfo.activeStatus=1 and e.cfgDocId =:cfgDocId") })
public class CfgDocCntCorporate implements Serializable, CommonEntityInterface, Comparator<CfgDocCntCorporate> {

    @Column(name = "mandatoryDocCount")
    @JsonProperty("mandatoryDocCount")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer mandatoryDocCount;

    @Column(name = "otherDocCount")
    @JsonProperty("otherDocCount")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer otherDocCount;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "cfgDocId")
    @JsonProperty("cfgDocId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String cfgDocId;

    @Column(name = "countryId")
    @JsonProperty("countryId")
    private String countryId;

    @Column(name = "companyTypeId")
    @JsonProperty("companyTypeId")
    private String companyTypeId;

    @Column(name = "companyCategoryId")
    @JsonProperty("companyCategoryId")
    private String companyCategoryId;

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

    public Integer getMandatoryDocCount() {
        return mandatoryDocCount;
    }

    public void setMandatoryDocCount(Integer _mandatoryDocCount) {
        if (_mandatoryDocCount != null) {
            this.mandatoryDocCount = _mandatoryDocCount;
        }
    }

    public Integer getOtherDocCount() {
        return otherDocCount;
    }

    public void setOtherDocCount(Integer _otherDocCount) {
        if (_otherDocCount != null) {
            this.otherDocCount = _otherDocCount;
        }
    }

    public String getPrimaryKey() {
        return cfgDocId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return cfgDocId;
    }

    public String getCfgDocId() {
        return cfgDocId;
    }

    public void setCfgDocId(String _cfgDocId) {
        this.cfgDocId = _cfgDocId;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String _countryId) {
        this.countryId = _countryId;
    }

    public String getCompanyTypeId() {
        return companyTypeId;
    }

    public void setCompanyTypeId(String _companyTypeId) {
        this.companyTypeId = _companyTypeId;
    }

    public String getCompanyCategoryId() {
        return companyCategoryId;
    }

    public void setCompanyCategoryId(String _companyCategoryId) {
        this.companyCategoryId = _companyCategoryId;
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
    public int compare(CfgDocCntCorporate object1, CfgDocCntCorporate object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        sb.append((countryId.toString() == null ? " " : countryId.toString()) + ",");
        sb.append((companyTypeId.toString() == null ? " " : companyTypeId.toString()) + ",");
        sb.append((companyCategoryId.toString() == null ? " " : companyCategoryId.toString()));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (cfgDocId == null) {
            return super.hashCode();
        } else {
            return cfgDocId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            singx.app.shared.singx.CfgDocCntCorporate other = (singx.app.shared.singx.CfgDocCntCorporate) obj;
            if (cfgDocId == null) {
                return false;
            } else if (!cfgDocId.equals(other.cfgDocId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
