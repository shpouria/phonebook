var phonebook = require('./phonebook');
var prompt = require('prompt');
var chalk = require('chalk');
var validations = require('./validations');
var consoleApp = {
    start : function(){
        phonebook.initilize();
        prompt.start();
        this.showMenu();
    },
    showMenu: function(){
        var str ="Phonebook v1.0.0\n"+
       "----------------\n"+
       "1. List of contacts.\n"+
       "2. Add contact.\n"+
       "3. Remove contact.\n"+
       "4. Search.\n"+
       "5. Show this menu.\n"+
       "6. Save changes.\n"+
       "7. quit.\n";
       console.log(chalk.cyan(str));
       this.getChoice();
    },//writeMenu
    getChoice: function(){
        var self = this;
        prompt.get(['choose'], function (err, result) {
          switch (result.choose) {
              case "1":
                  console.log( phonebook.ContactsList());
                  break;
              case "2":
                  prompt.get(validations.contact, function (err, result) {
                  var contact = {firstName: result.firstName, lastName: result.lastName, phone: result.phone};
              });
                  phonebook.AddContact(contact);
                  break;
              case "3":
                  self.removeContact();
                  break;
              case "4":
                  self.search();
                  break;
              case "5":
                  phonebook.showMenu();
                  break;
              case "6":
                  phonebook.Save();
                  break;
              case "7":
                  console.log("Bye.");
                  break;
              default:
                  console.log(chalk.red("Invalid Choice!"));
                  self.getChoice();
                  break;
          }
        //   self.getChoice();
      });//prompt.get
    },//getChoice
    search : function(){
      var field = "";
      var filter = "";

     var str ="choose your field for search and input your value\n"+
     "----------------\n"+
     "1. firstName.\n"+
     "2. lastName.\n"+
     "3. phone.\n";
     console.log(chalk.cyan(str));

     prompt.get(validations.search, function (err, result) {
         switch (result.field) {
             case "1":
                field = "firstName"
                 break;
             case "2":
                field = "lastName"
                 break;
             case "3":
                field = "phone"
                 break;
             default:
                 console.log("just input 1 or 2 or 3");
             break;
         }
         filter = result.filter;
         //todo: prompt user to get field name and filter text
         var found = phonebook.Search(field,filter);
         console.log(chalk.red("lets get search"));
         console.log(found);
     });
    }//search
    removeContact: function(){

    }
}

module.exports = consoleApp;
