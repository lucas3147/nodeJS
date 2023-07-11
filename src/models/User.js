const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const modelsSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';

if (mongoose.connection && mongoose.connection.models[modelName]) {
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelsSchema)
}

/*

    Aqui temos a verificação se o model já existe na base de dados:

    Se existir, apenas exportamos ele.

    Se não, criamos esse model do zero.

*/