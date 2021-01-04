import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-species',
  templateUrl: './add-edit-species.component.html',
  styleUrls: ['./add-edit-species.component.css']
})
export class AddEditSpeciesComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() species: any;
  SpeciesId: string;
  SpeciesName: string;

  ngOnInit(): void {
    this.SpeciesId = this.species.SpeciesId;
    this.SpeciesName = this.species.SpeciesName;
  }

  addSpecies(){
    var val = {SpeciesId: this.SpeciesId,
                SpeciesName: this.SpeciesName
              };
    this.service.addSpecies(val).subscribe(res => {alert(res.toString());
    });
  }

  updateSpecies(){
    var val = {SpeciesId: this.SpeciesId,
      SpeciesName: this.SpeciesName
    };
    this.service.updateSpecies(val).subscribe(res => {alert(res.toString());
    });
  }

}