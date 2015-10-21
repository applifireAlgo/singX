package singx.app.server.businessservice;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import singx.app.server.repository.BankRepository;
import singx.app.shared.singx.Bank;
import java.util.List;

@Component
public class BankBusinessService {

    @Autowired
    private BankRepository bankRepository;

    public void update(Bank entity) throws SpartanPersistenceException {
        try {
            if (entity.isHardDelete()) {
                bankRepository.delete(entity.getBankId());
            } else {
                bankRepository.deleteWireTransferMode(entity.getDeletedWireTransferModeList());
                bankRepository.update(entity);
            }
        } catch (javax.persistence.PersistenceException e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error in entity creation", e);
        } catch (Exception e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error while updating entity", e);
        }
    }

    public void update(List<Bank> entity) throws SpartanPersistenceException {
        try {
            for (Bank _bank : entity) {
                if (_bank.isHardDelete()) {
                    bankRepository.delete(_bank.getBankId());
                } else {
                    bankRepository.deleteWireTransferMode(_bank.getDeletedWireTransferModeList());
                    bankRepository.update(_bank);
                }
            }
        } catch (javax.persistence.PersistenceException e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error in updating Entity", e);
        } catch (Exception e) {
            throw new com.athena.framework.server.exception.repository.SpartanPersistenceException("Error while updating entity", e);
        }
    }
}
