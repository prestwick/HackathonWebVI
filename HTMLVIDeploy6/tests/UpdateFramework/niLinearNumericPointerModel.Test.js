//****************************************
// Tests for LinearNumericPointerModel class
// National Instruments Copyright 2014
//****************************************

describe('A LinearNumericPointerModel', function () {
    'use strict';
    var controlModel;
    var id = 'testId';

    beforeEach(function () {
        controlModel = new NationalInstruments.HtmlVI.LinearNumericPointerModel(id);
    });

    // -------------------------------------------------
    // Testing setters and getters for properties
    // -------------------------------------------------
    it('allows to call his constructor', function () {
        expect(controlModel).toBeDefined();
        expect(controlModel.getId()).toEqual(id);
    });

    // -------------------------------------------------
    // Testing behavior (methods)
    // -------------------------------------------------
    it('allows to call the linearNumericPointerModelMethods  method', function () {
        // This function is used as a flag to indicate that the methods have been already initialized in the prototype.
        // This function does nothing. It is called here for purpose of completing our testing coverage.
        controlModel.linearNumericPointerModelMethods();
    });

    it('allows to call the printToConsole method', function () {
        spyOn(console, 'log');
        controlModel.printToConsole('');
        expect(console.log.calls.count()).toEqual(Object.keys(controlModel).length);
    });
});