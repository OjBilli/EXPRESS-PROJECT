const path = require('path');

function getMessages (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'ski.jpeg'));
    
}


function postMessages  (req, res) {
    console.log('Updating messages.....');
}

module.exports = {
    getMessages,
    postMessages,
};