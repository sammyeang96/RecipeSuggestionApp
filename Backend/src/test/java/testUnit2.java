

 import static org.junit.Assert.*;

import com.ex.beans.Pantry;
import com.ex.beans.UserInfo;
import com.ex.beans.UserLogin;
import com.ex.repositories.*;
    import org.junit.Test;  
    import org.junit.runner.RunWith;  
    import org.springframework.beans.factory.annotation.Autowired;  
    import org.springframework.test.context.ContextConfiguration;  
    import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;  
    import org.springframework.test.context.transaction.TransactionConfiguration;  
   
  
    @RunWith(SpringJUnit4ClassRunner.class)  
    @ContextConfiguration(locations="classpath:beans.xml")  
    @TransactionConfiguration(defaultRollback=true,transactionManager="transactionManager")  
    public class testUnit2 {  
      
     @Autowired  
      PantryRepository testit;  
  
   @Autowired
   Pantry testPantry;
   
   @Autowired  
    UserInfoRepository testit2; 
   
   @Autowired  
   UserLoginRepository testit3; 
   
  
   
   
 //  BEGIN PANTRY TESTS----------------
   @Test
   public void testPantryRetrieve() {
		assertNotNull(testit.retrieve("easytest"));
	}
   
   @Test
   public void testPantryupdate() {
  	Pantry testpantry;
  	testpantry=testit.retrieve("easytest");
		assertNotNull(testit.update(testpantry));
	}
   
   @Test
   public void testPantryadd() {
  	
  	 
   	 //testPantry=testit.retrieve("easytest");
   	UserLogin x=new UserLogin("extr","test");
   	testit3.add(x);
   	
   	Pantry xx=new Pantry(231,x,"1,2,3,4");
  
		assertNotNull(testit.add(xx));
	}
     // END PANTRY TESTS--------------------------------
   
   
   
   
   //BEGIN USERLOGIN TESTs-----------------------
   
   @Test
   public void testUserLoginadd() {
   	 //testPantry=testit.retrieve("easytest");
   	UserLogin x=new UserLogin("junittest","testpassed");
   //	testit3.add(x);
   	
		assertNotNull(testit3.add(x));
	}
   
   @Test
   public void testUserLogingetbyuname() {
   	 //testPantry=testit.retrieve("easytest");
   	
		assertNotNull(testit3.getByusername("easytest"));
	}
   
   
   
   
   //END userLogin TESTING----------------------------------------
   
   
   //Begin User information test---------------
   
   @Test
   public void testUserInfoadd() {
  	
  	 
   	 //testPantry=testit.retrieve("easytest");
   	
   	UserInfo xxb=new UserInfo(100,testit3.getByusername("extr"),"Russel","Peters");
  
		assertNotNull(testit2.add(xxb));
	}
  
    
  }