import { assert } from 'chai'
import {
  Expression,
  Num,
  BinaryOperation,
  FunctionCall,
  Variable,
  Enum,
  CopySyntaxTree,
  Transformer,
} from '../src/firstTaskTestModule'

describe('CopySyntaxTree', () => {
  it('CopySyntaxTree deeply copied the expression', function () {
    let n32 = new Num(32.0)
    let n16 = new Num(16.0)
    let minus = new BinaryOperation(n32, Enum.MINUS, n16)
    let callSqrts = new FunctionCall('sqrt', minus)
    let variable = new Variable('var')
    let mult = new BinaryOperation(variable, Enum.MUL, callSqrts)
    let callAbs = new FunctionCall('abs', mult)
    let CST = new CopySyntaxTree()
    let newExpr: Expression = callAbs.transform(CST)
    assert.notDeepEqual(callAbs, newExpr)
  })
})
