import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sortPref = "title";
  }
  public sortChange = false;
  public sortPref;
  toggleSort() {
    this.sortChange = !this.sortChange;
  }
  changeSort(evt: any) {
    //ovo ce ti trebati posle kad budes implementirao search
    //var target = evt.target;
    //if (target.checked) {
    //  console.log(target.value);
    //}
  }
}
