import { Component } from '@angular/core';
import { Contact }    from './contact';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent {
    items: FirebaseListObservable<any>;
   constructor(af: AngularFire) {
    this.items = af.database.list('/contacts');
   }
   addItem(name: string, email:string, message: string) {
   this.items.push({ name: name, email: email, message: message  });
 }

model = new Contact(18, '', '', '');
    submitted = false;

  onSubmit() {
    this.submitted = true;
    this.addItem(this.model.name, this.model.email, this.model.message);
    console.log(this.model);
  }
}
