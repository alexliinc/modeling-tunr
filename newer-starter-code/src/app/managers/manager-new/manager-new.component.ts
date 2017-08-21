import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';


@Component({
  selector: 'app-manager-new',
  templateUrl: './manager-new.component.html',
  styleUrls: ['./manager-new.component.css']
})
export class ManagerNewComponent implements OnInit {

  newManager = <any>{}; //ADDED

  constructor(private managersService :  ManagersService) 
  { }

  ngOnInit() {

  }

  saveManager(newManager){
  	console.log("component : saving manager");
    console.log("component :" + newManager.name);
    console.log("component just manager :" + newManager);
    console.log("component email :" + newManager.email);
    this.managersService.saveManager(newManager)
      .subscribe(response => {
    console.log(response.json());
    let manager = response.json();
    window.location.href = "/managers/" + manager.id;
    })
  };


}
