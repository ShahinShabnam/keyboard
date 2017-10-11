(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/http'), require('rxjs/add/operator/toPromise'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/map'), require('rxjs/add/operator/filter'), require('rxjs/Subject'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/http', 'rxjs/add/operator/toPromise', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', 'rxjs/add/operator/filter', 'rxjs/Subject', '@angular/forms'], factory) :
	(factory((global.demo1 = {}),global.core,global.common,global.http,null,null,null,null,global.Subject,global.forms));
}(this, (function (exports,core,common,http,toPromise,_catch,map,filter,Subject,forms) { 'use strict';

var CustomKeyboardService = (function () {
    /**
     * @param {?} _http
     */
    function CustomKeyboardService(_http) {
        this._http = _http;
        this.subject = new Subject.Subject();
    }
    /**
     * @return {?}
     */
    CustomKeyboardService.prototype.setInputReference = function () {
        alert(this.type + "service");
        this.emit('input:type:change', this.type);
        return this._http.get(this.type)
            .map(function (response) { return response.json(); });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    CustomKeyboardService.prototype.filterOn = function (id) {
        return (this.subject.filter(function (d) { return (d.id === id); }));
    };
    
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    CustomKeyboardService.prototype.emit = function (id, options) {
        this.subject.next({ id: id, data: options });
    };
    return CustomKeyboardService;
}());
CustomKeyboardService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
CustomKeyboardService.ctorParameters = function () { return [
    { type: http.Http, },
]; };

var CustomKeyboardComponent = (function () {
    /**
     * @param {?} customKeyboardService
     */
    function CustomKeyboardComponent(customKeyboardService) {
        // this.getRecrods(customKeyboardService.type);
        var _this = this;
        this.customKeyboardService = customKeyboardService;
        this.CapsLock = false;
        this.keys = ["Esc", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "bksp", "7", "8", "9", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "4", "5", "6", "<--", "z", "x", "c", "v", "b", "n", "m", "-", "-->", "1", "2", "3", "Spacebar", "0", "Enter"];
        this.inputstr = "";
        this.caretPos = 0;
        this.subscriptions = this.customKeyboardService.filterOn('input:type:change').subscribe(function (d) {
            _this.inputType = d.data;
        });
    }
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.ngOnInit = function () {
        this.inputstr = "";
        this.CapsLock = false;
        this.keys = ["Esc", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "bksp", "7", "8", "9", "Caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "Enter", "4", "5", "6", "<--", "z", "x", "c", "v", "b", "n", "m", "-", "-->", "1", "2", "3", "Spacebar", "0", "Enter"];
        this.caretPos = 0;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomKeyboardComponent.prototype.keyPress = function (event) {
        if (event.keyCode == "27" || event.keyCode == "13") {
            console.log(String.fromCharCode(event.keyCode));
        }
        else if (event.keyCode == "20") {
            this.Caps();
        }
        else if (event.keyCode == "17") {
        }
        else {
            this.inputstr = event.target.value;
        }
    };
    /**
     * @return {?}
     */
    CustomKeyboardComponent.prototype.Caps = function () {
        if (this.CapsLock) {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 0; i <= 36; i++) {
                if (i >= 1 && i <= 10) {
                    this.keys[i] = this.keys[i].toLowerCase();
                }
                else if (i >= 16 && i <= 24) {
                    this.keys[i] = this.keys[i].toLowerCase();
                }
                else if (i >= 30 && i <= 36) {
                    this.keys[i] = this.keys[i].toLowerCase();
                }
            }
        }
        else {
            this.CapsLock = !this.CapsLock;
            for (var /** @type {?} */ i = 0; i <= 36; i++) {
                if (i >= 1 && i <= 10) {
                    this.keys[i] = this.keys[i].toUpperCase();
                }
                else if (i >= 16 && i <= 24) {
                    this.keys[i] = this.keys[i].toUpperCase();
                }
                else if (i >= 30 && i <= 36) {
                    this.keys[i] = this.keys[i].toUpperCase();
                }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} inputTextArea
     * @return {?}
     */
    CustomKeyboardComponent.prototype.click = function (item, inputTextArea) {
        this.getCaretPos(inputTextArea); //Get Cursor Position From Text Area
        if (item === "Esc" || item === "Enter") {
            console.log(item);
        }
        else {
            if (item !== "bksp" && item !== "Caps" && item !== "Spacebar" && item !== "-->" && item !== "<--") {
                // console.log('lenth' + this.inputstr.length + 'carsor' + this.caretPos);
                if (this.inputstr.length > this.caretPos) {
                    var /** @type {?} */ tempstr = this.inputstr.substring(0, this.caretPos);
                    tempstr += item;
                    this.inputstr = tempstr + this.inputstr.substring(this.caretPos, this.inputstr.length);
                    this.caretPos--;
                    this.inputTextArea = inputTextArea;
                    this.setSelectionRange(this.caretPos, this.caretPos);
                }
                else if (this.inputstr.length === this.caretPos) {
                    this.inputstr += item;
                }
            }
            else if (item === "Spacebar") {
                this.inputstr += " ";
            }
            else if (item === "Caps") {
                this.Caps();
            }
            else if (item === "-->") {
                this.setSelectionRange(this.caretPos, this.caretPos); //Rigth shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item === "<--") {
                this.caretPos--;
                this.setSelectionRange(this.caretPos, this.caretPos); //Lift Shift
                //alert('lenth' + this.str.length + 'carsor' + this.caretPos);
            }
            else if (item === "bksp") {
                this.inputstr = this.inputstr.substring(0, this.inputstr.length - 1);
            }
        }
        document.getElementById('input').focus(); //input focus...
    };
    /**
     * @param {?} oField
     * @return {?}
     */
    CustomKeyboardComponent.prototype.getCaretPos = function (oField) {
        this.inputTextArea = oField;
        if (oField.selectionStart || oField.selectionStart == '0') {
            this.caretPos = oField.selectionStart;
        }
    };
    /**
     * @param {?} selectionStart
     * @param {?} selectionEnd
     * @return {?}
     */
    CustomKeyboardComponent.prototype.setSelectionRange = function (selectionStart, selectionEnd) {
        if (this.inputTextArea.setSelectionRange) {
            this.inputTextArea.focus();
            this.inputTextArea.setSelectionRange(selectionStart, selectionEnd);
        }
        else if (this.inputTextArea.createTextRange) {
            var /** @type {?} */ range = this.inputTextArea.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    };
    return CustomKeyboardComponent;
}());
// inputDefine(inputType){
// }
CustomKeyboardComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'custom-keyboard-component',
                template: "\n  <div class=\"keyboard\">\n  <input id=\"input\" #inputTextArea  [(type)]=\"inputType\" (click)=\"getCaretPos(inputTextArea)\"  (keyup)=\"getCaretPos(inputTextArea)\" [ngModel]=\"inputstr\" style=\"width:90%;margin-left: 17px;\" />\n  <br>\n  <br>\n  <div class=\"button-group\">\n    <button *ngFor=\"let key of keys\" class=\"button\" (click)=\"click(key,inputTextArea)\">\n      {{key}}\n    </button>\n  </div>\n</div>\n",
                styles: [".button-group{ height: 100px; width: calc(100% - 100px); float: left; min-width: 990px; } .button{ width:calc((100%)/15); height: 50%; padding: 0px; background-color: black; color: white; } .keyboard{ height: 230px; width: 100%; float: left; background-color: aqua; padding-top: 18px; } "],
                host: { '(window:keyup)': 'keyPress($event)' }
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardComponent.ctorParameters = function () { return [
    { type: CustomKeyboardService, },
]; };

var CustomKeyboardDirective = (function () {
    /**
     * @param {?} el
     */
    function CustomKeyboardDirective(el) {
        this.el = el;
    }
    return CustomKeyboardDirective;
}());
CustomKeyboardDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[customKeyboardDirective]'
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var CustomKeyboardPipe = (function () {
    function CustomKeyboardPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    CustomKeyboardPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return CustomKeyboardPipe;
}());
CustomKeyboardPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'customKeyboardPipe'
            },] },
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
CustomKeyboardPipe.ctorParameters = function () { return []; };

var CustomKeyboardModule = (function () {
    function CustomKeyboardModule() {
    }
    /**
     * @return {?}
     */
    CustomKeyboardModule.forRoot = function () {
        return {
            ngModule: CustomKeyboardModule,
            providers: [CustomKeyboardService]
        };
    };
    return CustomKeyboardModule;
}());
CustomKeyboardModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                ],
                declarations: [
                    CustomKeyboardComponent,
                    CustomKeyboardDirective,
                    CustomKeyboardPipe,
                ],
                exports: [
                    CustomKeyboardComponent,
                    CustomKeyboardDirective,
                    CustomKeyboardPipe,
                ]
            },] },
];
/**
 * @nocollapse
 */
CustomKeyboardModule.ctorParameters = function () { return []; };

exports.CustomKeyboardModule = CustomKeyboardModule;
exports.CustomKeyboardComponent = CustomKeyboardComponent;
exports.CustomKeyboardDirective = CustomKeyboardDirective;
exports.CustomKeyboardPipe = CustomKeyboardPipe;
exports.CustomKeyboardService = CustomKeyboardService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
