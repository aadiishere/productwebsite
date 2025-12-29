import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singleview-list',
  imports: [],
  templateUrl: './singleview-list.html',
  styleUrl: './singleview-list.css',
})
export class SingleviewList {
//declare an array 
singleproduct:any={};
//create constructor to inject apiservice and activerouter
constructor(private apiservice:Apiservice,private route:ActivatedRoute ,private cdr: ChangeDetectorRef){}

//page load aayal data fetch cheyyan
ngOnInit()
{
  const productid=this.route.snapshot.paramMap.get('titleid');
  //get the id from route
  if(productid){
    //call the api service method to fetch single product details
    this.apiservice.getsingleproduct(productid).subscribe((data)=>
    {
      this.singleproduct=data;
      console.log(data)
      this.cdr.detectChanges();
    });
  }
}
}
