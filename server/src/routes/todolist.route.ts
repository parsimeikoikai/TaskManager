import express from "express";
import TodolistController from "../controllers/todolist.controller";

const router = express.Router();

router.post("/createTask", TodolistController.createTask);
router.get("/getall", TodolistController.getAllTasks);


export default router;