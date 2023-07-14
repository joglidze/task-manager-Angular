import { Component } from '@angular/core';

@Component({
  selector: 'app-productivity-section',
  templateUrl: './productivity-section.component.html',
  styleUrls: ['./productivity-section.component.scss'],
})
export class ProductivitySectionComponent {
  favoriteSeason?: string;
  seasons: string[] = [
    'Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”',
    'The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.',
    'Manage any project from start to finish with highly customizable views that make project planning a breeze.',
  ];
}
