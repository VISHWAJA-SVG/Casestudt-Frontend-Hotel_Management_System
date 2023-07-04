import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseAPIUrl='http://localhost:5088';
  
  constructor(private http:HttpClient) { }
  getAllBills() : Observable<Bill[]>
     {
  
    return this.http.get<Bill[]>(this.baseAPIUrl + '/Bill');
  
    }
    getBill(bill_id : string): Observable<Bill> 
    {
      return this.http.get<Bill>(this.baseAPIUrl + '/Bill/' + bill_id);

    }
   addBill(addBillRequest:Bill) : Observable<Bill>
   {
     return this.http.post<Bill>(this.baseAPIUrl + '/Bill/', addBillRequest);
 
   }

   updateBill(bill_id:string, updateBillrequest: Bill) : Observable<Bill> 
   {
     return this.http.put<Bill>(this.baseAPIUrl + '/Bill/' + bill_id,updateBillrequest);
 
   }
   deleteBill(bill_id: string): Observable<Bill>{
     return this.http.delete<Bill>(this.baseAPIUrl + '/Bill/' + bill_id);

   }
   generatepdf(bill_id : any){
      return this.http.get(this.baseAPIUrl + '/Bill/generatepdf?id=' + bill_id, {observe:'response',responseType:'blob'});
     
    }
}
