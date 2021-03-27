import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

getotp(value){
let data=value;
	return this.http.post("http://lab.thinkoverit.com/api/getOTP.php",value);
}


verifyotp(value){
	return this.http.post("http://lab.thinkoverit.com/api/verifyOTP.php",value);
}
}

