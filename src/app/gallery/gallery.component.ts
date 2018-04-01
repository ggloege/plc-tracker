import { Component, OnInit } from '@angular/core';
import { Experiment } from '../experiment';
import { EXPERIMENTS } from '../mock-experiments';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  experiment: Experiment = {
    assumption: "higher ed students will pay $0.99 for an expert deck when studying for an exam.",
    test: "drive our pilot participants to a landing page that offers them specific expert decks for...",
    metric: "the % of students who click the link to look at the decks.",
    criteria: "more than 50% of the students click the link."
  };

  experiments = EXPERIMENTS;

  constructor() { }

  ngOnInit() {
  }

}
