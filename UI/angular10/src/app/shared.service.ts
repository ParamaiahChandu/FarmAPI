import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:5001/api";
readonly ImageUrl = "https://localhost:5001/Images";

  constructor(private http:HttpClient) { }

  getSpeciesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/species');
  }

  addSpecies(val:any){
    return this.http.post(this.APIUrl+'/species',val);
  }

  updateSpecies(val:any){
    return this.http.put(this.APIUrl+'/species',val);
  }

  deleteSpecies(val:any){
    return this.http.delete(this.APIUrl+'/species/'+val);
  }


  getSaplingList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sapling');
  }

  addSapling(val:any){
    return this.http.post(this.APIUrl+'/sapling',val);
  }

  updateSapling(val:any){
    return this.http.put(this.APIUrl+'/sapling',val);
  }

  deleteSapling(val:any){
    return this.http.delete(this.APIUrl+'/sapling/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/sapling/SaveFile',val);
  }

  getAllSpeciesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/sapling/GetAllSpeciesNames');
  }

}