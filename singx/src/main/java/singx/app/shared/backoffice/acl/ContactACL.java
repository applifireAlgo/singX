package singx.app.shared.backoffice.acl;
import singx.app.shared.backoffice.singx.CustomerContaDTO;
import singx.app.shared.singx.SingxContacts;

public class ContactACL {

    public ContactACL(CustomerContaDTO _customercontadto) {
        this.customercontadto = _customercontadto;
        this.doMapping();
    }

    private CustomerContaDTO customercontadto;

    private SingxContacts singxcontacts;

    public SingxContacts contactACL() {
        return singxcontacts;
    }

    public void doMapping() {
        singxcontacts = new SingxContacts();
        singxcontacts.setCountryId(customercontadto.getCountryId());
        singxcontacts.setDateOfBirth(customercontadto.getDateOfBirth());
        singxcontacts.setEmailId(customercontadto.getEmailId());
        singxcontacts.setFirstName(customercontadto.getFirstName());
        singxcontacts.setGenderId(customercontadto.getGenderId());
        singxcontacts.setLastName(customercontadto.getLastName());
        singxcontacts.setMiddleName(customercontadto.getMiddleName());
        singxcontacts.setPhoneCountryCode(customercontadto.getPhoneCountryCode());
        singxcontacts.setPhoneNumber(customercontadto.getPhoneNumber());
        singxcontacts.setPrefixId(customercontadto.getPrefixId());
    }
}
