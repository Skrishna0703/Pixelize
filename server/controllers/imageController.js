import axios from "axios";
import FormData from "form-data";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API, // Ensure this is set in your .env file
        },
        responseType: "arraybuffer", // Handle binary data for image
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    res.json({
      success: true,
      message: "Image Generated",
      resultImage,
    });
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.json({
      success: false,
      message: "ERROR",
      error: error.response ? error.response.data : error.message, // Provide more details from API error if available
    });
  }
};

export default generateImage;
