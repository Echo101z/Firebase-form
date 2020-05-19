import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-cousin',
  templateUrl: './cousin.component.html',
  styleUrls: ['./cousin.component.css']
})
export class CousinComponent implements OnInit {

  constructor(public member:MemberService) { 
  }

  ngOnInit(): void {
  }


  print(){
    console.log("elements ");
    this.member.members.forEach(element => {
      console.log(element.name);

    });
  }

}
