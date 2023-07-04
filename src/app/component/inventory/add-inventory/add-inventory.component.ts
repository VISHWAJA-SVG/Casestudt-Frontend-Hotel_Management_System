import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent  implements OnInit{
  
  createInventoryRequest : Inventory={
    inventory_Id: '',
    quantity: 0,
    inventory_Name: '',
   
  };
  
  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit(): void {
    
  }
  createInventory(){
    this.inventoryService.createInventory(this.createInventoryRequest)
    .subscribe({
     next:(inventory: any) =>{
      console.log(inventory);
       this.router.navigate(['/inventory']);
       
     }
    })
   }
  
 
 }
 
