package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.SingxAddressRepository;
import singx.app.shared.singx.SingxAddress;
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
import singx.app.shared.location.City;
import singx.app.server.repository.CityRepository;
import singx.app.shared.location.Country;
import singx.app.server.repository.CountryRepository;
import singx.app.shared.location.State;
import singx.app.server.repository.StateRepository;
import singx.app.shared.singx.SingxContacts;
import singx.app.server.repository.SingxContactsRepository;
import singx.app.shared.contacts.Gender;
import singx.app.server.repository.GenderRepository;
import singx.app.shared.singx.CallingCode;
import singx.app.server.repository.CallingCodeRepository;
import singx.app.shared.singx.SingxPrefix;
import singx.app.server.repository.SingxPrefixRepository;
import singx.app.shared.location.District;
import singx.app.server.repository.DistrictRepository;
import singx.app.shared.location.Region;
import singx.app.server.repository.RegionRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class SingxAddressTestCase {

    @Autowired
    private SingxAddressRepository<SingxAddress> singxaddressRepository;

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
            City city = new City();
            city.setCityCode(1);
            city.setCityCodeChar2("XLcOSTfMftVEoImQKR0phROs6tWtJ3ny");
            city.setCityDescription("N9SAK4ldYP0HgYGfD3Wmb2osGadkAom0I9ZztVq57wS2MeFZEr");
            city.setCityFlag("K4Pqp3uBcVb4Jjds9hI2MH2xlujneBITwfaz0K8kmDzDJAJp5g");
            city.setCityLatitude(3);
            city.setCityLongitude(5);
            city.setCityName("mN6AVS2HLA6MZpNb2ppxvDqE4wJZETBIbhjttJA435hVpDIjRB");
            Country country = new Country();
            country.setCapital("un6kz7vnCneXziMXAApnbqoohC70kpK6");
            country.setCapitalLatitude(8);
            country.setCapitalLongitude(8);
            country.setCountryCode1("IqL");
            country.setCountryCode2("wqr");
            country.setCountryFlag("iVO91yIBhONdIzlHNkjQrpvKtunwrKYlmKB01GnaznZmlBNNKZ");
            country.setCountryName("yK0HaGLh9QdOKwMOLY0on1oieDLi3kQZdUH49Pejxd9fO7sHuF");
            country.setCurrencyCode("FYj");
            country.setCurrencyName("3udF2HiZ0wRBDhl7rb8aqnpxuz8SZWR3RQOG21DP7C7iaqKquk");
            country.setCurrencySymbol("QzBCUgF5f748ViRkPSFHcl5acnBKVmX9");
            country.setIsoNumeric(4);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("kXcyNIcSRyQ6TwR24JiM7BjWbPzCDbzzLenZZHafJ7UoHAaPWz");
            state.setStateCapitalLatitude(5);
            state.setStateCapitalLongitude(8);
            state.setStateCode(2);
            state.setStateCodeChar2("CrwX3umQKlzf22pbhLVCjmhDN2AomXNX");
            state.setStateCodeChar3("BtQWAnaCU22V6IbvGfUtHtYdW9Un8N2D");
            state.setStateDescription("7vviIC2cHglLA09x7ko0wGv8zfE0a18ufjO17VEE5fchtAVGe1");
            state.setStateFlag("JxU0o3SO8fKVBy66yk6gAt8NQRvQd0sAqgbBH8gTfMR9U361Kt");
            state.setStateName("XFcg8TDVoDg88CjIEXambDaKsjU4MshP166vv1W06XWlsqOFbh");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(2);
            city.setCityCodeChar2("jNzNzBLWuBjxtvGW7KexSlmxQMKawFF8");
            city.setCityDescription("PYKidOvnWq4U2BkRvd0R2t44JjeTXcqVRBuWyfHufPmn8mUZA1");
            city.setCityFlag("3n0GkZ5h4OuQjaCWjuosMPp5DdjUFky0tjiO8x1B1a2fwtLqP3");
            city.setCityLatitude(9);
            city.setCityLongitude(7);
            city.setCityName("ULteXRkl4defKumkxdcwtSfTvg8x7cyX24hv9QG59xfcvGRakn");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            SingxContacts singxcontacts = new SingxContacts();
            Gender gender = new Gender();
            gender.setGender("quzpAFdH32TVuPqJnCsIlePRUW7M8RHn0JWcJjlC4PkbplXR0K");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            CallingCode callingcode = new CallingCode();
            callingcode.setCallingCode("feNwTaHETGhHxFqt53LiQnwLNCGUPYrLXNxEbjD02bxzWOAOoY");
            callingcode.setCallingCode("tbOQ4jmZ0O4yEznyOXcwFNeuLhMhx0b7aP2xR5S5in37Ej50iB");
            callingcode.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            CallingCode CallingCodeTest = callingcodeRepository.save(callingcode);
            map.put("CallingCodePrimaryKey", callingcode._getPrimarykey());
            SingxPrefix singxprefix = new SingxPrefix();
            singxprefix.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxprefix.setPrefixName("dALNcVAERVhqSG3x2CJJ9atwuP4E6iZgRAICD2S0NFN4RYmcIo");
            SingxPrefix SingxPrefixTest = singxprefixRepository.save(singxprefix);
            map.put("SingxPrefixPrimaryKey", singxprefix._getPrimarykey());
            singxcontacts.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setDateOfBirth(new java.sql.Date(123456789));
            singxcontacts.setEmailId("R6iq88DqvbjowG7sIprrvOkw4wFs8LInR5Mr0YUTrx7oGhFXkA");
            singxcontacts.setFirstName("1PFf5wc8N9jcKvXo9h9BYmQ60uoVn1DCxS4npvOpF8QWHbnrKZ");
            singxcontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setLastName("n8l6ttakMHBzsLetLHpAMDUhs9Z1AwSRSBXKhFKqoTUM8rc2SF");
            singxcontacts.setMiddleName("xnV1RyZwSjADCKFPdnQpqKhsabiqH9SislUN6SRwH25pZNGYTs");
            singxcontacts.setPhoneCountryCode((java.lang.String) CallingCodeTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxcontacts.setPhoneNumber(2147483647);
            singxcontacts.setPrefixId((java.lang.String) SingxPrefixTest._getPrimarykey()); /* ******Adding refrenced table data */
            SingxContacts SingxContactsTest = singxcontactsRepository.save(singxcontacts);
            map.put("SingxContactsPrimaryKey", singxcontacts._getPrimarykey());
            District district = new District();
            district.setCode2("cyy9erZ0zjYmiW1Uc6JT89egX6SSWQfL");
            Region region = new Region();
            region.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            region.setRegionCode1(2);
            region.setRegionCodeChar2("86PG8s3TRBk56e7lDpM19zXuFupSIP05");
            region.setRegionDescription("6VhXzqS4ncVvWPY9BJaUDgYJOhXcU8jXLknPYXPZRRdPIqtqgN");
            region.setRegionFlag("3sFotJCEXtaVvUXNheh2SicqMAlu5GCP8wHNliFM1HZQeM12P9");
            region.setRegionLatitude(6);
            region.setRegionLongitude(1);
            region.setRegionName("UaxZERZPMeXtkBAqXStczb4jfvHpyXINrijen0yXgQI1hYDZb0");
            region.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            Region RegionTest = regionRepository.save(region);
            map.put("RegionPrimaryKey", region._getPrimarykey());
            district.setCode2("01yzEGSEhg6hTtRqnAJt0ZpL3chdh0YD");
            district.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setDistrictDescription("xFOxgBdtpQ98QwUELEqNFkw3b2vtYgzzLL2vKhdQKOjW2pIOEn");
            district.setDistrictFlag("g80PrlzpsLCRwwSB2DJ4W90xvxVa5lJ4dG6GsI1f5GWyZ1ISm7");
            district.setDistrictLatitude(10);
            district.setDistrictLongitude(4);
            district.setName("xjG0pUiAGnkCqvaY2HFTRhdEng1pNN9mHROsdkCqFYVpUBEqC6");
            district.setRegionId((java.lang.String) RegionTest._getPrimarykey()); /* ******Adding refrenced table data */
            district.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            District DistrictTest = districtRepository.save(district);
            map.put("DistrictPrimaryKey", district._getPrimarykey());
            SingxAddress singxaddress = new SingxAddress();
            singxaddress.setAddressLabel("zCWi0P8aqI21GoM7sWalL4nTJJoXfLcVd1XGyzvCSXOOrHbu8n");
            singxaddress.setCity((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxaddress.setContactId((java.lang.String) SingxContactsTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxaddress.setCountry((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxaddress.setDistrict((java.lang.String) DistrictTest._getPrimarykey()); /* ******Adding refrenced table data */
            singxaddress.setLine1("24B55flW47oZ2teOKcpROHb7vu5CG90HBd8TCSGjQMRAUIk1HT");
            singxaddress.setLine2("65clyORauvvi8yzTF1Qpi8hvxsI0Gk00WJOKK97UBSiuo8BOKY");
            singxaddress.setLine3("CPqF8S7G5c4Hr8n82A3zMK3TsgseGSqQaRyYnf6OZ1G0NMljMj");
            singxaddress.setLine4("rZJsU8XOvewQGXILN4pOGmR48g4yaFmBLceHysSVCBosRb8Qen");
            singxaddress.setLine5("53B5o2snYZSxA60IytzlPjPQC9SuEf5zWFMJehkvW5BjiZX6dt");
            singxaddress.setLine6("W7kTdTxxShfXITHCgonCHqtSUWUiMr4J4atkaz7kC70lYWPwJn");
            singxaddress.setLine7("pEm8IgrZ4CLXHspfwSZV9jdKLJKcRVDacajBgESGrQ9K1NXQ3I");
            singxaddress.setLine8("aPbxsnzK2ASnKTgVaNfAM3TeNnSYDt6vxoWaJTVDP1zaBHJPhE");
            singxaddress.setPostalCode("jfoinfP2Cm");
            singxaddress.setState((java.lang.String) StateTest._getPrimarykey());
            singxaddress.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            singxaddress.setEntityValidator(entityValidator);
            singxaddress.isValid();
            singxaddressRepository.save(singxaddress);
            map.put("SingxAddressPrimaryKey", singxaddress._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private SingxContactsRepository<SingxContacts> singxcontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private CallingCodeRepository<CallingCode> callingcodeRepository;

    @Autowired
    private SingxPrefixRepository<SingxPrefix> singxprefixRepository;

    @Autowired
    private DistrictRepository<District> districtRepository;

    @Autowired
    private RegionRepository<Region> regionRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("SingxAddressPrimaryKey"));
            SingxAddress singxaddress = singxaddressRepository.findById((java.lang.String) map.get("SingxAddressPrimaryKey"));
            singxaddress.setAddressLabel("oX7SKjOVhj7ZEeUzRMQ1Ck9z2qDhH7SCfUxi8UE8GtmJ1QcQgY");
            singxaddress.setLine1("0CPvjwwdOc4AMafqcRLEBUUHesoXDbwZjJzLbxHx6LD5smbW5a");
            singxaddress.setLine2("vuSRUXpYgjmBv0sXcmSUph1layudtQYDG84CbskSo5rhYBFhZH");
            singxaddress.setLine3("sy6L7kQlEwgIKWPN4EfKN70G3jWUnobvQElnHekmTFKJ1vNUB1");
            singxaddress.setLine4("U7lhp9gg1I0AumRV1ZZp8rrD3rQkELRZJ4OQDb8iOrzOLZkuKA");
            singxaddress.setLine5("OubnykHCs4HTff6fG5em059KOnggH3IhckthfPncvPpPRllpLW");
            singxaddress.setLine6("sZosgtxr9QCpkxYRsZXsw0qSCegljurC3ZUFiK6v0EG2CUipgq");
            singxaddress.setLine7("fSUxIQRJkRvM5slIPdxJprJncqLAd0PI3wJ2lm3i2ZF3p82cQj");
            singxaddress.setLine8("u6gF65efppRfrQGCCbLMcFMrbncJKkDciMZZ9PURIUKxxljO6t");
            singxaddress.setPostalCode("93CThnGhI1");
            singxaddress.setVersionId(1);
            singxaddress.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            singxaddressRepository.update(singxaddress);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("SingxAddressPrimaryKey"));
            singxaddressRepository.findById((java.lang.String) map.get("SingxAddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycity() {
        try {
            java.util.List<SingxAddress> listofcity = singxaddressRepository.findByCity((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcity.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycontactId() {
        try {
            java.util.List<SingxAddress> listofcontactId = singxaddressRepository.findByContactId((java.lang.String) map.get("SingxContactsPrimaryKey"));
            if (listofcontactId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBycountry() {
        try {
            java.util.List<SingxAddress> listofcountry = singxaddressRepository.findByCountry((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountry.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBydistrict() {
        try {
            java.util.List<SingxAddress> listofdistrict = singxaddressRepository.findByDistrict((java.lang.String) map.get("DistrictPrimaryKey"));
            if (listofdistrict.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBystate() {
        try {
            java.util.List<SingxAddress> listofstate = singxaddressRepository.findByState((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstate.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("SingxAddressPrimaryKey"));
            singxaddressRepository.delete((java.lang.String) map.get("SingxAddressPrimaryKey")); /* Deleting refrenced data */
            districtRepository.delete((java.lang.String) map.get("DistrictPrimaryKey")); /* Deleting refrenced data */
            regionRepository.delete((java.lang.String) map.get("RegionPrimaryKey")); /* Deleting refrenced data */
            singxcontactsRepository.delete((java.lang.String) map.get("SingxContactsPrimaryKey")); /* Deleting refrenced data */
            singxprefixRepository.delete((java.lang.String) map.get("SingxPrefixPrimaryKey")); /* Deleting refrenced data */
            callingcodeRepository.delete((java.lang.String) map.get("CallingCodePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
