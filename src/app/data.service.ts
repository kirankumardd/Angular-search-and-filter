import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  baseUrl:string = "https://insisivecloud-test.ml";
  
  constructor(private httpClient : HttpClient) { 
    
  }
		
	/*signUpExternalUser(data:any) {
     let templateHeader = {
			headers:  new HttpHeaders({ 
					'Content-Type' : "application/json"})
		};
		return this.httpClient.post(this.baseUrl +'/cmp/api/v2.0/userregistration',data,templateHeader
		 ).map (
		result=> result
		 );
  }*/
	
	//Below code is added to load shoes info fron json file
	fetchShoeInfo() {    
		return this.httpClient.get('/assets/apperals.json'
		 ).map (
		result=> result
		 );
  }

}
