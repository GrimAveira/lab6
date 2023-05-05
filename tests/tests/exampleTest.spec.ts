import { assert } from 'chai'
import {
  Expression,
  Num,
  BinaryOperation,
  FunctionCall,
  Variable,
  Enum,
} from '../src/exampleTestModule'

describe('Num constructor', () => {
  function makeTest(x: number): void {
    it(`${x} has the numeric data type`, function () {
      let e1: Expression = new Num(x)
      assert.strictEqual(e1.evaluate(), x)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x)
  }
})

describe('BinaryOperation DIV', () => {
  function makeTest(x: number, y: number): void {
    let expected = x / y
    it(`${x} divide by ${y} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.DIV, e2)
      assert.equal(e3.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})

describe('BinaryOperation MUL', () => {
  function makeTest(x: number, y: number): void {
    let expected = x * y
    it(`${x} multiply by ${y} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.MUL, e2)
      assert.equal(e3.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})

describe('BinaryOperation MINUS', () => {
  function makeTest(x: number, y: number): void {
    let expected = x - y
    it(`${x} minus by ${y} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.MINUS, e2)
      assert.equal(e3.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})

describe('BinaryOperation PLUS', () => {
  function makeTest(x: number, y: number): void {
    let expected = x + y
    it(`${x} plus by ${y} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.PLUS, e2)
      assert.equal(e3.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})
describe('FunctionalCall sqrt', () => {
  function makeTest(x: number): void {
    let expected = Math.sqrt(x)
    it(`The square root of ${x} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let callSqrt: Expression = new FunctionCall('sqrt', e1)
      assert.equal(callSqrt.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x)
  }
})
describe('FunctionalCall abs', () => {
  function makeTest(x: number): void {
    let expected = Math.abs(x)
    it(`The abs of ${x} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let callAbs: Expression = new FunctionCall('abs', e1)
      assert.equal(callAbs.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x)
  }
})
describe('FunctionalCall sqrt with BinaryOperation', () => {
  function makeTest(x: number, y: number): void {
    let expected = Math.sqrt(x + y)
    it(`The square root of ${x} plus ${y} equals ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.PLUS, e2)
      let callSqrt: Expression = new FunctionCall('sqrt', e3)
      assert.equal(callSqrt.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})
describe('FunctionalCall abs with BinaryOperation', () => {
  function makeTest(x: number, y: number): void {
    let expected = Math.abs(x - y)
    it(`The abs of ${x} minus ${y} ${expected}`, function () {
      let e1: Expression = new Num(x)
      let e2: Expression = new Num(y)
      let e3: Expression = new BinaryOperation(e1, Enum.MINUS, e2)
      let callAbs: Expression = new FunctionCall('abs', e3)
      assert.equal(callAbs.evaluate(), expected)
    })
  }
  let y = 5
  for (let x = 1; x <= y; x++) {
    makeTest(x, y)
  }
})
describe('FunctionalCall sqrt with negative number', () => {
  it(`The sqrt by ${-3} equals NaN`, function () {
    let e1: Expression = new Num(-3)
    let callSqrt: Expression = new FunctionCall('sqrt', e1)
    assert.isNumber(callSqrt.evaluate(), 'Result has a number type')
  })
})
describe('BinaryOperation with divide 0', () => {
  it(`The expression -2/0 equals infinity`, function () {
    let e1: Expression = new Num(-3)
    let e2: Expression = new Num(0)
    let e3: Expression = new BinaryOperation(e1, Enum.DIV, e2)
    assert.isFinite(e3.evaluate, 'The expression equals not finite value')
  })
})
