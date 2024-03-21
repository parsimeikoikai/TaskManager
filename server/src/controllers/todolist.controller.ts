import { Request, Response } from "express";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, deadline, status } = req.body;
    
    console.log("deadline",deadline)

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        deadline,
        status,
      },
    });

    res.status(201).json(newTask);
  } catch (e) {
    console.error('Error creating task:', e);
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const getAllTasks = async (req: Request, res: Response) => {
  try {

    const allTasks = await prisma.task.findMany();
    res.status(200).json(allTasks);
    
  } catch (e) {
    console.error('Error retrieving tasks:', e);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};
export default {
  createTask,
  getAllTasks
};
