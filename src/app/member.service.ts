import { Injectable } from '@angular/core';
import { Member } from './models/member.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
members=[];
  constructor(public db:AngularFirestore) { 
    this.getAppMembers();
  }

  addmember(data){
    //this.members.push(data);
    this.db.collection("members").add(data);
//
  }

  deleteEvent(member){
    // this.members.splice(this.members.indexOf(event),1);
  /*
    this.members=this.members.filter((element)=>{
     return element!=event; //if false not return anything
   }
   );*/
   this.db.collection("members").doc(member.id).delete();



   }

   getAppMembers(){
    
    //  this.db.collection("members",ref=>ref.orderBy("name","asc")).valueChanges().subscribe(res=>{

     this.db.collection("members",ref=>ref.orderBy("name","asc")).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    ).subscribe(res=>{
        console.log(res);
       this.members=res; 

     });   //subscribe me response
   }
//can create chat application 


updatemember(member){
 this.db.collection("members").doc(member.id).set(member);
}





}
