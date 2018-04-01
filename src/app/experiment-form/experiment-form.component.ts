import { Component, OnInit } from '@angular/core';
import { Experiment } from '../experiment';
import { EXPERIMENTS } from '../mock-experiments';

@Component({
  selector: 'app-experiment-form',
  templateUrl: './experiment-form.component.html',
  styleUrls: ['./experiment-form.component.css']
})
export class ExperimentFormComponent implements OnInit {
  experiment = new Experiment("", "", "", "");

  onSubmit() {
    // alert("onSubmit is working!");
    EXPERIMENTS.unshift(
      new Experiment(this.experiment.assumption, this.experiment.test, this.experiment.metric, this.experiment.criteria)
    );
  }

  constructor() { }

  ngOnInit() {
  }

}
