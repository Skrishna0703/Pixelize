import { createContext, useState, useEffect } from "react";
import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const AppContext = createContext();

const AppProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle setting the token in localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      if (data.success) {
        return data.resultImage;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // Handle token expiration or unauthorized access
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please log in again.");
        setToken(null); // Clear token
        
      } else {
        toast.error(error.message || "Something went wrong!");
      }
    }
  };

  const value = {
    backendUrl,
    token,
    setToken,

    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
