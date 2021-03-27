import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-loan';

clicked = true;
mobile = '';
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(value){
  
  if (value['city']=='' || value['mobile']=='' || value['panNumber']=='' || value['fullname']=='' || value['email']==''){
  alert("please fill the all info");

  }

  else{
  console.log(value)
  	 this.dataservice.getotp(value).subscribe((response)=>{
		console.log("in loop")
    let res: any = response;
    console.log("hiiii",res.statusCode)
      if (res.statusCode == 200) {


        alert("success")

        //this.router.navigate(['/userside-component']);

      }
      else{

        alert("NOT success")
        }
		
	 
  })
}
}

verify_otp(value,ab){

let dict={
  "mobile":ab['mobile'],
  "otp":value['otp']
}
console.log(dict)

let sd=ab['mobile']
  console.log(value,sd)
   this.dataservice.verifyotp(dict).subscribe((response)=>{
let res: any = response;
    console.log("jjjjjjj",res.statusCode)

if (res.statusCode == 200 ){
  alert("Thank you for verification "+ab['fullname'])
}
else{
  alert("enter valid OTP")
}
   });
}
}

