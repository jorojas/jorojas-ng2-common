(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['jorojas-ng2-common'] = {}),global._angular_core,global._angular_common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
SampleComponent.decorators = [
    { type: _angular_core.Component, args: [{
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
    { type: _angular_core.Directive, args: [{
                selector: '[sampleDirective]'
            },] },
];
/**
 * @nocollapse
 */
SampleDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
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
    { type: _angular_core.Pipe, args: [{
                name: 'samplePipe'
            },] },
    { type: _angular_core.Injectable },
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
    { type: _angular_core.Injectable },
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
    { type: _angular_core.Pipe, args: [{
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
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule
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

exports.NovoCommonModule = NovoCommonModule;
exports.SampleComponent = SampleComponent;
exports.SampleDirective = SampleDirective;
exports.SamplePipe = SamplePipe;
exports.SampleService = SampleService;
exports.CopyrightPipe = CopyrightPipe;

Object.defineProperty(exports, '__esModule', { value: true });

})));
