package singx.app.shared.backoffice.acl;
import singx.app.shared.backoffice.singx.CustomerContaDTO;
import singx.app.shared.singx.IndividualRegDetail;

public class IndividualCustACL {

    public IndividualCustACL(CustomerContaDTO _customercontadto) {
        this.customercontadto = _customercontadto;
        this.doMapping();
    }

    private CustomerContaDTO customercontadto;

    private IndividualRegDetail individualregdetail;

    public IndividualRegDetail indiCustAcl() {
        return individualregdetail;
    }

    public void doMapping() {
        individualregdetail = new IndividualRegDetail();
        individualregdetail.setDocumentId(customercontadto.getDocumentId());
        individualregdetail.setExpiryDate(customercontadto.getExpiryDate());
        individualregdetail.setIdProofValue(customercontadto.getIdProofValue());
        individualregdetail.setMapId(customercontadto.getMapId());
        individualregdetail.setNationalityId(customercontadto.getNationalityId());
        individualregdetail.setResidenceTypeId(customercontadto.getResidenceTypeId());
    }
}
