import User from './user.model.js';

export const findUserById = async (id) => {
  const user = await User.findById(id).select('-password');   
  return user;
};

export const findUserByEmail = async (email) => {
  const user = await User.findOne(email);    
  return user;
};

export const findAllUsers = async () => {    
  const users = await User.find({ status: 'active' }).select('-password');
  return users;
};

export const saveUserPayload = async (args) => {
  const payload = await User.create(args);
  return payload;
};
