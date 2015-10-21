package singx.app.server.service.aspect.backoffice;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import singx.app.server.businessservice.backoffice.singx.UserContactMapService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
@Component
public class UserInfoAspect {

    @Autowired
    private UserContactMapService usercontactmapservice;

    @After("afterauthenticate()")
    public void afterAuthenticateServiceauthenticate(JoinPoint joinPoint) throws Throwable {
        usercontactmapservice.getConatctInfo();
    }

    @Pointcut("execution(* com.spartan.shield.server.service.AuthenticateService.authenticate(..))")
    public void afterauthenticate() {
    }
}
