const mongoose = require('mongoose')

const esquema = mongoose.Schema({
<<<<<<< HEAD
    nome:{
        type: String,
        required: true // Atributo obrigatório
    },
    carga_horaria:{
=======
    nome: {
        type: String,
        required: true  // Atributo obrigatório
    },
    carga_horaria: {
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
        type: Number,
        required: true,
        min: 4,
        max: 240,
<<<<<<< HEAD
        default: 100 // valor padrão
    },
    nivel:{
        type: String,
        required: true,
        // Conjunto dos valores válidos
        enum:['Básico','Intermediário','Avançado']
    },
    valor_curso:{
=======
        default: 100    // Valor padrão
    },
    nivel: {
        type: String,
        required: true,
        // Conjunto dos valores válidos
        enum: ['Básico', 'Intermediário', 'Avançado']
    },
    valor_curso: {
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
        type: Number,
        required: true,
        min: 50
    }
})
<<<<<<< HEAD
//PARÂMETROS DO mongoose.model()
// 1º -> Nome do model(inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome COLEÇÃO no BD que irá receber os objetos que serão criados a partir 
//   deste model (inicial minúscula,  plural do nomr do model)
module.exports = mongoose.model('Curso',esquema, 'cursos')
=======

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('Curso', esquema, 'cursos')
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
