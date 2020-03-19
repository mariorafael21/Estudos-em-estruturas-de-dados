function queue(){
    let itens = []

    this.enqueue = function(elemento){
        //adicioana um item
        itens.push(elemento)

    } 

    this.dequeue = function(){
        //remove um item
        return itens.shift()
    }

    this.front = function(){
        //retorna o primeiro item
        return itens[0]
    }

    this.isEmpty = function(){
        // verifica se esta vazio
        return itens.length === 0
    }

    this.size = function(){
        //retona o tamanho
        return itens.length
    }

    this.print = function(){
        //imprime os itens
        console.log(itens.toString())
    }
}

let fila = new queue()

fila.enqueue('rafael')
fila.enqueue('bob')
fila.enqueue('ana')
fila.enqueue('joao')
console.log(fila.size())
fila.print()

fila.dequeue()
console.log('o primeiro da fila é:' + fila.front())
console.log('tamanho da fila é: ' + fila.size())
console.log(fila.isEmpty())
fila.print()