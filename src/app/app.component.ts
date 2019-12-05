import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { Product } from './product';
import { Family } from './family';
import { Location } from './location';
import { Transaction } from './transaction';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serachkey:any;
  shoeInfoList = [];
  searchShoeInfoList = [];
  category:any
  error :any;
  constructor(private dataService: DataService){       
  }
    
    ngOnInit() {
		this.LoadApperalsDetails();
		
	}
	
	//Following function will used to fetch apperals details by default
	public LoadApperalsDetails(){
		this.dataService.fetchShoeInfo().subscribe(res => {
				let shoeInfo = res['details'];
			    this.shoeInfoList= [];
				if(shoeInfo && shoeInfo['sandals']){
				 let keys =  Object.keys(shoeInfo['sandals']);
					for(let i=0; i< keys.length; i++){
						let tempObj = {
							keyName:'sandals',
							category:keys[i]
						};
						this.shoeInfoList.push(tempObj)
					}
				 }
			   if(shoeInfo && shoeInfo['shoes']){
				 let keys =  Object.keys(shoeInfo['shoes']);
					for(let i=0; i< keys.length; i++){
						let tempObj = {
							keyName:'shoes',
							category:keys[i]							
						};
						this.shoeInfoList.push(tempObj)
					}
				 }
			this.searchShoeInfoList = JSON.parse(JSON.stringify(this.shoeInfoList));
			}, error => {
				this.error = error;
				window.alert('Error while loading info.');
			});				
	}
	
	//Following code is added to filter by tags
	public filterByTags(tags:any){
		if(tags){
			let tagsList = [];
			for(let i=0; i< tags.length; i++){
				tagsList.push(tags[i]['value'])
			}
			
			if(tagsList.length > 0){
			   this.searchShoeInfoList = this.shoeInfoList.filter(shoe => {
                      if(tagsList.includes(shoe.keyName)) {
                           return shoe;
                    } 
                 });
			 }else{
				this.searchShoeInfoList = JSON.parse(JSON.stringify(this.shoeInfoList));	 
			 }
		}
	}	
}
