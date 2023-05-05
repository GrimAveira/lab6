import { assert } from 'chai'
import {
  LinkedList,
  NodeMyList,
  Stack,
  Adapter,
} from '../src/thirdTaskTestModule'
describe('Class List function isEmpty', () => {
  it('The function must return true if list is empty', function () {
    let list = new LinkedList()
    assert.isTrue(list.isEmpty())
  })
})
describe('Class List function getTail', () => {
  it('The value of the tail element should be equal to 10', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    assert.equal(list.getTail(), 10)
  })
})
describe('Class List function isEmpty', () => {
  it('The function must return false if list is not empty', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    assert.isFalse(list.isEmpty())
  })
})
describe('Class List function insertAtEnd', () => {
  it('The value of the tail element should be equal to 10', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    assert.equal(list.getTail(), 10)
  })
})
describe('Class List function insertInBegin', () => {
  it('The value of the tail element should be equal to 5', function () {
    let list = new LinkedList()
    list.insertInBegin(5)
    list.insertInBegin(10)
    assert.equal(list.getTail(), 5)
  })
})
describe('Class List function getHead', () => {
  it('The value of the head element should be equal to 5', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    assert.equal(list.getHead(), 5)
  })
})
describe('Class List function deleteFromBegin', () => {
  it('The value of the head element should be equal to 10', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    list.deleteFromBegin()
    assert.equal(list.getHead(), 10)
  })
})
describe('Class List function deleteFromEnd', () => {
  it('The value of the head element should be equal to 5', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.insertAtEnd(10)
    list.deleteFromEnd()
    assert.equal(list.getHead(), 5)
  })
})
describe('Class List function getHead', () => {
  it('The value of the head element should be equal to null cause list is empty', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.deleteFromEnd()
    assert.isNull(list.getHead())
  })
})
describe('Class List function getTail', () => {
  it('The value of the head element should be equal to null cause list is empty', function () {
    let list = new LinkedList()
    list.insertAtEnd(5)
    list.deleteFromEnd()
    assert.isNull(list.getTail())
  })
})
describe('Class Adapter function get', () => {
  it('Adding elements to the stack in order: 10,15,20. The topmost one should be equal to 20', function () {
    let stack = new Adapter()
    stack.push(10)
    stack.push(15)
    stack.push(20)
    assert.equal(stack.get(), 20)
  })
})
describe('Class Adapter function pop', () => {
  it('Adding elements to the stack in order: 10,15,20. The topmost pop element should be equal to 20 and next topmost one should be 15', function () {
    let stack = new Adapter()
    stack.push(10)
    stack.push(15)
    stack.push(20)
    assert.equal(stack.pop(), 20)
    assert.equal(stack.get(), 15)
  })
})
describe('Class Adapter function isEmpty', () => {
  it('The function must return true if stack is empty', function () {
    let stack = new Adapter()
    assert.isTrue(stack.isEmpty())
  })
})
describe('Class Adapter function isEmpty', () => {
  it('The function must return false if list is not empty', function () {
    let stack = new Adapter()
    stack.push(5)
    assert.isFalse(stack.isEmpty())
  })
})
describe('Class Adapter function push', () => {
  it('Adding elements to the stack in order: 10, 15. The topmost one should be equal to 15', function () {
    let stack = new Adapter()
    stack.push(10)
    stack.push(15)
    assert.equal(stack.get(), 15)
  })
})
