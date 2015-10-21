package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.AddressRepository;
import singx.app.shared.location.Address;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import singx.app.shared.location.AddressType;
import singx.app.server.repository.AddressTypeRepository;
import singx.app.shared.location.City;
import singx.app.server.repository.CityRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.location.State;
import singx.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("8SJHL7OIrNFD70LxNHzv6I0aORxwnCqJ4u5mMrWyDfnmpDzRM8");
            addresstype.setAddressTypeDesc("SSOHrp86Q3CDF9hAe6JiVISefYryaqolnmBUXEas7c9h2VejAB");
            addresstype.setAddressTypeIcon("eRM7w7tkKHPW5ge0qzAowOxSuS8t5afQIAZxLTJJm0y9XiIRuC");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(1);
            city.setCityCodeChar2("5rixGs3jwa3OGCnfEQlgnh2Aoe4vh9Lh");
            city.setCityDescription("TT4Q8nvAOBg0QwkrMMUnV9ATuxRtZp7TSteye8RbSXCGhqpIvt");
            city.setCityFlag("ITPsc0GtC7S8zky3eHP3OKR6E3PrxicS1b2sNEG8w2eEEk0R7m");
            city.setCityLatitude(7);
            city.setCityLongitude(4);
            city.setCityName("1Oof2DCgCqTzjawejS3MK6madcvJhoLA9UmA9xZc0d6lenKsTV");
            Country country = new Country();
            country.setCapital("RCKbti1A2nKYR4cpT3tLEmV7Ar8n9muD");
            country.setCapitalLatitude(7);
            country.setCapitalLongitude(7);
            country.setCountryCode1("AUm");
            country.setCountryCode2("s3t");
            country.setCountryFlag("yQVcih1PvIBGUHLK4ekIzrS8xKTS3l3X7QLjVXlCAaShj0TXOH");
            country.setCountryName("TLv17jMDAZKl3Fuh4F14SBcC46EsIvBJ1yJo0r3PvD72qLrvCJ");
            country.setCurrencyCode("vR6");
            country.setCurrencyName("KYEcZJhaVHXHMB8AU0v9jfnWZzdUhElvoMPONBjVOC46ExANGU");
            country.setCurrencySymbol("ieS9IOOSMRuFYXKH0jOia8h2k2qIxtdJ");
            country.setIsoNumeric(3);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("y946KVYxRQHoL4EkqnK8n2KTKeHJLtWoKFiVY9LSpzOXUCmncB");
            state.setStateCapitalLatitude(7);
            state.setStateCapitalLongitude(10);
            state.setStateCode(2);
            state.setStateCodeChar2("w2Y35CIPI7aV2tsmVvE0hTkqgr4zKDpc");
            state.setStateCodeChar3("5VxrmUOLVmFWUfeLvdeWMqXzEfP8eM7o");
            state.setStateDescription("GeX3c5iIBJgKlGauHcFgnEyOjOMm4kX6YpDvkEilJGyXvSRGYX");
            state.setStateFlag("Ev5ZxDnnIazriKtnRnjFVhPiPg4tJCkdjrbiuzG8tPs5SgXH4u");
            state.setStateName("RqJQQ1LIOfE82bvmt05qqBZOvszZvO6vwEDyLasrjKLGJEEwtl");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(1);
            city.setCityCodeChar2("GgBuiW8ZGTpQtmCjaHAA6MLFneE7vqkM");
            city.setCityDescription("wLHILtGTocyxTfaR9RVXXsyBp8GiSPQdhFIceUmtYqFzON3yls");
            city.setCityFlag("9Zu7RxZyOM3wFGIHIuhSckN2qSuByl3UbvvrXIBK8eoEUuFkFl");
            city.setCityLatitude(1);
            city.setCityLongitude(8);
            city.setCityName("wsmuXndBIM0Lda5pswPxPKlRJjWRK29R5K94YA7dfhpFV4fFxm");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("yRYwZmwl7HW16HPBZjWi3PHJZRidpKB74QGshSbJbB9Zk69HPf");
            address.setAddress2("cCPkIcNdTKLXDBlQ2blHq8ZpLuGQs6MW9tOVCMS6HwKv3XI9ts");
            address.setAddress3("yexy4qEU5SKS4a9vNznD8IpIBXMiID2eMjyrqa7EKz7GWhlZwk");
            address.setAddressLabel("58pwYRBZETh");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("nZ8Rrn8uOcylF4SFeCFQJX38xlNRj2fyoPMF5jrNJSb7UrkamP");
            address.setLongitude("kM0NapS6lcitWkHCwKQ29XJpZ0RNIVMypLudtdsB2Q0pRvzrbo");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("224Cbf");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("kiP9qsGzJCEOQwNHnFu15j3KO4TEIWjzbBZp91iQca3KBocP8s");
            address.setAddress2("0RiEE3KgRCMxGA7ZzvTOTA5SphtdY3idu3O4IWXgdxKxSr0PD0");
            address.setAddress3("u50Ild9a9Kb7e3ROXvIXSRq28RHQBY2Y4jFTWiDUyZ5AW1pUk9");
            address.setAddressLabel("jwY1Qk4b8tf");
            address.setLatitude("n47ak9dhYNlm3lzN4mwJVdOjOv2XkoJu43gEjjgLhlpOO3K5f6");
            address.setLongitude("wqShqWntzFQT35a7vc0uTgMnzLxD4RDziWA9Pu1uK6GixBNuaj");
            address.setVersionId(1);
            address.setZipcode("jxmBhc");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
