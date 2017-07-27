const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.update_options = {new: true, runValidators: true}

module.exports = Todo