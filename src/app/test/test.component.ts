import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output('data') data=new EventEmitter();
  name="kshitij"; //string interpolation
  eve=false;
  //members=[];
  register:Member={name:"",number:"",email:""};
  constructor(public member:MemberService) {
  /*  setTimeout(()=>{
      this.eve=true;
    },2000);
  */}

  ngOnInit(): void {
  }

onCreate(){
  this.name="KZ";
}

onInput(){
  this.member.addmember(this.register);
  this.register={name:"",number:"",email:""};
  this.member.members.forEach(element => {
    console.log(element.name);
    console.log(element.email);
  });
}

Customevent(event){
  this.name=event+" porwal";
}

//member
deleteEvent(event){
 // this.members.splice(this.members.indexOf(event),1);
this.member.members=this.member.members.filter((element)=>{
  return element!=event; //if false not return anything
}
);
this.data.emit(event.name);
}
}