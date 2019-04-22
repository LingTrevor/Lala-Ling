const axios = require('axios');
const uuidv4 = require('uuid/v4');
const { API_KEY } = require('../config');

module.exports = {
    async getTodos(req,res) {
        await axios.get(`https://uptime-todo-api.azurewebsites.net/api/todo`, {
            headers: API_KEY
        }).then(response => {
            const todos = response.data;
            res.status(200).send(todos);
        }).catch((err)=> console.log(err));
    },
    async getTodo(req,res){
        const id = req.params.id;
        await axios.get(`https://uptime-todo-api.azurewebsites.net/api/todo/${id}`,{
            headers: API_KEY
        }).then(response=>{
            const todo = response.data;
            res.status(200).send(todo);
        }).catch((err)=> console.log(err));
    },
    async postTodo(req,res){
        const todo = req.body.todo;
        const activity = todo.title;
        const note = todo.note;
        const due = todo.dueAt;
        const createdAt = new Date().toISOString();
        
        const newTodo = {
            id: uuidv4(),
            activity: activity,
            note: note,
            createdAt: createdAt,
            dueAt: due
        };

        await axios.post(`https://uptime-todo-api.azurewebsites.net/api/todo`,newTodo,{
        headers: API_KEY,
        'Content-Type': 'application/json'
    }).then(response=>{
        console.log(response.data);
        const todo = response.data;
        res.status(200).send(todo);
    }).catch((err)=> console.log(err));
    }
}