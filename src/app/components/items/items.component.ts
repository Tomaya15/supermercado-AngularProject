import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item'
import { ItemService} from '../../services/item.services'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  precioTotalDeLosItems: number = 0;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.getTotal();  
  }
  
    eliminarItem(item: Item){
      /* Al ser llamado su funcion es hacer una copia de la lista del carrito de compras implementada en items.component y devuelve una copia sin el itemDado como argumento en el parametro item*/
      var posicion = this.items.indexOf(item)
      this.items.splice(posicion,1)
      this.getTotal();

    } 

    toggleItem(item:Item){
      this.getTotal();    /* Al usar el toggle se actualize el precio */
    }

    getTotal(){  
      this.precioTotalDeLosItems = this.items
                                    .filter(item => item.agregado)  /* Los items que esten agregados al carrito */
                                    .map(item => item.cantidad * item.precio) /* de esos items mapeo la cantidad * el precio*/
                                    .reduce ( (a, b) => a += b); /* por ultimo de todas las cantidades * precio, lo redujo a un solo valor el cual se asignara al precioTotalDeLosItems */ 
    }
} 