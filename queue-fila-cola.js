//Fila - Cola (Queue)

/*
- Caracterizada por ser una secuencia de elementos en la que la operación de inserción (enqueue) se realiza por un extremos y la operción de extracción (dequeue) por el otro.
- FIFO (First In First Out)

- [] constructor
- [] enqueue
- [] dequeue
- [] getSize
- [] isEmpty
- [] peek
- [] print
*/

//constructor
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }

  //inserción
  enqueue(data) {
    this.items[this.end] = data;
    this.end++;
  }

  //extracción
  dequeue() {
    if (this.front === this.end) return null;

    const data = this.items[this.front];

    //Eliminamos elemento de la fila
    delete this.items[this.front];

    this.front++;

    if (this.front === this.end) {
      this.front = 0;
      this.end = 0;
    }

    return data;
  }

  //obtener tamaño de la fila
  getSize() {
    return this.end - this.front;
  }

  //ver si la fila está vacía
  isEmpty() {
    return this.getSize() === 0;
  }

  //visualizar el primer elemento de la fila sin extraerlo
  peek() {
    if (this.getSize() === 0) return null;
    return this.items[this.front];
  }

  //mostrar valores que tenemos en la fila
  print() {
    if (this.getSize() === 0) return null;
    //return Object.values(this.items); //retorna los valores dentro de un arreglo
    let values = "";

    for (let prop in this.items) {
      values += prop + " "; //Ojo todos los valores se mostraran como un solo string
    }

    return values;
  }
}

//creamos fila
const queue = new Queue();

//insertamos elementos en la fila
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

//obtenemos el tamaño de la fila
console.log(queue.getSize()); //3

//extraemos elementos de la fila
console.log(queue.dequeue()); //1
console.log(queue.dequeue()); //2
console.log(queue.dequeue()); //3

//obtenemos tamaño de la fila
console.log(queue.getSize()); //0
//saber si la fila está vacia
console.log(queue.isEmpty()); //true

queue.enqueue(5);
console.log(queue.dequeue()); //5

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

//visualizamos el primer elemento de la fila
console.log(queue.peek()); //1

console.log(queue.print()); //0 1 2 3
console.log(queue);
