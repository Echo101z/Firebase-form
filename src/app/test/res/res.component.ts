import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from 'src/app/member.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {
@Input("display") reg; 
@Output("outputeventdata") od=new EventEmitter();
toupdate=true;
  constructor(public member:MemberService) { }

  ngOnInit(): void {
  }

OnChange(){
   this.od.emit(this.reg);
}

deleteshareddata(){
this.member.deleteEvent(this.reg);
}

onclickupdate(){
  this.toupdate=!this.toupdate;
}

finalupdate(){
 // console.log(this.reg);
  this.member.updatemember(this.reg);
  this.toupdate=!this.toupdate;
}


}
