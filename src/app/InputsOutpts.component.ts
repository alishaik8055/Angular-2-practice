import {Component} from "@angular/core"
import {EventEmitter} from "@angular/core"
@Component({
    selector:'InputsOutputs',
    template:`<h5>Hi this is inputs outputs component</h5>
            <label>Input child data:</label>
            <input type="text" #childtext (keyup)="OnChange(childtext.value)">
            <p>this data is from app component:-----{{parentData}}</p>
    `,
    
    inputs :[`parentData`],
    outputs:[`childEvent`]

})

export class InputsOutputsComponent {
    public parentData:string;
    childEvent= new EventEmitter<string>();
    OnChange(value:string){
            this.childEvent.emit(value);
    }
}