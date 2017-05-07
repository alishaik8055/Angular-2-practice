import {Component} from "@angular/core";

@Component({
    selector:'user',
    template:`<h3>Hello This is {{name}}</h3>
    <p>This is my first angular 2 application</p>
    <img [src]="imgLink">
    <!-- 9 class and style binding
    <div [class.myclass]="applyclass">class binding only applies the styls if the value of the variable is true</div>
     <div [style.color]="applystyle ?'pink':'purple' ">style binding only applies inline styles if the value of the variable is true</div>
   --> 
   
   <button (click)="CTV(referenceVariable.value)">component to view </button>
   <input type="text" #referenceVariable/>

   <input type="text" [(ngModel)]="fname">
   <input type="text" [(ngModel)]="lname">
   Full Name:{{fname}} {{lname}}
   `,
    styles:[`
    .myclass{color:green;
    }`]
})

export class userComponent{
public name='ali';
/* 9 class and style binding
public applyclass=true;
public applystyle=false;
*/
public imgLink="http://lorempixel.com/500/400";
CTV(value:string){
    console.log(value);
}

public fname:string;
public lname:string;

}