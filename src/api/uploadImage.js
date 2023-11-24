import axios from "axios";

const uploadImage = async (image) => {
  const apiKey = import.meta.env.VITE_IMAGEBB_API_KEY;
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data.display_url;
};

export default uploadImage;
