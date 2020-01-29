import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-manager-dailyreport',
  templateUrl: './manager-dailyreport.component.html',
  styleUrls: ['./manager-dailyreport.component.css']
})
export class ManagerDailyreportComponent implements OnInit {
  orderIdForHomeDelivery: any;
  orderIdForDineIn: any;
  totalHD: any;
  totalDI: any;
  totalForHomeDelivery = 0;
  totalForDineIn = 0;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrderIdForHomeDeliverySaleReport().subscribe((res) => {
      this.orderIdForHomeDelivery = res;
      for (let i = 0; i < this.orderIdForHomeDelivery.length; i++) {
        this.service.getOrderAmtForSaleReport(this.orderIdForHomeDelivery[i]).subscribe((res) => {
          this.totalHD = res;
          for (let j = 0; j < this.totalHD.length; j++) {
            this.totalForHomeDelivery = this.totalForHomeDelivery + this.totalHD[j]
          }
        })
      }
    })
    this.service.getOrderIdForDineInSaleReport().subscribe((res) => {
      this.orderIdForDineIn = res;
      for (let i = 0; i < this.orderIdForDineIn.length; i++) {
        this.service.getOrderAmtForSaleReport(this.orderIdForDineIn[i]).subscribe((res) => {
          this.totalDI = res;
          for (let j = 0; j < this.totalDI.length; j++) {
            this.totalForDineIn = this.totalForDineIn + this.totalDI[j]
          }
        })
      }
    })
  }

}
