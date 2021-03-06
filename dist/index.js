import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sample-component',
                template: "<h1>Sample component</h1>"
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return []; };

var SampleDirective = (function () {
    /**
     * @param {?} el
     */
    function SampleDirective(el) {
        this.el = el;
    }
    return SampleDirective;
}());
SampleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };

/**
 * Transforms any input value
 */
var SamplePipe = (function () {
    function SamplePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SamplePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return 'Hello! ' + value;
    };
    return SamplePipe;
}());
SamplePipe.decorators = [
    { type: Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: Injectable },
];
/**
 * @nocollapse
 */
SamplePipe.ctorParameters = function () { return []; };

var SampleService = (function () {
    function SampleService() {
    }
    return SampleService;
}());
SampleService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SampleService.ctorParameters = function () { return []; };

/**
 * Generated class for the PoweredByPipe pipe.

See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
Angular Pipes.
 */
var CopyrightPipe = (function () {
    function CopyrightPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    CopyrightPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //return value.toLowerCase();
        return 'Copyright NovoPayment Inc., 2017';
    };
    return CopyrightPipe;
}());
CopyrightPipe.decorators = [
    { type: Pipe, args: [{
                name: 'copyrightPipe',
            },] },
];
/**
 * @nocollapse
 */
CopyrightPipe.ctorParameters = function () { return []; };

var NovoCommonModule = (function () {
    function NovoCommonModule() {
    }
    /**
     * @return {?}
     */
    NovoCommonModule.forRoot = function () {
        return {
            ngModule: NovoCommonModule,
            providers: [SampleService]
        };
    };
    return NovoCommonModule;
}());
NovoCommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe,
                    CopyrightPipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe,
                    CopyrightPipe
                ]
            },] },
];
/**
 * @nocollapse
 */
NovoCommonModule.ctorParameters = function () { return []; };

export { NovoCommonModule, SampleComponent, SampleDirective, SamplePipe, SampleService, CopyrightPipe };
