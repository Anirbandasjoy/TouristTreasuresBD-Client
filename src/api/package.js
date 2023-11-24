import { axiosSecure } from ".";

export const getAllPackage = async () => {
  try {
    const { data } = await axiosSecure.get("/packages");
    return data;
  } catch (error) {
    console.log(error);
  }
};
