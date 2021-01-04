import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-species',
  templateUrl: './show-species.component.html',
  styleUrls: ['./show-species.component.css']
})
export class ShowSpeciesComponent implements OnInit {

  constructor(private service:SharedService) { }

  SpeciesList:any=[];

  ModalTitle:string;
  ActivateAddEditSpeciesComp:boolean=false;
  species:any;

  SpeciesNameFilter:string="";
  SpeciesListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshSpeciesList();
  }

  addClick(){
    this.species={
      SpeciesId:0,
      SpeciesName:""
    }
    this.ModalTitle="Add Fruit";
    this.ActivateAddEditSpeciesComp=true;

  }

  editClick(item: any){
    this.species=item;
    this.ModalTitle="Edit Fruit";
    this.ActivateAddEditSpeciesComp=true;
  }

  deleteClick(item: { SpeciesId: any; }){
    if(confirm('Are you sure?')){
      this.service.deleteSpecies(item.SpeciesId).subscribe(data=>{
        alert(data.toString());
        this.refreshSpeciesList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSpeciesComp=false;
    this.refreshSpeciesList();
  }


  refreshSpeciesList(){
    this.service.getSpeciesList().subscribe(data=>{
      this.SpeciesList=data;
      this.SpeciesListWithoutFilter=data;
    });
  }

  FilterFn(){
    var SpeciesNameFilter = this.SpeciesNameFilter;

    this.SpeciesList = this.SpeciesListWithoutFilter.filter(function (el: { SpeciesId: { toString: () => string; }; SpeciesName: { toString: () => string; }; }){
        return el.SpeciesName.toString().toLowerCase().includes(
          SpeciesNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.SpeciesList = this.SpeciesListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
