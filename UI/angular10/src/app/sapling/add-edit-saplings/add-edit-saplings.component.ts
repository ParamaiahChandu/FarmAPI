import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-saplings',
  templateUrl: './add-edit-saplings.component.html',
  styleUrls: ['./add-edit-saplings.component.css']
})
export class AddEditSaplingsComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() sapling: any;
  SaplingId: string;
  SaplingName: string;
  Species: string;
  DateOfPlantation: string;
  PhotoFileName: string;
  PhotoFilePath: string;

  SpeciesList: any = [];

  ngOnInit(): void {
    this.loadSpeciesList();
  }

  loadSpeciesList(){
    this.service.getAllSpeciesNames().subscribe((data:any) => {
    this.SpeciesList = data;

    this.SaplingId = this.sapling.EmployeeId;
    this.SaplingName = this.sapling.SaplingName;
    this.Species = this.sapling.Species;
    this.DateOfPlantation = this.sapling.DateOfPlantation;
    this.PhotoFileName = this.sapling.PhotoFileName;
    this.PhotoFilePath = this.service.ImageUrl + this.PhotoFileName;
    });
  }

  addSapling(){
    var val = {SaplingId: this.SaplingId,
                SaplingName: this.SaplingName,
                Species: this.Species,
                DateOfPlantation: this.DateOfPlantation,
                PhotoFileName: this.PhotoFileName
              };
    this.service.addSapling(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateSapling(){
    var val = {SaplingId: this.SaplingId,
      SaplingName: this.SaplingName,
      Species: this.Species,
      DateOfPlantation: this.DateOfPlantation,
      PhotoFileName: this.PhotoFileName
    };
    this.service.updateSapling(val).subscribe(res => {
      alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.UploadPhoto(formData).subscribe((data:any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.ImageUrl + this.PhotoFileName;
    })
  }

}