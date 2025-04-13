const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
  
    getUserDetails: function () {
      // Accesses and potentially logs user details.
      // 'this' refers to the 'user' object.
    },
  };
  
  // Example usage (commented out):
  // console.log(user.username); // Accessing a property.
  // console.log(user.getUserDetails()); // Calling a method.
  // console.log(this); // 'this' in the global context.
  
  function User(userName, loginCount, isLoggedIn) {
    // Constructor function for creating User objects.
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
      console.log(`Welcome ${this.userName}`); // 'this' refers to the User object.
    };
  
    // 'return this;' is redundant here, 'new' implicitly returns the object.
  }
  
  const userOne = new User("harsh", 12, true); // Creates a new User object.
  const userTwo = new User("ChaiAurCode", 11, false); // Creates another independent User object.
  
  console.log(userOne.constructor); // Outputs the constructor function (User).
  
  // Without 'new', subsequent calls to User would overwrite previous ones.
  // 'new' ensures unique object instances are created.
  // 'new' automatically:
  //   1. Creates an empty object.
  //   2. Sets 'this' to the new object.
  //   3. Returns the new object.
  //   4. Sets the object's constructor property.