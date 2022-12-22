public class LeadController {

    @AuraEnabled(cacheable=true)
     public static List<Lead> getLeads(){
        return [SELECT Id, Name, Phone FROM Lead];
    }
    
    @AuraEnabled
       public static Lead createLead(string name, string company, string email){

              Lead newLead = new Lead();
              newLead.LastName = name;
           	  newLead.Company = company;
           	  newLead.Status = 'New';
              newLead.Email = email;
              insert newLead;
              return newLead;

       }
    
}