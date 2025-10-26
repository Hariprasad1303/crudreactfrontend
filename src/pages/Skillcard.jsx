import React, { useState, useEffect } from "react";
import { getSkills, addSkill, updateSkill, deleteSkill } from "../services/skillService";
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

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState({ id: null, name: "", level: 0 });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const data = await getSkills();
    setSkills(data);
  };

  const handleOpen = (skill = { id: null, name: "", level: 0 }) => {
    setCurrentSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentSkill({ id: null, name: "", level: 0 });
    setOpen(false);
  };

  const handleSave = async () => {
    if (!currentSkill.name || currentSkill.level < 0 || currentSkill.level > 100) return;

    if (currentSkill.id) {
      await updateSkill(currentSkill.id, currentSkill);
    } else {
      await addSkill(currentSkill);
    }
    handleClose();
    fetchSkills();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      await deleteSkill(id);
      fetchSkills();
    }
  };

  return (
    <Box className="p-6">
      {/* Header */}
      <Box className="flex justify-between items-center mb-8">
        <Typography variant="h4" fontWeight="bold">
          My Skills
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpen()}>
          Add Skill
        </Button>
      </Box>

      {/* Skill Cards */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        flexWrap="wrap"
      >
        {skills.map((skill) => (
          <Card
            key={skill.id}
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
                {skill.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Skill Level
              </Typography>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{ mt: 1, height: 10, borderRadius: 5 }}
              />
              <Typography variant="body2" color="text.secondary" mt={1}>
                {skill.level}%
              </Typography>
            </CardContent>
            <Box className="flex justify-end gap-2 p-2 pt-0">
              <IconButton color="primary" onClick={() => handleOpen(skill)}>
                <Edit />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(skill.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Stack>

      {/* Add/Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{currentSkill.id ? "Edit Skill" : "Add Skill"}</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <TextField
            label="Skill Name"
            value={currentSkill.name}
            onChange={(e) =>
              setCurrentSkill({ ...currentSkill, name: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Skill Level (0-100)"
            type="number"
            value={currentSkill.level}
            onChange={(e) =>
              setCurrentSkill({ ...currentSkill, level: Number(e.target.value) })
            }
            fullWidth
            inputProps={{ min: 0, max: 100 }}
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

export default Skills;
