import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute }   from '@angular/router';

@Component({
  selector: 'app-manager-edit',
  templateUrl: './manager-edit.component.html',
  styleUrls: ['./manager-edit.component.css']
})
export class ManagerEditComponent implements OnInit {

  updatedManager = <any>{};

  constructor(
    
  ) { }

  ngOnInit() {
  }

  updateManager(updatedManager){
  	console.log("compenet: updating manager");
  }

}
