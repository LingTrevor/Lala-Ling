const axios = require('axios');
const uuidv4 = require('uuid/v4');
const { API_KEY, API_LINK } = require('../config');

module.exports = {
    async getTodos(req, res) {
        await axios.get(`${API_LINK}`, {
            headers: API_KEY
        }).then(response => {
            // console.log(response.data);
            const todos = response.data;
            res.status(200).send(todos);
        }).catch((err) => console.log(err));
    },
    async getTodo(req, res) {
        const id = req.params.id;
        await axios.get(`${API_LINK}/${id}`, {
            headers: API_KEY
        }).then(response => {
            // console.log(response.data);
            const todo = response.data;
            res.status(200).send(todo);
        }).catch((err) => console.log(err));
    },
    async postTodo(req, res) {
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

        await axios.post(`${API_LINK}`, newTodo, {
            headers: API_KEY,
            'Content-Type': 'application/json'
        }).then(response => {
            // console.log(response.data);
            const todo = response.data;
            res.status(200).send(todo);
        }).catch((err) => console.log(err));
    },
    async deleteTodo(req, res) {
        const id = req.params.id;
        await axios.delete(`${API_LINK}/${id}`, {
            headers: API_KEY
        }).then(response => {
            console.log(response.data);
            res.send({ success: 'Todo Deleted!' });
        }).catch((err) => console.log(err));
    },
    async updateTodo(req, res) {
        const todo = req.body.updatedTodo;
        const id = todo.id;
        const activity = todo.title;
        const note = todo.note;
        const due = todo.dueAt;
        const createdAt = todo.createdAt;

        const updatedTodo = {
            id: id,
            activity: activity,
            note: note,
            createdAt: createdAt,
            dueAt: due
        };
        await axios.put(`${API_LINK}`, updatedTodo, {
            headers: API_KEY,
            'Content-Type': 'application/json'
        }).then(response => {
            const todo = response.data;
            // console.log(response.data);
            res.status(200).send(todo);
        }).catch((err) => console.log(err));
    }
}