import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.services';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  precio: number = 0;
  cantidad: number = 0;

  constructor(private itemService: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSumbit(){
    const itemCreado = new Item();
    itemCreado.id = this.id;
    itemCreado.nombre = this.nombre;
    itemCreado.precio = this.precio;
    itemCreado.cantidad = this.cantidad;
    itemCreado.agregado = true;

    this.itemService.addItem(itemCreado);
    window.alert("Su articulo ya fue añadido");

  }
  


}
