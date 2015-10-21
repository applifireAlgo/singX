package singx.app.shared.backoffice.singx;
import java.sql.Date;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class CustomerContaDTO {

    private String customerId;

    private String countryId;

    private String customerTypeId;

    private String emailId;

    private String residenceTypeId;

    private String nationalityId;

    private String documentId;

    private String idProofValue;

    private Date expiryDate;

    private String mapId;

    private String companyTypeId;

    private String companyCategoryId;

    private String companyName;

    private String registrationNumber;

    private String headOffice;

    private String contactId;

    private Integer phoneNumber;

    private String prefixId;

    private String firstName;

    private String middleName;

    private String lastName;

    private String genderId;

    private Date dateOfBirth;

    private String phoneCountryCode;

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String _customerId) {
        this.customerId = _customerId;
    }

    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String _countryId) {
        this.countryId = _countryId;
    }

    public String getCustomerTypeId() {
        return customerTypeId;
    }

    public void setCustomerTypeId(String _customerTypeId) {
        this.customerTypeId = _customerTypeId;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String _emailId) {
        this.emailId = _emailId;
    }

    public String getResidenceTypeId() {
        return residenceTypeId;
    }

    public void setResidenceTypeId(String _residenceTypeId) {
        this.residenceTypeId = _residenceTypeId;
    }

    public String getNationalityId() {
        return nationalityId;
    }

    public void setNationalityId(String _nationalityId) {
        this.nationalityId = _nationalityId;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String _documentId) {
        this.documentId = _documentId;
    }

    public String getIdProofValue() {
        return idProofValue;
    }

    public void setIdProofValue(String _idProofValue) {
        this.idProofValue = _idProofValue;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date _expiryDate) {
        this.expiryDate = _expiryDate;
    }

    public String getMapId() {
        return mapId;
    }

    public void setMapId(String _mapId) {
        this.mapId = _mapId;
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

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String _companyName) {
        this.companyName = _companyName;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String _registrationNumber) {
        this.registrationNumber = _registrationNumber;
    }

    public String getHeadOffice() {
        return headOffice;
    }

    public void setHeadOffice(String _headOffice) {
        this.headOffice = _headOffice;
    }

    public String getContactId() {
        return contactId;
    }

    public void setContactId(String _contactId) {
        this.contactId = _contactId;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer _phoneNumber) {
        this.phoneNumber = _phoneNumber;
    }

    public String getPrefixId() {
        return prefixId;
    }

    public void setPrefixId(String _prefixId) {
        this.prefixId = _prefixId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String _firstName) {
        this.firstName = _firstName;
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
        this.lastName = _lastName;
    }

    public String getGenderId() {
        return genderId;
    }

    public void setGenderId(String _genderId) {
        this.genderId = _genderId;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date _dateOfBirth) {
        this.dateOfBirth = _dateOfBirth;
    }

    public String getPhoneCountryCode() {
        return phoneCountryCode;
    }

    public void setPhoneCountryCode(String _phoneCountryCode) {
        this.phoneCountryCode = _phoneCountryCode;
    }
}
