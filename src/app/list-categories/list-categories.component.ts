import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';
import { elementAt } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  title:string="";
  categories : Categorie[] = [{"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.png",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"",
    "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.","available":false},]
    
afficheDescription(id:number){
  this.categories.forEach(element => {
    if (element.id == id) {
      alert(element.description)
    }
  })
}
constructor(private router: Router) { }
update(c:Categorie){
  console.log(JSON.stringify(c))
  this.router.navigate(['/category/update', JSON.stringify(c)]); 
  }
}
