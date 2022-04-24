const Task = require('../models/tasks')

const getAllTasks = async(req,res) =>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).send(error.message)
    }
} 
const createTask = async(req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task)
    } catch (error) {
        res.status(500).send(error.message)
    }

} 
const getTask = async(req,res) =>{
    try {
        const task = await Task.findOne({_id : req.params.id})
        if (!task) {
            return res.status(404).send("There's no task with this ID")
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).send(error.message)
    }
} 
const updateTask = async(req,res) =>{
    try {
        const task = await Task.findOneAndUpdate({_id:req.params.id}, req.body, {
            new:true,
            runValidators:true
        })
        res.status(201).json({task})

    } catch (error) {
        res.status(500).send(error.message)
    }

} 
const deleteTask = async(req,res) =>{
    try {
        const task = await Task.findOneAndDelete({_id : req.params.id})
        if (!task) {
            return res.status(404).send("There's no task with this ID")
        }
        res.status(200).json("Deleted Succsfully")
    } catch (error) {
        res.status(500).send(error.message)
    }
} 


module.exports = {getAllTasks , createTask , getTask , updateTask , deleteTask}
//