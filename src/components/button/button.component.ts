import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Output() buttonClick  = new EventEmitter<any>();
    @Input({required:true}) buttonText = '';

    onClickButton(event: any){
        this.buttonClick.emit(event)
    }
}
