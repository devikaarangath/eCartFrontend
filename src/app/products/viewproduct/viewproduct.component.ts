import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
//to hold particular id of the product
  productId:any
  product:any={}
  constructor(private viewactivatedRoute:ActivatedRoute,private api:ApiService){}
  //ActivatedRoute is to get path parameter from route

  ngOnInit(): void {
    this.viewactivatedRoute.params.subscribe((data:any)=>{
      console.log(data);//id:"6"
      console.log(data.id);//6
      this.productId=data.id
      //view particular product details
      this.api.viewproduct(this.productId).subscribe((result:any)=>{
        console.log(result);//array of product
        this.product=result;
      })
      
      
      
    })

  }
  //add to wishlist
  addtowishlist(){
  const { id,title,price,image} =this.product
  //api call
  this.api.addtowishlist(id,title,price,image).subscribe((result:any)=>{
    alert(result);
  },
  (result:any)=>{
    alert(result.error);
  }
  )
  }
  //add to cart
  addtocart(product:any){
    //add quantity 1 to product object
    Object.assign(product,{quantity:1})
    console.log(product);
    this.api.addtocart(product).subscribe((result:any)=>{
      this.api.cartcount()
      alert(result)//add to cart

    },
    (result:any)=>{
      alert(result.error)//error
    }
    )

    
  }

}
