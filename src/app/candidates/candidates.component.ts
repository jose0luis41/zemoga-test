import {Component, OnInit} from '@angular/core';
import {Candidate} from '../model/candidate';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})

export class CandidatesComponent implements OnInit {

  public candidates: Array<Candidate> = JSON.parse(localStorage.getItem('candidates')) === null ?
    [
      { 'id': '1', 'name': 'Kanye', 'lastname': 'West', 'topic': 'Entertainment', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'kanye2x.png',
        'urlTablet': 'kanye-small2x.png'
      },
      { 'id': '2', 'name': 'Mark', 'lastname': 'Zuckerberg', 'topic': 'Bussiness', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'mark2x.png',
        'urlTablet': 'mark-small2x.png'

      },
      { 'id': '3', 'name': 'Cristina', 'lastname': 'Fernández de Kirchner', 'topic': 'Politics', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'cristina2x.png',
        'urlTablet': 'cristina-small2x.png'
      },
      { 'id': '4', 'name': 'Malala', 'lastname': 'Yousafzai', 'topic': 'Art', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'malala2x.png',
        'urlTablet': 'malala-small2x.png'

      },
      { 'id': '5', 'name': 'Elon', 'lastname': 'Musk', 'topic': 'Bussiness', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'elon2x.png',
        'urlTablet': 'elon-small2x.png'
      },
      { 'id': '6', 'name': 'Greta', 'lastname': 'Thunberg', 'topic': 'Politics', 'totalVotes': 0,
        'thumbUpVotes': 0, 'thumbDownVotes': 0, 'thumUpPressed': false, 'thumDownPressed': false,
        'description': 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit…',
        'url': 'greta2x.png',
        'urlTablet': 'greta-small2x.png'
      }
    ] : JSON.parse(localStorage.getItem('candidates'));

  //public options: Array<any> =

  options: any[] = [{'name': 'List'}, {'name': 'Grid'}];

  valueSelected: string = 'List';
  showListView: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  getCandidateUpdated(event) {
    localStorage.setItem('candidates', JSON.stringify(this.candidates));
  }

  getCurrentOption(){
    if(this.valueSelected === 'List'){
      this.showListView = true;
    }else{
      this.showListView = false;
    }
  }
}
