var conf = require('../../nightwatch.conf.js');

module.exports = {

  before : function (browser) {
    browser.resizeWindow(1400,900);
  },

  'Fill form and submit then validate': function (browser) {
    browser
      .useXpath()
      .url('http://www.way2automation.com/angularjs-protractor/webtables/')
      .waitForElementVisible('//button[@type="add"]');
      browser.click('//button[@type="add"]')

      var firstname = '//input[@name="FirstName"]'
      var lastname = '//input[@name="LastName"]'
      var username = '//input[@name="UserName"]'
      var password = '//input[@name="Password"]'
      var email = '//input[@name="Email"]'
      var Mobilephone = '//input[@name="Mobilephone"]'
      var role = '//td[contains(text(),"Role")]'
      var save_button = '//button[contains(text(),"Save")]'
      var selected_role = "//select[@name='RoleId']/option[@selected]"

      //Initialize form values
      var myArray = {firstname: "account", lastname: "new",username : "testnew",password:"testtest",company:"Company AAA",Role:"Admin",Email:"test@yopmail.com",Mobilephone:"1234567890"};

      //Fill form values
      browser.setValue(firstname,myArray.firstname)
      browser.setValue(lastname,myArray.lastname)
      browser.setValue(username,myArray.username)
      browser.setValue(password,myArray.password)
      browser.setValue(email,myArray.Email)
      browser.setValue(Mobilephone,myArray.Mobilephone)
      browser.click('//input[@type="radio"]//parent::label[normalize-space(.)="' + myArray.company + '"]')
      browser.click(role)
      browser.click('//option[contains(text(),"' + myArray.Role + '")]')

      //Submit form values
      browser.click(save_button)

      //Open the required record
      browser.click('//td[@class="smart-table-data-cell"and contains(text(),"' + myArray.firstname + '")]//following-sibling::td//button[@type="edit"]')
      
      //Expect the submitted values
      browser.expect.element(firstname).to.have.value.that.equals(myArray.firstname) 
      browser.expect.element(lastname).to.have.value.that.equals(myArray.lastname);
      browser.expect.element(username).to.have.value.that.equals(myArray.username);
      browser.expect.element(password).to.have.value.that.equals(myArray.password);
      browser.expect.element(email).to.have.value.that.equals(myArray.Email);
      browser.expect.element(selected_role).to.have.text.that.equals(myArray.Role);
   }

  };

              

      