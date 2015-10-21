package singx.app.shared.backoffice.acl;
import singx.app.shared.backoffice.singx.CustomerContaDTO;
import singx.app.shared.singx.CorporateRegDetail;

public class CorporateCustACL {

    public CorporateCustACL(CustomerContaDTO _customercontadto) {
        this.customercontadto = _customercontadto;
        this.doMapping();
    }

    private CustomerContaDTO customercontadto;

    private CorporateRegDetail corporateregdetail;

    public CorporateRegDetail corpCustACL() {
        return corporateregdetail;
    }

    public void doMapping() {
        corporateregdetail = new CorporateRegDetail();
        corporateregdetail.setCompanyCategoryId(customercontadto.getCompanyCategoryId());
        corporateregdetail.setCompanyName(customercontadto.getCompanyName());
        corporateregdetail.setCompanyTypeId(customercontadto.getCompanyTypeId());
        corporateregdetail.setCustomerId(customercontadto.getCustomerId());
        corporateregdetail.setHeadOffice(customercontadto.getHeadOffice());
        corporateregdetail.setMapId(customercontadto.getMapId());
        corporateregdetail.setRegistrationNumber(customercontadto.getRegistrationNumber());
    }
}
