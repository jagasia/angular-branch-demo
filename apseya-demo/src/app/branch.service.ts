import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  url:string='http://localhost:8081/branch';
  constructor(private http:HttpClient) { }

  addBranch(branch:any)
  {
    return this.http.post(this.url,branch);
  }
  findBranchById(id:any)
  {
    return this.http.get(this.url+"/"+id);
  }
  getAllBranches()
  {
    return this.http.get(this.url);
  }
}
