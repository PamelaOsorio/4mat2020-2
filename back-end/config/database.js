const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
<<<<<<< HEAD
    }) 
=======
    })
>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77

    mongoose.connection.on('connected', () =>
        console.log('==> Mongoose! conectado com sucesso ao servidor')
    )

<<<<<<< HEAD
    // Capturamos um sinal de encerramento (SIGINT), Ctrl + C
    process.on('SIGINT', () =>
     mongoose.connection.close(() => {
          console.log('==> Mongoose! Desconectado pelo término da aplicação');
          // 0 indica a finalização ocorreu sem erros
          process.exit(0);

     })
    )

    mongoose.connection.on('disconnected', () =>
    console.log('==> Mongoose! desconectado ao servidor')
    )
=======
    // Capturamos um sinal de encerramento (SIGINT), Ctrl+C
    process.on('SIGINT', () => 
        mongoose.connection.close(() => {
            console.log('==> Mongoose! Desconectado pelo término da aplicação');
            // 0 indica que a finalização ocorreu sem erros 
            process.exit(0);
        })
    )

    mongoose.connection.on('disconnected', () =>
        console.log('==> Mongoose! desconectado do servidor')
    )

>>>>>>> 208c6969abf916ce1d09866c976269aba9419c77
}