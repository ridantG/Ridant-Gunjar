
 
const mongoose = require ("mongoose")
const { boolean, object } = require("zod")

mongoose.connect("mongodb+srv://ridantgunjar:ylMcAX0EbjHHYhaZ@ridant.yaxb9.mongodb.net/?retryWrites=true&w=majority&appName=ridant")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}