const mongoose = require('mongoose')

const esquema = mongoose.Schema({
<<<<<<< HEAD
    nome:{ type: String, required: true },
    capacidade: { type: Number, required: true, default: 15},
    recursos_didaticos: { type: String}
})
//PARÂMETROS DO mongoose.model()
// 1º -> Nome do model(inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome COLEÇÃO no BD que irá receber os objetos que serão criados a partir 
//   deste model (inicial minúscula,  plural do nomr do model)
module.exports = mongoose.model('SalaAula',esquema, 'salas_aula')
=======
    nome: { type: String, required: true },
    capacidade: { type: Number, required: true, default: 15, min: 5, max: 25 },
    recursos_didaticos: { type: String }
})

// PARÂMETROS DO mongoose.model()
// 1º -> Nome do model (inicial maiúscula, igual ao nome do arquivo)
// 2º -> a constante esquema, montada anteriormente
// 3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão
//       criados a partir deste model (inicial minúscula, plural do
//       nome do model)
module.exports = mongoose.model('SalaAula', esquema, 'salas_aula')
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
