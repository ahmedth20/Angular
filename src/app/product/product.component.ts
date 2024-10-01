import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  id!:number;
constructor(private activated:ActivatedRoute) {
//this.id = this.activated.snapshot.params['id'];
console.log('snapshot method :')
console.log(this.activated.snapshot.params['id']);

console.log('params :')
this.activated.params.subscribe({
  next : (param)=>console.log(param['id'])
})
//this.listProducts = this.listProducts.filter((pr)=>pr.categoryId == this.id);

}
}
