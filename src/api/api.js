import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api"; // Replace with your deployed backend URL if hosted

// ----------------- INTRO -----------------
export const getIntro = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/intro`);
    return response.data;
  } catch (error) {
    console.error("Error fetching intro:", error);
    return null;
  }
};

// ----------------- EDUCATION -----------------
export const getEducation = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/education`);
    return response.data;
  } catch (error) {
    console.error("Error fetching education:", error);
    return null;
  }
};

// ----------------- INTERNSHIPS -----------------
export const getInternships = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/internships`);
    return response.data.internships || [];
  } catch (error) {
    console.error("Error fetching internships:", error);
    return [];
  }
};

// ----------------- PROJECTS -----------------
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data.projects || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// ----------------- CERTIFICATES -----------------
export const getCertificates = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/certificates`);
    return response.data.certificates || [];
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }
};
