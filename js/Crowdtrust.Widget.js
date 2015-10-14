/**
 * Created by cerberus on 10/7/2015.
 */

function BackgroundCheck (firstname,middleInitial, lastName, dob, ssn, username, appId, email){
    this.firstName = firstname;
    this.middleInitial = middleInitial;
    this.lastName = lastName;
    this.dob = dob;
    this.ssn = ssn;
    this.status = "";
    this.username = username;
    this.appId = appId;
    this.email = email;
}

BackgroundCheck.prototype.validate = function(){
    console.log("executed validate.");
}

var backgroundCheckModule = (function () {
    var backgroundCheck = {};
    backgroundCheck.firstName = "TIm";
    var firstName = "bob";

    return {

        getFirstName: function () {
            console.log("why is this still undefined.", firstName);
            return firstName;
        },
        setFirstName: function(firstName){
            backgroundCheck.firstName = firstName;
        }

    };

})();
