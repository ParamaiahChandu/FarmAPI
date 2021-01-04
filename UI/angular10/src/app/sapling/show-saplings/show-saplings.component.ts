import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-saplings',
  templateUrl: './show-saplings.component.html',
  styleUrls: ['./show-saplings.component.css']
})
export class ShowSaplingsComponent implements OnInit {

  constructor(private service: SharedService) { }

  SaplingList: any = [];
  ModalTitle: string;
  ActivateAddEditSaplingComp: boolean = false;
  sapling: any;
  
  ngOnInit(): void {
    this.refreshSaplingList();
  }

  addClick(){
    this.sapling = {
      SaplingId: 0,
      SaplingName: "",
      Species: "",
      DateOfPlantation: "",
      PhotoFileName: "FarmHouse.jpg"
    }
    this.ModalTitle = "Add Variety";
    this.ActivateAddEditSaplingComp = true;
  }

  editClick(item: any){    
    console.log(item);
    this.sapling = item;
    this.ModalTitle = "Edit Variety";
    this.ActivateAddEditSaplingComp = true;
  }

  deleteClick(item: { SaplingId: any; }){
    if(confirm('Are you sure?')){
      this.service.deleteSapling(item.SaplingId).subscribe(data => {
        alert(data.toString());
        this.refreshSaplingList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditSaplingComp = false;
    this.refreshSaplingList();
  }

  refreshSaplingList(){
    this.service.getSaplingList().subscribe(data=>{
      this.SaplingList = data;
    });
  }

}