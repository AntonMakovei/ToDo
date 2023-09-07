const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const port = 3001

const todoList = [
    {id: 1, name: "initial first task",},
    {id: 2, name: "initial second task", },
    {id: 3, name: "initial third task",},
]

app.use(bodyParser.json());

app.use((req, res,next) => {
    res.header('Content-Type', 'application/json')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.get('/tasks', (req, res) => {
    res.json(todoList)
})

app.post('/tasks', (req, res, b) => {
    const newTask = {
        id: todoList.length + 1,
        name: req.body.name
    }
    todoList.push(newTask)
    res.json({
        isCreated: !!newTask
    })
})

app.listen(port, () => {
    console.log("server runned, to open follow")
})
