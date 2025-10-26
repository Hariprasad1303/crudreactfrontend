import axios from "axios";

// Base URL for JSON Server
const API_URL = "https://crudreact-cq0a.onrender.com";

/**
 * Get all projects
 */
export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

/**
 * Get a single project by ID
 * @param {number} id
 */
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
};

/**
 * Add a new project
 * @param {Object} project
 */
export const addProject = async (project) => {
  try {
    const response = await axios.post(API_URL, project);
    return response.data;
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};

/**
 * Update an existing project
 * @param {number} id
 * @param {Object} project
 */
export const updateProject = async (id, project) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, project);
    return response.data;
  } catch (error) {
    console.error(`Error updating project ${id}:`, error);
    return null;
  }
};

/**
 * Delete a project
 * @param {number} id
 */
export const deleteProject = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting project ${id}:`, error);
    return null;
  }
};
