import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../models/inventory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  baseAPIUrl='http://localhost:5088';
  
    constructor(private http:HttpClient) { }
    getAllInventories() : Observable<Inventory[]>
     {
  
    return this.http.get<Inventory[]>(this.baseAPIUrl + '/Inventory');
  
    }
    getInventory(inventory_Id : string): Observable<Inventory> 
    {
      return this.http.get<Inventory>(this.baseAPIUrl + '/Inventory/' + inventory_Id);

    }
    createInventory(inventory:Inventory) : Observable<Inventory> {
      const httpOptions={headers : new HttpHeaders({'content-Type':'application/json'})}
      return this.http.post<Inventory>(this.baseAPIUrl + '/Inventory', inventory, httpOptions);
  
    }

    updateInventory(inventory_Id:string ,inventory:Inventory) : Observable<Inventory> {
      const httpOptions={headers : new HttpHeaders({'content-Type':'application/json'})}
      return this.http.put<Inventory>(this.baseAPIUrl + '/Inventory/' + inventory_Id, inventory, httpOptions);
  
    }
  
    
    deleteInventory(inventory_Id: string): Observable<Inventory>{
      return this.http.delete<Inventory>(this.baseAPIUrl + '/Inventory/' + inventory_Id);

    }
  
}
