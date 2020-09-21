/*

 QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS

 1) CREATE (criação ou inserção)
     Cria um novo objeto dentro da coleção

2) RETRIEVE (recuperação ou listragem)
    Permite recuperar os dados a partir do BD

3) UPDATE (atualizaçaõ)
     Altera  os dados de um objeto que JÁ EXISTE no BD

4)DELETE (exclusão)
     Elimina um objeto do BD 

     (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

 VERBOS HTTP ASSOCIADOS ÁS OPERAÇÕES CRUD

 Verbo  Operação
 POST   Create 
 GET    Retrieve
 PUT    Update
 DELETE Delete
*/
// Importar o Model para dentro do controller
const SalaAula = require('../models/SalaAula')
const controller = {} // Objeto vazio

// Métodos novo(), implementando a operação CREATE
controller.novo = async (req, res) => {

try{
    // Envia os dados dentro de req.body para o BD para criação
    await SalaAula.create(req.body)
    res.status(201).end()
  }
  catch(erro){
      console.error(erro)
      // HTTP 500: Internal Server Error
      res.status(500).send(erro)
  }
}

// Método listar(), implementsndo a operação RETRIEVE (all)
controller.listar = async (req, res) => {
    try{
    // find() sem parâmetros é trazer tudo
    let dados = await SalaAula.find()
    res.send(dados)
    }
    catch(erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

// Método obterUm() , implementando a operação RETRIEVE (one)
controller.obterUm = async (req, res) => {
    const id = req.params.id // Capturando o parâmetro id
    let obj = await SalaAula.findById(id)


    // Se o objeto vier preenchido (achou), então o retornamos
    if(obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP  404: Not found
    else res.status(404).end()
}
 // Método atualizar(), implementação a operação UPDATE
controller.atualizar = async (req, res) => {
try{
   
 // Isolar o _id do objeto para fins de busca
 const id = req.body._id 
 // Busca o objeto pelo id e , encontrando-o, substitui o conteúdo por req.body
  let obj = await SalaAula.findByIdAndUpdate(id, req.body)
   
   // Se encontrou e retornamos e substituiu, retornamos HTTP 204: No content
    if(obj) res.status(204).end()
    // Caso contrario, retorna HTTP 404: Not found
    else res.status(404).end()
  } 
  catch(erro){
    console.error(erro)
    res.status(500).end()
  }

}
 // Método excluir(), implementação a operação DELETE
controller.excluir = async (req, res) => {
try{
    const id = req.body._id
   let obj =  await SalaAula.findByIdAndDelete(id)
    
   // Encontrou e excluiu
   if(obj) res.status(204).end()
  // Objeto não foi encontrado para exclusão
   else res.status(404).end()
  }
  catch(erro){
      console.error(erro)
      res.status(500).send(erro)
  }
}
module.exports = controller