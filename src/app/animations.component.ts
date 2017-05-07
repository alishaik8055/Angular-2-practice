import {Component,trigger,state,transition,style,animate,keyframes,group} from '@angular/core';
//import {trigger,state,transition,style,animate,keyframes,group} from "@angular/animations";
@Component({
    template:`<h1>Animations Component</h1>
    <div [@lightsOnOff]="roomState" class="room">Room</div>
    <button (click)="togglelights()">light switch</button>
    
    
    `,
    animations:[
        trigger('lightsOnOff',[
            state('off',style({
                backgroundColor:'black'
            })),
            state('on',style({
                 backgroundColor:'white'
            })),
            transition('off => on',[animate('2s')]),
            transition('on => off',[animate('2s')]),
    ])
    
    ],
    styles:[`.room{
margin:10px;
height: 200px;
width: 200px;
border: 2px solid black;

}`]
})

export class animationsComponent{
roomState="off";
togglelights(){

    this.roomState=(this.roomState ==="off") ? "on" :"off";
}
}