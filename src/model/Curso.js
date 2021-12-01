import { Schema, model} from 'mongoose';

const CursoSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lenguages: [{
       lenguage: String
    }],
    date: {
        type: Number,
        required: true
    }
    // profesorId:{
    //     type: Number,
    //     required: true
    // }
});

export default model ('Curso', CursoSchema);