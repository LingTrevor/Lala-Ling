const axios = require('axios');
const { API_KEY } = require('../config');

module.exports = {
    async getTodos(req,res) {
        await axios.get(`https://uptime-todo-api.azurewebsites.net/api/todo`, {
            headers: API_KEY
        }).then(response => {
            console.log(response.data);
            const todos = response.data;
            res.status(200).send(todos);
        }).catch((err)=>{
            console.log(err);
        })
    }
}