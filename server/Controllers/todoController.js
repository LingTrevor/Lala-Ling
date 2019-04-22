const axios = require('axios');
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
    }
}