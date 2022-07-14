import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: { type: String },
    coverPicture: { type: String },
    about: { type: String },
    livesIn: { type: String },
    worksAt: { type: String },
    relationship: { type: String },
    country: { type: String },
    followers: [],
    following: [],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const hash = await bcrypt.hashSync(this.password);
    this.password = hash;

    return next();
  } catch (e) {
    return next(e);
  }
});

const User = mongoose.model("user", UserSchema);
export default User;
