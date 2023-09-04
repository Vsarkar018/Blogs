const User = require("../Models/UserModel");

module.exports = class UserRepository {
  constructor() {}
  async createAccount({ name, email, password }) {
    const user = await User.create({ name, email, password });
    return user;
  }

  async findAccount(email) {
    const user = await User.findOne({ email });
    return user ? user : false;
  }
};
