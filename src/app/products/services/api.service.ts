import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;
  //to hold cart count
  cartitemcount =new BehaviorSubject(0)
  
  searchTerm = new BehaviorSubject('')

  constructor(private http:HttpClient) {
    this.cartcount()
   }
  BASE_URL = 'http://localhost:5000'
  //get all products from mongodb
  getAllproducts(){
    return this.http.get(`${this.BASE_URL}/products/allproducts`)
  }
  //view particular products from mongodb
  viewproduct(id:any){
    return this.http.get(`${this.BASE_URL}/products/viewproduct/${id}`)
  }
  //add to wishlist
  addtowishlist(id:any,title:any,price:any,image:any){

    const body={
      id,title,price,image
    }
    return this.http.post(`${this.BASE_URL}/products/addtowishlist`,body)
  }
  //get all products from 
  getwishlist(){
    return this.http.get(`${this.BASE_URL}/products/getwishlist`)
  }
  //delete wishlist product from wishlist collection
  deletewishlist(id:any){
    return this.http.delete(`${this.BASE_URL}/products/deletewishlist/${id}`)
  }
  //add to cart
  addtocart(product:any){
    const body ={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      quantity:product.quantity
      
    }
    return this.http.post(`${this.BASE_URL}/products/addtocart`,body)
  }
  //get cart products
  getcart(){
    return this.http.get(`${this.BASE_URL}/products/getcart`)
  }
  //cart count
  cartcount(){
    this.getcart().subscribe((result:any)=>{
      this.cartitemcount.next(result.length);//3
    })
  }
  //delete cart products
  deleteCart(id:any){
    return this.http.delete(`${this.BASE_URL}/products/deletecart/${id}`)
  }
  //increment cart count
  incrementcartCount(id:any){
    return this.http.get(`${this.BASE_URL}/products/increment/${id}`)
  }
  //
  decrementcartCount(id:any){
    return this.http.get(`${this.BASE_URL}/products/increment/${id}`)
  }
  submitpay(){
    if(this['addressForm'].valid){

    }
    else{
      alert("Invalid Form")
    }
  }
}

