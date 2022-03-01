const mongoose = require ("mongoose");


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://paragpatil187:parag21@cluster0.avcxz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}