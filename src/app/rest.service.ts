import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  // addCategory(arg0: { name: any; description: any; status: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  endpoint1="http://localhost:55946/api/User";
  endpoint='http://localhost:55946/api/User';
  categoryurl="http://localhost:55946/api/Category";
  orderurl='http://localhost:55946/api/order/getorderdetails';
  httpOptions;

  constructor(private http: HttpClient) { }
  private extractdata(res:Response){
    let body=res;  
    return body  ;
  }
  private extractdata1(res1:Response){
    let body=res1;  
    return body  ;
  }
  getData(){
    return this.http.get(this.endpoint).pipe(map(this.extractdata));
  }
  getPr0duct(){
    return this.http.get(this.categoryurl).pipe(map(this.extractdata1));
  }
  getOrder(){
    return this.http.get(this.orderurl).pipe(map(this.extractdata1));
  }
  addProduct (addp){
  // console.log(Response);
  return this.http.post<any>(this.endpoint1 , addp).pipe(
    tap((product) => console.log(this.extractdata))
    
  );
}
addCategory (addc){
  // console.log(Response);
  console.log(addc);
  return this.http.post<any>(this.categoryurl , addc).pipe(
    tap((product) => console.log(this.extractdata))
    
  );
}
updateProduct (product) 
{console.log(product);
  return this.http.put(this.endpoint1+ '/'+ product.userId, product).pipe(
    tap(_ => console.log(`updated product id=${product}`)),   
  );
}
updateCategory (category) 
{console.log(category);
  return this.http.put(this.categoryurl+ '/'+ category.categoryId, category).pipe(
    tap(_ => console.log(`updated category id=${category}`)),   
  );
}
deleteProduct (id) {
  return this.http.delete(this.endpoint1 + id).pipe(
    tap(_ => console.log(`deleted product id=${id}`)),
    
  );
}

}
