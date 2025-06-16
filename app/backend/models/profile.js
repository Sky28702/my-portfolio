import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  image: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  phoneNumber: { type: Number, min: 10, max: 12 },
  address: { type: String, required: true },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default Profile;
