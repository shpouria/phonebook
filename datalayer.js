var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'contacts.json');

var dl = {
    contacts : [],
    load : function(){

        var self = this;
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if (!err){
            var arr = JSON.parse(data);
            arr.forEach(function(contact){
                self.contacts.push(contact);
            });
            //console.log(this.contacts);
            }else{
                console.log(err);
                contacts = [];
            }
        });
     return this.contacts;
    },
    save: function(contacts){
        var data = JSON.stringify(contacts);
        fs.writeFile(filePath, data,{encoding: 'utf-8'}, function (err) {
          if (err) throw err;
          console.log('It\'s saved!');
        });
    }
}
module.exports = dl;
