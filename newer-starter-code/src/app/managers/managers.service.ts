import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManagersService {

	baseUrl = 'http://localhost:3000';

	getAllManagers() {
		return this.http.get(`${this.baseUrl}/api/managers`);
	}

	saveManager(newManager){
		console.log("service: " + newManager);
		return this.http.post(`${this.baseUrl}/api/managers`, newManager);
	}

	updateManger(updatedManager) {
		return this.http.put(`${this.baseUrl}/api/managers/${updatedManager.id}`, updatedManager);		
	}

	getOneManager(managerId) {
		console.log(managerId);
		return this.http.get(`${this.baseUrl}/api/managers/${managerId}`);	
	}

	deleteManager(manager){
		console.log("deleting: " + manager.id)
		return this.http.delete(`${this.baseUrl}/api/managers/${manager.id}`)
	}

  constructor(private http: Http) { }

}