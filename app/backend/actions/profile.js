"user server";
import Profile from "../models/profile";
import dbConnect from "@/app/backend/db/dbConnect";

async function createProfile(data) {
  await dbConnect();
  const profile = new Profile({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    address: data.address,
  });
  await profile.save();

  console.log(profile);
}
export default createProfile;
