import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

// To store user details in database when they log in for first time and return the user

export const checkUser = async () => {
  const user = await currentUser(); //  Getting user details from clerk

  if (!user) {
    // if user does not exist
    return null;
  }
  // Check in our db
  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${user.firstName} ${user.lastName}`;
    // Creating new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.log("Error in checkUser " + error.message);
  }
};
