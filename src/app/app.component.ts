import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
 // contacts: Observable<any[]>;
  btnText = 'Add a contact';
  firstName = '';
  //constructor(db: AngularFirestore) {
    //this.contacts = db.collection('contact').valueChanges();
  //}

  constructor(afDb: AngularFireDatabase) {
    const afList = afDb.list('contact');
    afList.push({ name: this.firstName });
    const listObservable = afList.snapshotChanges();
    listObservable.subscribe();
  }
}
