var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('Should call onAddTodo with valid data', () => {
        var textToPass = 'Check Mail';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.toAdd.value = textToPass;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(textToPass);
    });

    it('Should not have been called onAddTodo with valid data', () => {
        var textToPass = '';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAdd={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.toAdd.value = textToPass;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});