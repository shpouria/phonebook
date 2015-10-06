
var prompt = require('prompt');
var chalk = require('chalk');
var dl = require('./datalayer');
var validations = require('./validations');

var app = {
      contacts : [],
      initilize: function(){
          prompt.start();
          this.showMenu();
          this.contacts = dl.load();
          
      },
      showMenu: function(){
          var str ="Phonebook v1.0.0\n"+
         "----------------\n"+
         "1. List of contacts.\n"+
         "2. Add contact.\n"+
         "3. Search.\n"+
         "4. Show this menu.\n"+
         "5. Save changes.\n"+
         "6. quit.\n";
         console.log(chalk.cyan(str));
         this.getChoice();
      },//writeMenu
      getChoice: function(){
          var self = this;
          prompt.get(['choose'], function (err, result) {
            switch (result.choose) {
                case "1":
                    self.ContactsList();
                    break;
                case "2":
                    self.AddContact();
                    break;
                case "3":
                    self.Search();
                    break;
                case "4":
                    self.showMenu();
                    break;
                case "5":
                    self.Save();
                    break;
                case "6":
                    console.log("Bye.");
                    break;
                default:
                console.log(chalk.red("Invalid Choice!"));
                 self.getChoice();
                 break;
            }
          });

      },//getChoice
      AddContact:  function(){
          var self = this;
            prompt.get(validations.contact, function (err, result) {
           var contact = {firstName: result.firstName, lastName: result.lastName, phone: result.phone};
              self.contacts.push(contact) ;
              console.log(self.contacts);
               self.getChoice();
            });
       },//AddContact
       Search : function(){

       },
       ContactsList: function(){
        console.log(this.contacts);
         this.getChoice();
     },
     Save: function(){
         dl.save(this.contacts);
     }
};
module.exports = app;
