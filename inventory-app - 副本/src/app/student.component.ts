import { Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'student',
    inputs:['name'],
    outputs: ['studentSelected'],
    template: '<p (click)="onclicked()">{{name}}</p>'
})
export class student {
 name :string;
 studentSelected:EventEmitter<string>;

constructor(){
    this.studentSelected =new EventEmitter();
}
onclicked(){
    this.studentSelected.emit(this.name);
}
}