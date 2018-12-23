const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c1ff37fc5434e5320b07017'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c1ff37fc5434e5320b07017').then((todo) => {
  console.log(todo);
});
