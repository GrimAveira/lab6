interface Expression {
  evaluate(): number
  transform(tr: Transformer): Expression
}
interface Transformer {
  //pattern Visitor
  transformNumber(num: Num): Expression
  transformBinaryOperation(op: BinaryOperation): Expression
  transformFunctionCall(func: FunctionCall): Expression
  transformVariable(variable: Variable): Expression
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
  transform(tr: Transformer): Expression {
    return tr.transformNumber(this)
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
  transform(tr: Transformer): Expression {
    return tr.transformBinaryOperation(this)
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
  transform(tr: Transformer): Expression {
    return tr.transformFunctionCall(this)
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
  transform(tr: Transformer): Expression {
    return tr.transformVariable(this)
  }
}
class CopySyntaxTree implements Transformer {
  transformNumber(number: Num): Expression {
    return new Num(number.value())
  }
  transformBinaryOperation(binop: BinaryOperation): Expression {
    return new BinaryOperation(
      binop.left().transform(this),
      binop.operation(),
      binop.left().transform(this)
    )
  }
  transformFunctionCall(fcall: FunctionCall): Expression {
    return new FunctionCall(fcall.name(), fcall.arg().transform(this))
  }
  transformVariable(variable: Variable): Expression {
    return new Variable(variable.name())
  }
}
class FoldConstants implements Transformer {
  transformNumber(number: Num): Expression {
    return new Num(number.value())
  }
  transformBinaryOperation(binop: BinaryOperation): Expression {
    let leftOperand = binop.left().transform(this)
    let rightOperand = binop.right().transform(this)
    let newBinOp = new BinaryOperation(
      leftOperand,
      binop.operation(),
      rightOperand
    )
    if (leftOperand instanceof Num && rightOperand instanceof Num)
      return new Num(newBinOp.evaluate())
    return newBinOp
  }
  transformFunctionCall(fcall: FunctionCall): Expression {
    let operand = fcall.arg().transform(this)
    let newFCall = new FunctionCall(fcall.name(), operand)
    if (operand instanceof Num) return new Num(newFCall.evaluate())
    return newFCall
  }
  transformVariable(variable: Variable): Expression {
    return new Variable(variable.name())
  }
}
// let e1: Expression = new Num(1.234)
// let e2: Expression = new Num(-1.234)
// let e3: Expression = new BinaryOperation(e1, Enum.DIV, e2)
// console.log(e3.evaluate())
// let n32: Expression = new Num(32.0)
// let n16: Expression = new Num(16.0)
// let minus: Expression = new BinaryOperation(n32, Enum.MINUS, n16)
// let callSqrt: Expression = new FunctionCall('sqrt', minus)
// let n2 = new Num(2.0)
// let mult = new BinaryOperation(n2, Enum.MUL, callSqrt)
// let callAbs = new FunctionCall('abs', mult)
// console.log(callAbs.evaluate())
let n32 = new Num(32.0)
let n16 = new Num(16.0)
let minus = new BinaryOperation(n32, Enum.MINUS, n16)
let callSqrts = new FunctionCall('sqrt', minus)
let variable = new Variable('var')
let mult = new BinaryOperation(variable, Enum.MUL, callSqrts)
let callAbs = new FunctionCall('abs', mult)
// let CST = new CopySyntaxTree()
// let newExpr: Expression = callAbs.transform(CST)
let FC = new FoldConstants()
let newExpr: Expression = callAbs.transform(FC)
console.log(callAbs)
console.log(newExpr)
