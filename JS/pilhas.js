function Stack(){
    let itens = []
    
    this.push = function(elemento){
        // adiciona item a pilha
        itens.push(elemento)
    }

    this.pop = function(){
        //remove um item
        return itens.pop()
    }

    this.peek = function(){
        //retorna o elemento que esta no topo
        return itens[itens.length - 1]
    }

    this.isempty = function(){
        //informa se tem elementos na pilha
        return itens.length === 0
    }

    this.clear = function(){
        //limpa a pilha
        itens = []
    }

    this.size = function(){
        //informa o tamanho da pilha
        return itens.length
    }

    this.print = function(){
        //imprime a pilha
        console.log(itens.toString())
    }
}

let pilha = new Stack()

pilha.push(2)
pilha.push(3)
pilha.push(4)
pilha.push(7)
pilha.push(8)

console.log(pilha.size())
console.log(pilha.print())
pilha.pop()
pilha.pop()
pilha.pop()
console.log(pilha.size())
console.log(pilha.print())
pilha.clear()
console.log(pilha.print())
