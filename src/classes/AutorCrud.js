const fs = require('fs')

class AutorCrud {

    constructor() {
        this.filePath = './src/files/autores.json';
    }

    deletar(codigo){
      // ler o conteudo 
      //  usar filter para remover o elemento
      // salva de novo no arquivo o array filtrado
    }

    consultar(palavra){
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        const autorEncontrado = conteudoAtual.find(autor => autor.nome === palavra )

        if(autorEncontrado) {
            console.log(autorEncontrado)
        } else {
            console.log("Autor não encontrado")
        }
    }

    criar(autor) {        
         /* ler tudo que tem dentro do arquivo json */
        const conteudoAtual = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'))

        /* Insere dentro do array recuperado o objeto de autor */
        conteudoAtual.push({
            codigo: autor.getCodigo,
            nome: autor.getNome,
            generoLiterario: autor.getGeneroLiterario
        })

        /* Escreve no arquivo */
        fs.writeFileSync(
            this.filePath,
            JSON.stringify(conteudoAtual, null, 2),
            'utf-8'
        )
    }

}

module.exports = AutorCrud
