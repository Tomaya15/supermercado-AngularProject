import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [   /* Items que ya trae por default la pagina */
    {
      id: 3,
      nombre: 'manzana',
      precio: 15,
      cantidad: 4,
      agregado: false
    },
    {
      id: 34,
      nombre: 'pan',
      precio: 30,
      cantidad: 1,
      agregado: true
    },
    {
      id: 103,
      nombre: 'coca-cola',
      precio: 150,
      cantidad: 2,
      agregado: true
    },
    {
      id: 404,
      nombre: 'doritos',
      precio: 70,
      cantidad: 1,
      agregado: true
    }
  ]

  constructor() { }

  getItems(){
  
    return(this.items);
  }

  addItem(item:Item){
    this.items.unshift(item);
    
  }


}
