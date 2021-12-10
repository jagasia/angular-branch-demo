import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BranchService } from '../branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branchForm:any;
  branches:any;
  constructor(private fb:FormBuilder, private bs:BranchService) { 
    this.branchForm=this.fb.group({
      bid:[''],
      bname:[''],
      bcity:['']
    });
  }

  ngOnInit(): void {

    this.bs.getAllBranches().subscribe(data=>{
      this.branches=data;
      console.log(data);
    });
  }

  fnSelect(bid:any)
  {
    this.bs.findBranchById(bid).subscribe(data=>{
      //the data is an object of Branch received from rest api. Patch this object to the form
      this.branchForm.patchValue(data);
    });
  }

  fnAddBranch()
  {
    var branch=this.branchForm.value;
    this.bs.addBranch(branch).subscribe();
  }
}
