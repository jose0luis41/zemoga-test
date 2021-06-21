import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Candidate} from '../../model/candidate';

@Component({
  selector: 'app-candidate-tablet',
  templateUrl: './candidate-tablet.component.html',
  styleUrls: ['./candidate-tablet.component.scss']
})
export class CandidateTabletComponent implements OnInit {

  @Input() Candidate: Candidate;
  @Input() candidateThumpUpPressed: boolean;
  @Input() candidateThumpDownPressed: boolean;

  @Output() candidateUpdated = new EventEmitter<Candidate>();

  candidate: Candidate;
  candidateMessage: object;

  thumbUp: object;
  thumbDown: object;

  @Output() sendVote = new EventEmitter<object>();

  votePressed: boolean;

  constructor() { }

  ngOnInit(): void {

    // @ts-ignore
    this.candidate = this.Candidate;
    if (this.candidate.totalVotes === 0) {
      this.thumbUp = {
        percentage: 50,
        value: 0
      };
      this.thumbDown = {
        percentage: 50,
        value: 0
      };
    } else {
      this.thumbUp = {
        percentage: 0,
        value: 0
      };
      this.thumbDown = {
        percentage: 0,
        value: 0
      };
      this.calculatePercentage();
    }


  }

  calculatePercentage() {
    // @ts-ignore
    this.thumbDown.percentage = Number(((this.candidate.thumbDownVotes / this.candidate.totalVotes) * 100).toFixed());
    // @ts-ignore
    this.thumbDown.value = Number(((this.candidate.thumbDownVotes / this.candidate.totalVotes) * 100).toFixed());

    // @ts-ignore
    this.thumbUp.percentage =  Number(((this.candidate.thumbUpVotes / this.candidate.totalVotes) * 100).toFixed());
    // @ts-ignore
    this.thumbUp.value = Number(((this.candidate.thumbUpVotes / this.candidate.totalVotes) * 100).toFixed());
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
  }

  receiveVote($event) {
    this.candidateMessage = $event;
    // @ts-ignore
    this.candidate.thumUpPressed = this.candidateMessage.candidateThumpUpPressed;
    // @ts-ignore
    this.candidate.thumDownPressed = this.candidateMessage.candidateThumpDownPressed;
    this.candidate.totalVotes++;
    // @ts-ignore
    this.candidate.thumbUpVotes += this.candidateMessage.candidateThumpUpPressed ? 1 : 0;
    // @ts-ignore
    this.candidate.thumbDownVotes += this.candidateMessage.candidateThumpDownPressed ? 1 : 0;

    this.candidateUpdated.emit(this.candidate);
    this.calculatePercentage();
  }

}
