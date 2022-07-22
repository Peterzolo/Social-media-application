// import User from "../user/user.model"

export const imageUpload = (req, res) => {
  try {
    const image = req.file.path;
    return res
      .status(200)
      .json({
        success: true,
        message: "File uploded successfully",
        result: image,
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
