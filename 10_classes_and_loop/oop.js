const user = {
    username : "Nitin",
    loginCount : 8,
    signedIn : true,

    geuUserDetails : function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.geuUserDetails());
// console.log(this);

// ************ constructor function   **********

function User(username,loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;
}

const user1 = new User("Nitin",12,true)
const user2 = new User("akash",11,false)
console.log(user1);
console.log(user2);