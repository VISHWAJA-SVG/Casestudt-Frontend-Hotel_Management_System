import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from 'src/app/models/inventory';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent  implements OnInit{
  InventoryDetails:Inventory={
    inventory_Id: '',
    inventory_Name: '',
    quantity: 0,
  
  }

  constructor(private route : ActivatedRoute, private inventoryService : InventoryService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const inventory_Id=params.get('inventory_id');

        if(inventory_Id){
          this.inventoryService.getInventory(inventory_Id).subscribe({
            next:(response: Inventory)=>{
              console.log(response);
              this.InventoryDetails=response;

           
            }
          })

        }
      }
    })
    
  }
  updateInventory(){
    this.inventoryService.updateInventory(this.InventoryDetails.inventory_Id, this.InventoryDetails).subscribe({
      next:(response)=>{
        console.log(response);
        this.router.navigate(['/inventory']);
      }
    });
      
 }
  deleteInventory(inventory_Id:string){
    this.inventoryService.deleteInventory(inventory_Id).subscribe({
      next:(response)=>{
        this.router.navigate(['/inventory']);
      }

    });
    
  }  

 

}

