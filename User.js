const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// defining Schema

let userSchema = new Schema({

        _id: Schema.Types.ObjectId,
        avatar: {
            type: Array
        }
    },
    {
        collection: 'users'
    }
);


module.exports = mongoose.model('User', userSchema);
