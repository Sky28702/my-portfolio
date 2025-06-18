import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const profileSchema = new mongoose.Schema({
  profilePicture: { type: String, required: false, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  phoneNumber: { type: Number },
  address: { type: String, required: true },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default Profile;
