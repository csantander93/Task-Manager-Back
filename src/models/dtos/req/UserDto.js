
class UserDTO {
    constructor(user) {
      this.id = user._id;
      this.name = user.name;
      this.email = user.email;
      this.token = user.token || null; 
    }
  }
  
  module.exports = UserDTO;
  