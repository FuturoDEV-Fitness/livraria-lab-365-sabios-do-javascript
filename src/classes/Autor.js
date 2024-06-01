/* codigo, nome, genero_literario */
const crypto = require("crypto");

class Autor {

    #codigo = ""
    #nome = ""
    #generoLiterario = ""

    constructor(nome){
        this.#codigo = crypto.randomUUID()
        this.#nome = nome
    }

    get getCodigo() {
        return this.#codigo
    }

    get getNome() {
        return this.#nome
    }
    
    set setNome(nome) {
        this.#nome = nome
    }

    get getGeneroLiterario() {
        return this.#generoLiterario
    }
    
    set setGeneroLiterario(generoLiterario) {
        this.#generoLiterario = generoLiterario
    }
}


module.exports = Autor