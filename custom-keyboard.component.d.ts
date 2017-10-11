import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
export declare class CustomKeyboardComponent implements OnInit {
    subscriptions: Subscription;
    CapsLock: boolean;
    keys: string[];
    inputstr: string;
    caretPos: number;
    inputTextArea: any;
    inputType: any;
    constructor();
    getRecrods(Json: any): void;
    ngOnInit(): void;
    keyPress(event: any): void;
    Caps(): void;
    click(item: any, inputTextArea: any): void;
    getCaretPos(oField: any): void;
    setSelectionRange(selectionStart: any, selectionEnd: any): void;
}
