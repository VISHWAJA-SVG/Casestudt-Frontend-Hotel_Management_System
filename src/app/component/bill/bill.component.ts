import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { BillService } from 'src/app/services/bill.service';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent  implements OnInit{

  billDetails:Bill={
    bill_id: '',
    stay_dates: 0,
    room_id: '',
    reservation_id :''
  }
   
  bill_id2!: string;



  constructor(private route : ActivatedRoute, private billService : BillService , private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const bill_id=params.get('bill_id');

        if(bill_id){
          this.billService.getBill(bill_id).subscribe({
            next:(response)=>{
              this.billDetails=response;
            }
          })

        }
      }
    })
  }
    
    fetchBill(bill_id:any){
      // this.redirect("pdf");
      this.billService.generatepdf(bill_id).subscribe(res=>{
       let blob:Blob=res.body as Blob;
       let url= window.URL.createObjectURL(blob);
 
       let a=document.createElement('a');
       a.download=bill_id;
       a.href=url;
       a.click();
      });
     }
 
      redirect(redirect:any) {
        this.router.navigate([redirect]);
         }
 

        
       
}


