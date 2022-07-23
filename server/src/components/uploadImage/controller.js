// import User from "../user/user.model"
import Image from "./image.model.js";

import cloudinary from "../../utils/cloudinary.js";


export const imageUpload = async(req, res) => {
  try {
  // const body = req.body

  const result = await cloudinary.uploader.upload(req.file.path);
  const newImage =  new Image({
  image : result.secure_url,
  cloudinary_id : result.public_id,
  })

  const savedImage = await newImage.save()
    return res
      .status(200)
      .json({
        success: true,
        message: "File uploded successfully",
        result: savedImage,
      });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// app.post('/add', upload.single('image'), (req, res, next) => {
//     const user = new User({
//       _id: new mongoose.Types.ObjectId(),
//       name: req.body.name,
//       imageURL: req.file.path
//     });
//     user.save().then(result => {
//       res.status(201).json({
//         message: "User registered successfully!",
//       })
//     })
//   })
