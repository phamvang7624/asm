import { Component } from '@angular/core';
import { IMenu } from '../../interface/menu';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  // menus:IMenu[] = [
  //   {
  //   id:2,
  //   name:'Catalog',
  //   path:'catalog',
  //   parent:0
  //   },

  // ]


  // checkChildrent = (menuid:number):boolean=>{
  //   let check:boolean = false;
  //   for (let item of this.menus){
  //       if (item.parent===menuid){
  //         check = true;
  //       }
  //   }
  //   return check;
  // }
}
