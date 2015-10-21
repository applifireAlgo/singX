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

@Table(name = "ast_SingxAddress_T")
@Entity
@NamedQueries({ @javax.persistence.NamedQuery(name = "SingxAddress.DefaultFinders", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.addressId LIKE :addressId and e.contactId LIKE :contactId"), @javax.persistence.NamedQuery(name = "SingxAddress.findByContactId", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.contactId=:contactId"), @javax.persistence.NamedQuery(name = "SingxAddress.findByCity", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.city=:city"), @javax.persistence.NamedQuery(name = "SingxAddress.findByDistrict", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.district=:district"), @javax.persistence.NamedQuery(name = "SingxAddress.findByState", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.state=:state"), @javax.persistence.NamedQuery(name = "SingxAddress.findByCountry", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.country=:country"), @javax.persistence.NamedQuery(name = "SingxAddress.findById", query = "select e from SingxAddress e where e.systemInfo.activeStatus=1 and e.addressId =:addressId") })
public class SingxAddress implements Serializable, CommonEntityInterface, Comparator<SingxAddress> {

    @Column(name = "addressLabel")
    @JsonProperty("addressLabel")
    @NotNull
    @Size(min = 0, max = 256)
    private String addressLabel;

    @Column(name = "line1")
    @JsonProperty("line1")
    @NotNull
    @Size(min = 0, max = 50)
    private String line1;

    @Column(name = "line2")
    @JsonProperty("line2")
    @NotNull
    @Size(min = 0, max = 50)
    private String line2;

    @Column(name = "line3")
    @JsonProperty("line3")
    @Size(min = 0, max = 50)
    private String line3;

    @Column(name = "line4")
    @JsonProperty("line4")
    @Size(min = 0, max = 50)
    private String line4;

    @Column(name = "line5")
    @JsonProperty("line5")
    @Size(min = 0, max = 50)
    private String line5;

    @Column(name = "line6")
    @JsonProperty("line6")
    @Size(min = 0, max = 50)
    private String line6;

    @Column(name = "line7")
    @JsonProperty("line7")
    @Size(min = 0, max = 50)
    private String line7;

    @Column(name = "line8")
    @JsonProperty("line8")
    @Size(min = 0, max = 50)
    private String line8;

    @Column(name = "postalCode")
    @JsonProperty("postalCode")
    @Size(min = 0, max = 10)
    private String postalCode;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "addressId")
    @JsonProperty("addressId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String addressId;

    @Column(name = "contactId")
    @JsonProperty("contactId")
    private String contactId;

    @Column(name = "city")
    @JsonProperty("city")
    private String city;

    @Column(name = "district")
    @JsonProperty("district")
    private String district;

    @Column(name = "state")
    @JsonProperty("state")
    private String state;

    @Column(name = "country")
    @JsonProperty("country")
    private String country;

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

    public String getAddressLabel() {
        return addressLabel;
    }

    public void setAddressLabel(String _addressLabel) {
        if (_addressLabel != null) {
            this.addressLabel = _addressLabel;
        }
    }

    public String getLine1() {
        return line1;
    }

    public void setLine1(String _line1) {
        if (_line1 != null) {
            this.line1 = _line1;
        }
    }

    public String getLine2() {
        return line2;
    }

    public void setLine2(String _line2) {
        if (_line2 != null) {
            this.line2 = _line2;
        }
    }

    public String getLine3() {
        return line3;
    }

    public void setLine3(String _line3) {
        this.line3 = _line3;
    }

    public String getLine4() {
        return line4;
    }

    public void setLine4(String _line4) {
        this.line4 = _line4;
    }

    public String getLine5() {
        return line5;
    }

    public void setLine5(String _line5) {
        this.line5 = _line5;
    }

    public String getLine6() {
        return line6;
    }

    public void setLine6(String _line6) {
        this.line6 = _line6;
    }

    public String getLine7() {
        return line7;
    }

    public void setLine7(String _line7) {
        this.line7 = _line7;
    }

    public String getLine8() {
        return line8;
    }

    public void setLine8(String _line8) {
        this.line8 = _line8;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String _postalCode) {
        this.postalCode = _postalCode;
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

    public String getContactId() {
        return contactId;
    }

    public void setContactId(String _contactId) {
        this.contactId = _contactId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String _city) {
        this.city = _city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String _district) {
        this.district = _district;
    }

    public String getState() {
        return state;
    }

    public void setState(String _state) {
        this.state = _state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String _country) {
        this.country = _country;
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
    public int compare(SingxAddress object1, SingxAddress object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append(" ");
        sb.append((addressLabel == null ? " " : addressLabel));
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
            singx.app.shared.singx.SingxAddress other = (singx.app.shared.singx.SingxAddress) obj;
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
