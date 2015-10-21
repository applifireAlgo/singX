package singx.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.context.ContextConfiguration;
import singx.app.config.WebConfigExtended;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import singx.app.server.repository.CoreContactsRepository;
import singx.app.shared.contacts.CoreContacts;
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
import singx.app.shared.contacts.Gender;
import singx.app.server.repository.GenderRepository;
import singx.app.shared.location.Language;
import singx.app.server.repository.LanguageRepository;
import singx.app.shared.location.Timezone;
import singx.app.server.repository.TimezoneRepository;
import singx.app.shared.contacts.Title;
import singx.app.server.repository.TitleRepository;
import singx.app.shared.contacts.CommunicationData;
import singx.app.shared.contacts.CommunicationGroup;
import singx.app.server.repository.CommunicationGroupRepository;
import singx.app.shared.contacts.CommunicationType;
import singx.app.server.repository.CommunicationTypeRepository;
import singx.app.shared.location.Address;
import singx.app.server.repository.AddressRepository;
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
public class CoreContactsTestCase {

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

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
            Gender gender = new Gender();
            gender.setGender("FtlfLXv06UJ3PKQVHL3gr3omtLKO4abrwPmpptQOJ8bpc2LzV6");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("sE");
            language.setAlpha3("oUj");
            language.setAlpha4("HdyG");
            language.setAlpha4parentid(11);
            language.setLanguage("ZxI7Hgs0GUOqaN7g9RC6L2Iw30RdqOX2JT6m250MY28DPWPkOr");
            language.setLanguageDescription("1RBqrPWRw1nKbJbeM4sx9OHUVik7KXkij6lFnpgAdrt3fxD8xY");
            language.setLanguageIcon("VWkknNwb4Y28rag4EmCawE316JPJaePSYzbB7QP5J7HVteWzwB");
            language.setLanguageType("idG0hMiQeOd0oOqqHjMwGeBSycY3RNpt");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("DfQEtP2SqLS99GkDadgxv4S3MdUysmkly4Lw13M7iYs4h2kpqJ");
            timezone.setCountry("cEcbHsZNQAVhPwCvV2W09IE1Ezb7yUfOuoDRTYXp0BEO1x4bq0");
            timezone.setGmtLabel("b0bLjZ4mO3xVfhcSB4HyiiacZt2i4t8xu9ceNKpf9k2acqIuJa");
            timezone.setTimeZoneLabel("cEP1MWW6Xbz2tb7nhcrRi5Wo3bgSI8lv4iJngeAlJPSd5YXCrG");
            timezone.setUtcdifference(1);
            Timezone TimezoneTest = timezoneRepository.save(timezone);
            map.put("TimezonePrimaryKey", timezone._getPrimarykey());
            Title title = new Title();
            title.setTitles("oqAR0xxKqhW3R3stUjwh16tP0ABnQG8jbkoiyBDx8T5d5M4EX6");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(24);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("mLW8HTaF4lwwzNCwaBFe54zuI2HP8k8ynbvXGIhHLnl9oxWbtS");
            corecontacts.setFirstName("GlFSqdEpcCsBzEsExVYZRr4f8Ys3MPUSYEBHL7EJou1Uq0iBoj");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("qg9VSh9yzkhZIbidOf7sZYz6WTAk1nLehkATwHfHVcRHJjgHM7");
            corecontacts.setMiddleName("QfgJqJ5CGVGbxwBooCicjdJcjYISVe8onetIX93TYtUtdrpAnG");
            corecontacts.setNativeFirstName("mlgzhPRg1B1mDyzz6GLhngWC724QCa4HHSTyCtDl0WQLn7Rilu");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("dchQaYzH9iY0lAPwlsgGHWjadrtik5tyYg6ptSYM1xSzOpLBlQ");
            corecontacts.setNativeMiddleName("ixaqHXdwpgZCnuneJVC3IAqw6VNsRfippymtpITPK6zWUv20Z1");
            corecontacts.setNativeTitle("074nRaTXivQ8kxjuRtqU27PnCVRxt3P5dIsoILRar3GmNxl2Bs");
            corecontacts.setPhoneNumber("CLZWeJ2Wg7Xyl4RmrRjV");
            corecontacts.setTimeZone((java.lang.String) TimezoneTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("dXQ");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("YZpSyw8W3I8ncKO8irral3Q6Zr1Yp8aS8dleEW2TQ7lkoEPuTm");
            communicationgroup.setCommGroupName("KRkqsvewqNY1ElUlVgazqe6eLzoItYXLjBIeXvXgi5UY1sfIJQ");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("CExvoe672aIbSjRETg5ZzhdKxUQLT0g0Dh0NdUjsRTBDgjQ2y0");
            communicationtype.setCommTypeName("0A0Q3kpledCiYQRj3JCPScuf7IWgDyz86UfX39aWjRabZrIxzW");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("ByU");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("yk2wp1rY31w01ylXNtLCrgSlscFg79PiZ4s02R4IGZXNuPY589");
            address.setAddress2("xkeTQiT9QDGZaH7Oae1dMbZDPLakZSNMxxBaiguABGNZpNv44V");
            address.setAddress3("2DqiHAAi7MNO9o7RRA7iXeK2qhDGpnPqoL34XqZXbKBiOx6lMN");
            address.setAddressLabel("1oF8NXcwS0F");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("BQQBkpMEONCXn170g4T5vMUgFEOPa4DOHF6ZvpCL8x5zg5ud6i");
            addresstype.setAddressTypeDesc("sWhISxIlbzPoNaLbKtk1xjEi0kQAcAoh4C33UTuHHbiCuyDP2x");
            addresstype.setAddressTypeIcon("M1MdPrbsqGzQJmkCqkLh8VUtkNpJPlyAJXTO1Gz5iRE7WdUCRr");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(2);
            city.setCityCodeChar2("85qgFicHjem5Kg4pdHT4C8q5T6rSCRDQ");
            city.setCityDescription("pQQ7V6gMKgUCWE0MxH8qAra4yTxQlZYSFKIBspxd7vzGX51SdJ");
            city.setCityFlag("Zs4vl0xFIMnvhSTwQDF5Az9n5WVxMWownOS4LahvcWi131gDwk");
            city.setCityLatitude(2);
            city.setCityLongitude(4);
            city.setCityName("7ysulxEpv3zVJqqmdAdutWMIXNOpUGXHRiuGb4yEvuGBzahddo");
            Country country = new Country();
            country.setCapital("S5kxLzVrBIlBXdHZEXyfgzOi4BvMQY9k");
            country.setCapitalLatitude(9);
            country.setCapitalLongitude(6);
            country.setCountryCode1("XiY");
            country.setCountryCode2("c3p");
            country.setCountryFlag("OdIcC3Oz9B6Z7DxR9vVmYlOTAS1br5ptAym1gWLia3u6BJHBqq");
            country.setCountryName("UjIXxZqHctR7RSWu4aDJ4yETYmt4nfkXy1UijPjT8oZsM9MvOV");
            country.setCurrencyCode("jZF");
            country.setCurrencyName("qBR0GyYqMlz5lrXscSSFdMyr5Q6whLR6Qq7I6UerwnSHZdwvbn");
            country.setCurrencySymbol("7ZcdltXqhcv81m5TNLngqkwAgbvxyxTE");
            country.setIsoNumeric(8);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("cZANSjKABSRUzyGcW61jUQjsmJFWoPkBJ9f8u3ZOs5Z4ik0IEo");
            state.setStateCapitalLatitude(0);
            state.setStateCapitalLongitude(9);
            state.setStateCode(2);
            state.setStateCodeChar2("Ke0BOymftdyMoeGLcbmABToOZBoj6S5J");
            state.setStateCodeChar3("oUACa2rH7Pjeuo5sVh7RozS1RmSt7cBj");
            state.setStateDescription("IrwoCEeCpSqKItsW039yNwN4y8x9kBT0h8vlXufnIjfp3viYlw");
            state.setStateFlag("2OCu1Zvq7qIngmPUVfie4bRhSXBwbeeWC0iNEGORx6WG2MQQh2");
            state.setStateName("YmdakvuMToRMfy0ujOxA2hxyNs0tBBWYYRrZ0kGFDlcrw5td8N");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(2);
            city.setCityCodeChar2("qpYVsLQPZco69ijxAbR366LKF7wGIAuS");
            city.setCityDescription("PGu7VRnr5HxwGURrjTNigQmRC1xTn7ELhnyvQf193JZFceX3CU");
            city.setCityFlag("0uImOfgPVxFuNtY5BKamwFAAZmPHSTS3WC64pUzlOjCfAwvGXR");
            city.setCityLatitude(5);
            city.setCityLongitude(4);
            city.setCityName("OFmh98rO45CAQr5diEhh479uxPzIac8F6xttnuMcRIpmkUGNBu");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("fHOVsKdBEtdBisFxiwuczJjFvydCbNENtimHyeZA2LCxCZgRqz");
            address.setAddress2("kwcOWbGntva9Ucj81xHnar6sO6WSNnZ7rQUPhs4yQhfXf32DuU");
            address.setAddress3("ZyJgV2goZcW7DI98Pn7d0ygdgimhC1wFr1N2RISNyttdPclZzg");
            address.setAddressLabel("S8W75Oc21Qf");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("wCoRALIoeQzeIBT3a5sTC2wStwsYkiS871YeEuCMCbitGLpOF6");
            address.setLongitude("icW7LjTm7O7dYHJdnSgYMshwTp7q6u7mhurMbpgaW2GpTebAff");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("35iwwd");
            listOfAddress.add(address);
            corecontacts.addAllAddress(listOfAddress);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.setEntityValidator(entityValidator);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private CommunicationGroupRepository<CommunicationGroup> communicationgroupRepository;

    @Autowired
    private CommunicationTypeRepository<CommunicationType> communicationtypeRepository;

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setAge(64);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("rl1s733VNwe1DPjBPeB7CD1a6O9JzyBPKVaFaG2DgiVsQ28YMx");
            corecontacts.setFirstName("S5YznSoxPRVrEXbP3qERTzA5pDdO17YY5uEQ2tkZ5illMkqYV2");
            corecontacts.setLastName("ys8unlf4tzN2VWLBfmp0YJdbV7joUMa1gjxEtRxcFb4IMaG6Mz");
            corecontacts.setMiddleName("0F71C1cEPdr4y25uHekPtNtGbuucFkuT5kBAtCn9p9alIntRHL");
            corecontacts.setNativeFirstName("G9ohbo7edbVkBbwXMxLdhrKeh27NZPXIPm3Lk9g3jyWpipuIzN");
            corecontacts.setNativeLastName("6Rzsc1YRypASzBV2S4U8o6GYBy3jAIALGCs9NNPhjoPQrEaIqI");
            corecontacts.setNativeMiddleName("ivnqGa4XDdwE8oyubYFOw6CAPu2XIUyqDAorjbbO4zeMZ1xGBN");
            corecontacts.setNativeTitle("LcDSMML5ff1MatTZlnnHuuxfCIvkKabVclofgFgri6l76qfEDW");
            corecontacts.setPhoneNumber("gFnMSe90Gg5iijUJD0VB");
            corecontacts.setVersionId(1);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBytimeZone() {
        try {
            java.util.List<CoreContacts> listoftimeZone = corecontactsRepository.findByTimeZone((java.lang.String) map.get("TimezonePrimaryKey"));
            if (listoftimeZone.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
            communicationtypeRepository.delete((java.lang.String) map.get("CommunicationTypePrimaryKey")); /* Deleting refrenced data */
            communicationgroupRepository.delete((java.lang.String) map.get("CommunicationGroupPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            timezoneRepository.delete((java.lang.String) map.get("TimezonePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
