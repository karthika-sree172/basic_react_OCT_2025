
const Task = require('../models/Task');

// CREATE TASK
exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            UserId: req.user.id   // ✅ JWT la irundhu eduthom
        });

        res.status(201).json({
            message: 'Task created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET ALL TASKS OF LOGGED-IN USER
exports.getTask = async (req, res) => {
    try {
        const tasks = await Task.find({ UserId: req.user.id }); // ✅ correct field name
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//GET TASK BY ID
exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            UserId: req.user.id
        });
        res.json(task)
    } catch (error) {
        res.json(error)
    }
};

//update task

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, UserId: req.user.id },
            {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status
            },
            { new: true }
        );
        if(!task){
            res.json({ message: 'Task not found' });
        }
        res.json(task);
    }
    catch (error) {
        res.json(error);
    }
}
//DELETE TASK

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            UserId: req.user.id
        });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    }
    catch (error) {
        res.json(error);
    }       
}