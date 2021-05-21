import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Player } from "../player";
import { Countries } from "../countries";
import { PlayersService } from "../players.service";
import { CountriesService } from "../countries.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  player: Player;
  countries: Countries[] = [];
  editForm;

  constructor(
    public playersService: PlayersService,
    public countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      age: [''],
      nathionalityId: [''],
      shamionShips: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['playerId'];

    this.countriesService.getCountries().subscribe((data: Countries[]) => {
      this.countries = data;
    });

    this.playersService.getPlayer(this.id).subscribe((data: Player) => {
      this.player = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.playersService.updatePlayer(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
      alert("edited Succesfully");
    },
    
  err => { console.log(err); });
  }
}
