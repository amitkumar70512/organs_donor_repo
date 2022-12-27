// mongo db configs using cllg e-id
const mongoose = require('mongoose')

const url = `mongodb+srv://amit:amit@organsdonor.cd5433k.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


const donateSchema = new mongoose.Schema({
    _id:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : false
    },
    city :{
        type : String,
        required : false
    },
})

const collection = new mongoose.model("Donors",donateSchema)

module.exports = collection