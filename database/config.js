const mongoose = require('mongoose');

const dbConnection = async() => {
    
    try {

        await mongoose.connect(process.env.MONGODBCONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('MongoDB online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }


}


module.exports = {
    dbConnection
}