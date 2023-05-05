interface Expression {
  evaluate(): number
}
class Num implements Expression {
  private value_: number
  constructor(value: number) {
    this.value_ = value
  }
  value(): number {
    return this.value_
  }
  evaluate(): number {
    return this.value_
  }
}
enum Enum {
  PLUS = '+',
  MINUS = '-',
  DIV = '/',
  MUL = '*',
}
class BinaryOperation implements Expression {
  private left_: Expression
  private right_: Expression
  private op_: string
  constructor(left: Expression, op: string, right: Expression) {
    this.left_ = left
    this.op_ = op
    this.right_ = right
  }
  left(): Expression {
    return this.left_
  }
  right(): Expression {
    return this.right_
  }
  operation(): string {
    return this.op_
  }
  evaluate(): number {
    let left = this.left_.evaluate()
    let right = this.right_.evaluate()
    switch (this.op_) {
      case Enum.PLUS:
        return left + right
      case Enum.MINUS:
        return left - right
      case Enum.DIV:
        return left / right
      case Enum.MUL:
        return left * right
    }
    return 0
  }
}
class FunctionCall implements Expression {
  private name_: string
  private arg_: Expression
  constructor(name: string, arg: Expression) {
    this.arg_ = arg
    this.name_ = name
  }
  name(): string {
    return this.name_
  }
  arg(): Expression {
    return this.arg_
  }
  evaluate(): number {
    if (this.name_ == 'sqrt') return Math.sqrt(this.arg_.evaluate())
    else return Math.abs(this.arg_.evaluate())
  }
}
class Variable implements Expression {
  private name_: string
  constructor(name: string) {
    this.name_ = name
  }
  name(): string {
    return this.name_
  }
  evaluate(): number {
    return 0.0
  }
}
let e1: Expression = new Num(1.234)
let e2: Expression = new Num(-1.234)
let e3: Expression = new BinaryOperation(e1, Enum.DIV, e2)
console.log(e3.evaluate())
let n32: Expression = new Num(32.0)
let n16: Expression = new Num(16.0)
let minus: Expression = new BinaryOperation(n32, Enum.MINUS, n16)
let callSqrt: Expression = new FunctionCall('sqrt', minus)
let n2 = new Num(2.0)
let mult = new BinaryOperation(n2, Enum.MUL, callSqrt)
let callAbs = new FunctionCall('abs', mult)
console.log(callAbs.evaluate())
