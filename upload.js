const IncomingForm = require('formidable').IncomingForm;
const pathForUploads = 'C:\\Front-end\\Projects\\starr-app\\tmp\\';

module.exports = function upload(req, res) {

    let form = new IncomingForm({
        // uploadDir: pathForUploads,
        keepExtensions: true
    });


    form.on('fileBegin', function (name, file) {
        console.log('pathForUploads: ', pathForUploads);
        console.log('uploading file: ', file.name);
        file.path = pathForUploads + file.name;
        console.log('current file.path: ', file.path);
    });

    form.on('file', (field, name, file) => {
            // Do something with the file
            // e.g. save it to the database
            // you can access it using file.path


        }
    );

    form.on('end', () => {
        res.json();
    });

    form.parse(req);

};


