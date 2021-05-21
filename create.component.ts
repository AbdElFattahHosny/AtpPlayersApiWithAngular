import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Countries } from "../countries";
import { PlayersService } from "../players.service";
import { CountriesService } from "../countries.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  countries: Countries[] = [];
  createForm;

  constructor(
    public playersService: PlayersService,
    public countriesService: CountriesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
     
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      age: [''],
      nathionalityId: [''],
      shamionShips: [''],
    });
  }

  ngOnInit(): void {
    this.countriesService.getCountries().subscribe((data: Countries[]) => {
      this.countries = data;
    });
  }

  onSubmit(formData) {
    this.playersService.createPlayer(formData.value).subscribe(res => {
      this.router.navigateByUrl('players/list');
      alert("Created Succesfully");
    },
      err => { console.log(err); }
    );
  }
}
