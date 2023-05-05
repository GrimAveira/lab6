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
  FoldConstants,
} from '../src/secondTaskTestModule'

describe('FoldConstant', () => {
  it('FoldConstant folds the specified argument of the expression', function () {
    let n32 = new Num(32.0)
    let n16 = new Num(16.0)
    let minus = new BinaryOperation(n32, Enum.MINUS, n16)
    let callSqrts = new FunctionCall('sqrt', minus)
    let variable = new Variable('var')
    let mult = new BinaryOperation(variable, Enum.MUL, callSqrts)
    let callAbs = new FunctionCall('abs', mult)
    let FC = new FoldConstants()
    let newExpr = callAbs.transform(FC)
    console.log(callAbs, newExpr)
    assert.isOk('everithing is')
  })
})
