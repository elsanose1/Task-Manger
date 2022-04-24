const mongoose = require('mongoose')



const connecDb = (url)=>{
return mongoose
.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
}
module.exports = connecDb