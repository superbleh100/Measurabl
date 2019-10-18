import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from './person';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit, OnDestroy {
  public people: Person[];
  sub: Subscription;

  constructor(private personsService: PersonsService) { }

  ngOnInit() {
    this.sub = this.personsService.getPeople()
      .subscribe(people => this.mergePeople(people[0], people[1]));
  }

  private mergePeople(p1: Person[], p2: Person[]): void {
    this.people = [];
    const allPeople = {};
    p1.forEach(person => {
      allPeople[person.id] = person;
    });

    p2.forEach(person => {
      allPeople[person.id] = {...allPeople[person.id], ...person};
    });

    // tslint:disable-next-line:forin
    for (const id in allPeople) {
      this.people.push(allPeople[id]);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
