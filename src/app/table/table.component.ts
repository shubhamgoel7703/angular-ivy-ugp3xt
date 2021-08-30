import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  tableData = [];
  filteredTableData = [];
  @Input('queryObject')
  queryObject = {};
  addCandidateFirstName = '';
  addCandidateLastName = '';
  addCandidateEmail = '';
  addCandidateGender = 'Male';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.queryObject.currentValue);

    this.filteredTableData = this.tableData
      .filter(candidate => {
        if (
          changes.queryObject.currentValue.maleStatus &&
          changes.queryObject.currentValue.femaleStatus
        )
          return candidate.gender == 'Male' || candidate.gender == 'Female';
        else if (changes.queryObject.currentValue.maleStatus)
          return candidate.gender == 'Male';
        else if (changes.queryObject.currentValue.femaleStatus)
          return candidate.gender == 'Female';
      })
      .filter(candidate => {
        if (changes.queryObject.currentValue.inputQuery)
          return (
            candidate.first_name.includes(
              changes.queryObject.currentValue.inputQuery
            ) ||
            candidate.last_name.includes(
              changes.queryObject.currentValue.inputQuery
            ) ||
            candidate.email.includes(
              changes.queryObject.currentValue.inputQuery
            )
          );
        return true;
      });
  }

  ngOnInit() {
    this.tableData = [
      {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female'
      },
      {
        id: 2,
        first_name: 'Giavani',
        last_name: 'Frediani',
        email: 'gfrediani1@senate.gov',
        gender: 'Male'
      },
      {
        id: 3,
        first_name: 'Noell',
        last_name: 'Bea',
        email: 'nbea2@imageshack.us',
        gender: 'Female'
      },
      {
        id: 4,
        first_name: 'Willard',
        last_name: 'Valek',
        email: 'wvalek3@vk.com',
        gender: 'Male'
      }
    ];
    this.filteredTableData = this.tableData;
  }

  addCandidate() {
    if (
      !this.addCandidateFirstName &&
      !this.addCandidateLastName &&
      !this.addCandidateEmail
    ) {
      alert('Please enter full details to add a candidate');
      return;
    } else {
      let obj = {
        id: this.tableData.length + 1,
        first_name: this.addCandidateFirstName,
        last_name: this.addCandidateLastName,
        email: this.addCandidateEmail,
        gender: this.addCandidateGender
      };
      this.tableData.push(obj);
      this.addCandidateFirstName = '';
      this.addCandidateLastName = '';
      this.addCandidateEmail = '';
      this.addCandidateGender = 'Male';
    }
  }
}
