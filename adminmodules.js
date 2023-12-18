const mongoose = require("mongoose");
const schema = mongoose.Schema;
const admin =new schema({
    username :{
        type :String ,
        required :true,
    },
    password:{
        type : String,
        required : true,
    },
},
{
    timestamps : true
}
);

const user = new schema({

})
module.exports = mongoose.model("admins" , admin)
