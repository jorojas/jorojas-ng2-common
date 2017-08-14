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
        return value;
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
    /**
     * @return {?}
     */
    SampleService.prototype.sayHi = function () {
        return "Hello from NovoPayment";
    };
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
var PoweredByPipe = (function () {
    function PoweredByPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     * @param {?} value
     * @param {...?} args
     * @return {?}
     */
    PoweredByPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        //return value.toLowerCase();
        return 'Powered by NovoPayment Inc.';
    };
    return PoweredByPipe;
}());
PoweredByPipe.decorators = [
    { type: Pipe, args: [{
                name: 'poweredByPipe',
            },] },
];
/**
 * @nocollapse
 */
PoweredByPipe.ctorParameters = function () { return []; };

var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PoweredByPipe],
                imports: [],
                exports: [PoweredByPipe]
            },] },
];
/**
 * @nocollapse
 */
PipesModule.ctorParameters = function () { return []; };

var SampleModule = (function () {
    function SampleModule() {
    }
    /**
     * @return {?}
     */
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule,
            providers: [SampleService]
        };
    };
    return SampleModule;
}());
SampleModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    PipesModule
                ],
                declarations: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ],
                exports: [
                    SampleComponent,
                    SampleDirective,
                    SamplePipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };

export { SampleModule, SampleComponent, SampleDirective, SamplePipe, SampleService };
