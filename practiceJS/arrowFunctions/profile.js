const profile = {
  name: 'Alex',
  
  // Using the function keyword
  getName: function() {
    return this.name;
  },
};

console.log(profile.getName()); // Output: Alex