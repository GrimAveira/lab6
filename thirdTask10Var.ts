class NodeMyList<T> {
  constructor(value: T) {
    this.value = value
  }
}
class LinkedList<T> {
  public Head: NodeMyList<T> | null = null
  public Tail: NodeMyList<T> | null = null
  constructor() {}
  insertInBegin(data: T): void {
    let newNode: NodeMyList<T> = new NodeMyList(data)
    if (this.Head) {
      newNode.next = this.Head
      this.Head = newNode
    } else {
      this.Head = newNode
      this.Tail = newNode
    }
  }
  deleteFromBegin(): void {
    if (this.Head?.next) this.Head = this.Head?.next
    else this.Head = this.Tail = null
  }
  insertAtEnd(data: T): void {
    let newNode: NodeMyList<T> = new NodeMyList(data)
    if (this.Tail) {
      this.Tail.next = newNode
      this.Tail = newNode
    } else {
      this.Head = newNode
      this.Tail = newNode
    }
  }
  deleteFromEnd(): void {
    if (this.Head === this.Tail) this.Head = this.Tail = null
    else {
      if (this.Head?.next == this.Tail) this.Tail = this.Head
      else {
        let tmp = this.Head
        while (tmp?.next?.next) tmp = tmp.next
        this.Tail = tmp
      }
    }
  }
  getHead(): T | null {
    if (this.Head) return this.Head.value
    else return null
  }
  getTail(): T | null {
    if (this.Tail) return this.Tail.value
    else return null
  }
  isEmpty(): boolean {
    if (this.Head) return false
    else return true
  }
}
interface Stack<T> {
  push(value: T): void
  pop(): T | null
  get(): T | null
  isEmpty(): boolean
}
class Adapter<T> implements Stack<T> {
  public list: LinkedList<T>
  constructor() {
    this.list = new LinkedList()
  }
  pop(): T | null {
    let value = this.list.getTail()
    this.list.deleteFromEnd()
    return value
  }
  push(value: T): void {
    this.list.insertAtEnd(value)
  }
  get(): T | null {
    return this.list.getTail()
  }
  isEmpty(): boolean {
    return this.list.isEmpty()
  }
}
let list = new LinkedList()
console.log(list.isEmpty())
list.insertAtEnd(10)
list.insertInBegin(5)
console.log(list.isEmpty())
console.log(list.getHead())
console.log(list.getTail())
list.deleteFromEnd()
console.log(list.getHead())
console.log(list.getTail())
let stack = new Adapter()
console.log(stack.isEmpty())
stack.push(10)
stack.push(15)
stack.push(20)
console.log(stack.get())
console.log(stack.pop())
console.log(stack.get())
console.log(stack.isEmpty())
