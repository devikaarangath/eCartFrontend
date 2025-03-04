import { Component, OnInit }  from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  searchTerm:string='';
  //to hold all array of products
  allProducts:any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getAllproducts().subscribe((result:any)=>{
      console.log(result);//array of products
      this.allProducts=result;
      
    })
   // this.searchTerm=this.api.searchTerm
   this.api.searchTerm.subscribe((result:any)=>{
    this.searchTerm=result
   })
    console.log(this.searchTerm);
    
  }
  

}

      
    

  


