import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent {
  addBillRequest : Bill={
    bill_id: '',
    stay_dates: 0,
    room_id: '',
    reservation_id: ''
  };
  constructor( private billService : BillService,private router: Router){}

  ngOnInit(): void {
    
  }

  addbill(){
    this.billService.addBill(this.addBillRequest)
    .subscribe({
     next:(bill) =>{
       this.router.navigate(['/bill']);
     }
    })
   }
}
