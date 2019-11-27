const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let mcq= new Schema({
    question: {
        type: String
    },
    answer_a: {
        type:String
    },
    answer_b:{
        type:String
    },
    answer_c:{
        type:String
    },
    answer_d: {
        type:String
    },
    correct_answer: {
        type:String
    }


    
});
module.exports = mongoose.model('mcq', mcq);
