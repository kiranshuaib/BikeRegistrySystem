import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
models: string[] = [
  'Globo MTB 29 Full Suspension',
  'Globo Carbon Fiber Race Series',
  'Globo Time Trial Blade'
];
bikeform: FormGroup;
validMessage = '';

  constructor(private bikeService: BikeService) { }

  ngOnInit(): void {
    this.bikeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  // tslint:disable-next-line:typedef
  submitRegistration(){
    // @ts-ignore
    if (this.bikeform.valid){
      this.validMessage = 'Your Bike Registration has been submitted. Thank you!';
      this.bikeService.createBikeRegistration(this.bikeform.value).subscribe(
        data => {
          this.bikeform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      // @ts-ignore
      this.validMessage = 'Please fill out the form before submitting';
    }
  }

}
