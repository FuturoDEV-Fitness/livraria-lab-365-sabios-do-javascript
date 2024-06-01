const readline = require('readline/promises');
const Autor = require('./classes/Autor');
const AutorCrud = require('./classes/AutorCrud');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function run() {

    const resposta = await rl.question('Escolha uma ação (criar, deletar, alterar, consultar): ');

    switch (resposta) {
        case 'criar':

            const nome = await rl.question("Qual é o nome do autor ?")
            const generoLiterario = await rl.question("Qual é o genero literario ?")

            const autor = new Autor(nome)
            autor.setGeneroLiterario = generoLiterario

            const crud = new AutorCrud() 
            crud.criar(autor)

            rl.close();
            break;
        case 'deletar': {
            /* Coloque sua resposta aqui */
            rl.close();
            break;
        }
        case 'consultar': {
             const palavra = await rl.question("Qual é o nome do livro ?")
             
             const crud = new AutorCrud() 
             crud.consultar(palavra)


            rl.close();
            break;
        }
        default:
            console.log("Ação não reconhecida.");
            rl.close();
    }

}

run();
