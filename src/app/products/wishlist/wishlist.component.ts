import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  //to hold all wishlist items
  
  allwishlist:any=[]
  
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.getwishlist().subscribe((result:any)=>{
      console.log(result);
      this.allwishlist=result//array of wishlist products
      

    },
    (result:any)=>{
      console.log(result.error);
      
    }
    )
  }
  //delete wishlists products
  deletewishlist(id:any){
    this.api.deletewishlist(id).subscribe((result:any)=>{
      console.log(result);//remaining wishlist products
      this.allwishlist=result
      

    })
  }
  addtocart(product:any){
    //add quantity to cart
    Object.assign(product,{quantity:1})

    //api call to add quantity
    this.api.addtocart(product).subscribe((result:any)=>{
      this.api.cartcount()
      this.deletewishlist(product)
      alert(result);
    },
    (result:any)=>{
      alert(result.error);
    }
    )
   // this.api.addtocart(product).subscribe((result:any)=>{
     // console.log(result);
      
   // })
    this.api.cartcount()
    this.deletewishlist(product)
  }

}
