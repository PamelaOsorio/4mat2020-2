const mongoose = require('mongoose')

const esquema = mongoose.Schema({
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