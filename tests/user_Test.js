var mongoose = require("mongoose");
var customer = require('../app/model.js');
mongoose.connect('mongodb://localhost/tekpub_test');  
describe("Customers", function(){  
  it("retrieves by email", function(done){    
    customer.findByEmail('test@test.com', function(doc){      
      doc.email.should.equal('test@test.com');       
      done();    
    });  
  });
});