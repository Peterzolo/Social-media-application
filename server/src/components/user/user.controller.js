import { editUserInfo, findAllUsers, findUserById } from "./user.dao.js";
import { createUser, signIn } from "./user.service.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cloudinary from "../../utils/cloudinary.js";
import ApiError from "../../error/ApiError.js";

export const register = async (req, res) => {
  const body = req.body;
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    //   app.get('/api/images', async (req, res) => {
    //     const { resources } = await cloudinary.search
    //         .expression('folder:cloudinary_react')
    //         .sort_by('public_id', 'desc')
    //         .max_results(30)
    //         .execute();

    //     const publicIds = resources.map((file) => file.public_id);
    //     res.send(publicIds);
    // });

    const userObject = {
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      password: body.password,
      cloudinary_id: result.public_id,
      profilePicture: result.secure_url,
      coverPicture: result.secure_url,
      about: body.about,
      livesIn: body.livesIn,
      worksAt: body.worksAt,
      relationship: body.relationship,
      country: body.country,
      followers: body.followers,
      following: body.following,
      isAdmin: body.isAdmin,
      status: body.status,
    };
    const user = await createUser(userObject);
    res.status(200).json({
      Success: true,
      Message: "User successfully registered",
      result: user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await signIn(email, password);
    res.status(200).json({
      Success: true,
      message: "User successfully logged in",
      result: user,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const fetchAllUsers = async (req, res) => {
  const users = await findAllUsers();
  if (users.length < 1) {
    res.status(402).send({ message: "Users not found" });
  } else {
    res.status(201).send({
      success: true,
      message: "User successfully fetched",
      result: users,
    });
  }
};
export const fetchUserDetails = async (req, res) => {
  const id = req.params.id;

  const findUser = await findUserById(id);

  if (!findUser) {
    res.status(402).send({ message: "User not found" });
  } else {
    res.status(201).send({
      success: true,
      message: "User successfully fetched",
      result: findUser,
    });
  }
};

export const updateUserInfo = async (req, res) => {
  const id = req.params.id;
  const userId = req.user;
  const updateObj = req.body;
  console.log("ID", id)
  console.log("USER", userId)

  const user = await findUserById(userId);
  
  if(id !== user._id || user.isAdmin !== true){
    throw ApiError.forbidden({message : "You are not authorized"})
  }

  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
  }
  const updatedUser = await editUserInfo(id, updateObj);
  console.log("UPDATED USER", updatedUser);

  res.send({
    success: true,
    message: "Profile successfully updated",
    result: updatedUser,
  });
};

// export const updateUserprofile = async (req, res) => {
//   const userId = req.userId;

//   const user = await findUserById(userId);
//   if (user) {
//     user.firstName = req.body.firstName || user.firstName;
//     user.lastName = req.body.lastName || user.lastName;
//     user.email = req.body.email || user.email;

//     if (req.body.password) {
//       user.password = bcrypt.hashSync(req.body.password, 8);
//     }
//     const updatedUser = await user.save();

//     const payload = {
//       _id: updatedUser._id,
//       email: updatedUser.email,
//       firstName: updatedUser.email,
//       lastName: updatedUser.lastName,
//       isAdmin: updatedUser.isAdmin,
//     };

//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     const savedUserProfile = {
//       _id: updatedUser._id,
//       firstName: updatedUser.firstName,
//       lastName: updatedUser.lastName,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       // isSeller: user.isSeller,
//       token,
//     };

//     res.send({
//       success: true,
//       message: "Profile successfully updated",
//       result: savedUserProfile,
//     });
//   }
// };
