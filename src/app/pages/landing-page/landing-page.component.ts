import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import * as Aos from 'aos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  ngOnInit(): void {
    Aos.init();
  }

  scrollFeatures() {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  scrollRoles(){
    document.getElementById('roles')?.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest'
    })
  }

  scrollTop(){
    console.log("test");
    document.getElementById('top')?.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest'
    })
  }
}
