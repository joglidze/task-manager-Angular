import { Component } from '@angular/core';

@Component({
  selector: 'app-roles-section',
  templateUrl: './roles-section.component.html',
  styleUrls: ['./roles-section.component.scss'],
})
export class RolesSectionComponent {
  isExpanded: boolean = true;
  isExpanded1: boolean = true;
  isExpanded2: boolean = true;

  expanded() {
    this.isExpanded = !this.isExpanded;
  }
  expended1() {
    this.isExpanded1 = !this.isExpanded1;
  }
  expended2() {
    this.isExpanded2 = !this.isExpanded2;
  }
}
