import React, { useState, useEffect } from "react";
import { getProjects, addProject, updateProject, deleteProject } from "../services/projectService";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({ id: null, name: "", description: "" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleOpen = (project = { id: null, name: "", description: "" }) => {
    setCurrentProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentProject({ id: null, name: "", description: "" });
    setOpen(false);
  };

  const handleSave = async () => {
    if (!currentProject.name || !currentProject.description) return;

    if (currentProject.id) {
      await updateProject(currentProject.id, currentProject);
    } else {
      await addProject(currentProject);
    }
    handleClose();
    fetchProjects();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
      fetchProjects();
    }
  };

  return (
    <Box className="p-6">
      {/* Header */}
      <Box className="flex justify-between items-center mb-8">
        <Typography variant="h4" fontWeight="bold">
          My Projects
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add Project
        </Button>
      </Box>

      {/* Project Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        flexWrap="wrap"
      >
        {projects.map((project) => (
          <Card
            key={project.id}
            sx={{
              flex: "1 1 300px",
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                {project.description}
              </Typography>
            </CardContent>
            <Box className="flex justify-end gap-2 p-2 pt-0">
              <IconButton color="primary" onClick={() => handleOpen(project)}>
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(project.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Stack>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{currentProject.id ? "Edit Project" : "Add Project"}</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Project Name"
            value={currentProject.name}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, name: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Project Description"
            value={currentProject.description}
            onChange={(e) =>
              setCurrentProject({ ...currentProject, description: e.target.value })
            }
            multiline
            rows={4}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Projects;
