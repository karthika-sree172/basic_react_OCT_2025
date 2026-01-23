const express = require('express');
const router = express.Router();

const { createTask, getTask,getTaskById,updateTask,deleteTask} = require('../controllers/taskControllers');
const { protect } = require('../middleware/authmiddleware');

router.post('/newTask', protect, createTask);
router.get('/getTask', protect, getTask);
router.get('/getTask/:id', protect, getTaskById);
router.put('/updateTask/:id', protect, updateTask);
router.delete('/deleteTask/:id', protect, deleteTask);

module.exports = router;