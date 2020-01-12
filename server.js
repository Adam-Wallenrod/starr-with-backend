const express = require('express');
const upload = require('./upload');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./backend/database/db');




// MongoDB setup
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database successfully connected')
    },
    error => {
        console.log('Database could not be connected: ' + error)
    }
)


const server = express();


// setting CORS222

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

server.use(cors(corsOptions));


// registering upload route\
server.post('/upload', upload);



server.listen(8000, () => {
   console.log('Server started!');
});

/** Tutorial:
 * https://malcoded.com/posts/angular-file-upload-component-with-express/
 *
 */
