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
const Curso = require('../models/Curso')
const controller = {} // Objeto vazio

// Métodos novo(), implementando a operação CREATE
controller.novo = async (req, res) => {

try{
    // Envia os dados dentro de req.body para o BD para criação
    await Curso.create(req.body)
    res.status(201).end()
  }
  catch(erro){
      Console.error(erro)
      // HTTP 500: Internal Server Error
      res.status(500).send(erro)
  }
}

// Método listar(), implementsndo a operação RETRIEVE (all)
controller.listar = async (req, res) => {
    try{
    // find() sem parâmetros é trazer tudo
    let dados = await Curso.find()
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
    let obj = await Curso.findById(id)


    // Se o objeto vier preenchido (achou), então o retornamos
    if(obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP  404: Not found
    else res.status(404).end()
}
module.exports = controller