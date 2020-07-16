import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RestService } from 'src/app/rest.service';
import { FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productid: any;
  registerForm: FormGroup;
  name;description;status;categoryId;fileName;
  submitted=false;
  myFiles: string[] = [];
  remark = ''; 
  constructor(private reest: RestService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPr0duct();
    var headers = new Headers();
    headers.append('Authorization', 'Bearer AADDFFKKKLLLL');
    this.registerForm = new FormGroup({
      cn: new FormControl('', Validators.required)
    });
    

    }
    
    // getFileDetails(e) {  
      
    //   for (var i = 0; i < e.target.files.length; i++) {  
    //     this.myFiles.push(e.target.files[i]);  
    //   }  
      
    // } 
   //Adding categories to product.html
    addCategory()
    {
      console.log("success");
      this.submitted=true;
      this.reest.addCategory({ 
        "categoryId":this.categoryId,
        "name": this.name,
        "description":this.description,
         "status": this.status,
         "fileName":this.fileName
      }).subscribe((result) => {
        alert("success");
      }, (err) => {
        console.log(err);
        
      });
    }
    //binding value on button click for category(product.html)
    setCategory(i){
      
      this.name=i.name;
      this.description=i.description;
      this.status=i.status;
      this.fileName=i.fileName; 
      }
      //updating category list
      updateCategory() {
        const category={"categoryId":this.categoryId,
          "name":this.name,
          "this.description":this.description,
          "status":this.status}
          
          // "fileName": this.fileName,
       this.reest.updateCategory(category).subscribe((result) => {
         alert("Updated Succesfully");
       }, (err) => {
         console.log(err);
       });
      }
  getPr0duct() {
    this.reest.getPr0duct().subscribe((response) => {
      if (response) {
        console.log(response);
        this.productid = response;
      }
    });

  }
  // onupload(i) {  
  //   const uploadData = new FormData();  
  //   // for (var i = 0; i < this.myFiles.length; i++) {  
  //   //   uploadData.append("fileUpload", this.myFiles[i]);  
  //   //   if (i == 0) {  
  //   //     uploadData.append("fileName", this.fileName);  
  //   //   }  
  //   // } 
  //   uploadData.append("fileUpload", this.fileName[i]);  
  // }
}


