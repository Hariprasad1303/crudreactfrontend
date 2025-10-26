import axios from "axios";

// Base URL for Skills
const API_URL = "https://crudreact-cq0a.onrender.com/skills";

/**
 * Get all skills
 */
export const getSkills = async () => {
  try {
    const response = await axios.get(API_URL);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};

/**
 * Get a single skill by ID
 * @param {number} id
 */
export const getSkillById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching skill ${id}:`, error);
    return null;
  }
};

/**
 * Add a new skill
 * @param {Object} skill
 */
export const addSkill = async (skill) => {
  try {
    const response = await axios.post(API_URL, skill);
    return response.data;
  } catch (error) {
    console.error("Error adding skill:", error);
    return null;
  }
};

/**
 * Update an existing skill
 * @param {number} id
 * @param {Object} skill
 */
export const updateSkill = async (id, skill) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, skill);
    return response.data;
  } catch (error) {
    console.error(`Error updating skill ${id}:`, error);
    return null;
  }
};

/**
 * Delete a skill
 * @param {number} id
 */
export const deleteSkill = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting skill ${id}:`, error);
    return null;
  }
};
