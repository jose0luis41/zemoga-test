import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatButton,
    MatIcon
  ],
  providers: [],

})
export class CandidateDetailsComponent implements OnInit {

  @Input() candidateName: string;
  @Input() candidateLastName: string;
  @Input() candidateTopic: string;
  @Input() candidateThumpUpPressed: boolean;
  @Input() candidateThumpDownPressed: boolean;
  @Input() candidateDescription: boolean;
  @Input() percentageUp: object;
  @Input() percentageDown: object;
  @Input() isListLayout: boolean;


  @Output() sendVote = new EventEmitter<object>();

  votePressed: boolean;
  description: string;
  mobile: boolean;

  constructor() { }

  ngOnInit(): void {
    this.votePressed = false;
  }

  public setButtonStyle(event, buttonPressed) {
    if (buttonPressed) {
      this.candidateThumpUpPressed = true;
      this.candidateThumpDownPressed = false;
    } else {
      this.candidateThumpUpPressed = false;
      this.candidateThumpDownPressed = true;
    }
  }

  public vote(event) {
    this.votePressed = true;
    //this.description = 'Thanks you for voting'
    this.sendVote.emit(
      {candidateThumpUpPressed : this.candidateThumpUpPressed,
         candidateThumpDownPressed: this.candidateThumpDownPressed
      }
      );
  }

  public voteAgain(event) {
    this.candidateThumpUpPressed = false;
    this.candidateThumpDownPressed = false
    this.votePressed = false;
    this.description = 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…';
  }
}
