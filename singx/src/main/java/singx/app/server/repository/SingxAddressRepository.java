package singx.app.server.repository;
import com.athena.server.repository.SearchInterface;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;
import java.util.List;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;

@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "", versionNumber = "1", comments = "Repository for SingxAddress Transaction table", complexity = Complexity.MEDIUM)
public interface SingxAddressRepository<T> extends SearchInterface {

    public List<T> findAll() throws SpartanPersistenceException;

    public T save(T entity) throws SpartanPersistenceException;

    public List<T> save(List<T> entity) throws SpartanPersistenceException;

    public void delete(String id) throws SpartanPersistenceException;

    public void update(T entity) throws SpartanConstraintViolationException, SpartanPersistenceException;

    public void update(List<T> entity) throws SpartanPersistenceException;

    public List<T> findByContactId(String contactId) throws Exception, SpartanPersistenceException;

    public List<T> findByCity(String city) throws Exception, SpartanPersistenceException;

    public List<T> findByDistrict(String district) throws Exception, SpartanPersistenceException;

    public List<T> findByState(String state) throws Exception, SpartanPersistenceException;

    public List<T> findByCountry(String country) throws Exception, SpartanPersistenceException;

    public T findById(String addressId) throws Exception, SpartanPersistenceException;
}
