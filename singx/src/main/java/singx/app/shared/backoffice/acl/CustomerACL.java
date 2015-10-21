package singx.app.shared.backoffice.acl;
import singx.app.shared.backoffice.singx.CustomerContaDTO;
import singx.app.shared.singx.SingXCustomer;

public class CustomerACL {

    public CustomerACL(CustomerContaDTO _customercontadto) {
        this.customercontadto = _customercontadto;
        this.doMapping();
    }

    private CustomerContaDTO customercontadto;

    private SingXCustomer singxcustomer;

    public SingXCustomer custAcl() {
        return singxcustomer;
    }

    public void doMapping() {
        singxcustomer = new SingXCustomer();
        singxcustomer.setCountryId(customercontadto.getCountryId());
        singxcustomer.setCustomerTypeId(customercontadto.getCustomerTypeId());
        singxcustomer.setEmailId(customercontadto.getEmailId());
    }
}
