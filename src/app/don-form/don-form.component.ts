import { Component } from '@angular/core';

import { DonForm }    from '../don-form';

@Component({
  selector: 'app-don-form',
  templateUrl: './don-form.component.html',
  styleUrls: ['./don-form.component.css']
})
export class DonFormComponent {

  countries = ['India', 'South Africa',
            'England', 'America'];

  model = new DonForm(1, 'Deepak', 'deepakjanmanchi@gmail.com',8500692133, 20000, this.countries[0]);

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}