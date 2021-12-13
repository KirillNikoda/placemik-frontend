import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private apollo: Apollo) {}

  buildQuery() {
    return gql`
      query getCountries {
        countries {
          name
        }
      }
    `;
  }

  ngOnInit() {
    this.apollo
      .query({
        query: this.buildQuery(),
      })
      .subscribe(({ data }: any) => (this.todos = data.countries));
  }
}
