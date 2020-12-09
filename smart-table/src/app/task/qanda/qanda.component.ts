import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: any[] = [
  {question: 'Sort and Search by table?', answer: 'Can be seen in the "uc-table" component, @Input details found in "table component" page, custom filter can be used by passing Input "filterDropdown" == true'},
  {question: 'Persist sorting on refresh?', answer: 'Unable to do so in this current version, but a work around can be done by saving "th" in the browsers localStorage'},
  {question: 'Input and Output?', answer: 'player card takes in inputs as a presenter component and emits data via. output to parent components'},
  {question: 'Observables?', answer: 'Async calling on the players api, used on the players component. ng-template used for html conditional logic'},
  {question: 'Drag and Drop columns?', answer: 'Re-organize column index value seen in "uc-table"'},
  {question: 'Ability to resize?', answer: '"uc-table" allows resizing by passing Input resizable == true, done by CSS'},
  {question: 'NgRx used?', answer: 'State Management of total free agents can be seen on the "nba players" page'},
  {question: 'Table Pagination?', answer: '"uc-table" allows pagination by passing Input pagination == true, Material API and invoked by defining @Input boolean'},
  {question: 'External API?', answer: 'Free API being used for "nba teams" and "nba player" "https://www.balldontlie.io"'},
  {question: 'Angular rxjs?', answer: 'Observables and subscribers used for "nba teams" and "nba players", Behavior subject added to "nba.service.ts" for future use'},
  {question: 'Angular Lazy Loading?', answer: 'Lazy Loading used for all routed pages, to improve performance of initial load, and reduce un-used service calls'},
  {question: 'Angular Architecture?', answer: 'Modulization to group resource responsibility within teams, Shared.module.ts for reusable components within the app exp. "uc-table"'},
  {question: 'Time Spent? ', answer: '4.5 hrs spent, Majority of the time spent on Architecture, understanding tools provided from Materials API, and defining the complexity of the "uc-table" component'}
]

@Component({
  selector: 'app-qanda',
  templateUrl: './qanda.component.html',
  styleUrls: ['./qanda.component.scss']
})
export class QandaComponent implements OnInit {
  questions = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
