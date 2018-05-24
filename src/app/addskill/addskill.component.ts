import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseModule } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})

export class Item {
  body: string;
}

export class AddskillComponent implements OnInit {
  
  
  data = {
    name : '' ,
    phone :  '' ,
    skill :  '' ,
    province :  '' ,
    price :  ''  ,
    comments :  '' 
  } 

    itemList: AngularFireList<any>;



    constructor(public db:AngularFireDatabase) { 
      
      this.itemList=db.list('newskills');
     }
  
    ngOnInit() {
    }
  
  
    insertSkill(){
  
      this.itemList.push({
        name : this.data.name ,
        phone :  this.data.phone ,
        comments : this.data.comments ,
        skill :  this.data.skill ,
        province :  this.data.province ,
        price :  this.data.price 
      })
  
    }
  }