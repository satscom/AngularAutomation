import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FundingRequest } from '../funding-request.model';
import { LoanserviceService } from '../loanservice.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor(private loanService: LoanserviceService) { }

  fundingRequest: FundingRequest[];
  displayedColumns: string[] = ['astID', 'status', 'party', 'amount','schedulefunddate','certification'];

  ngOnInit() {
    setTimeout(() => this.setExplicitWaitTime(), 100);
  }

  getFundingRequest() {
    console.log("Implementation required");
  }
  setExplicitWaitTime()  {
    console.log("waiting 11");
    this.loanService.getLoan().subscribe(res =>{this.fundingRequest=res});
  } 

}
