import { Component, OnInit , ViewChild} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import { MatSort,MatTableDataSource , MatPaginator, MatInputModule } from '@angular/material';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  displayedColumns = ['id', 'title', 'url'];
  dataSource = new MatTableDataSource<User>();
  constructor(private userService: UserService) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
//Getting data from API in ONInit cycle hook
  ngOnInit() {
    this.getUserData();
  }
//Filltering the displayed data in the table  based in user input  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
 // subscribe to the ovesevable to get the desired data  
  public getUserData = () => {
    this.userService.getUser()
    .subscribe(res => {
      this.dataSource.data = res as User[];
    })
  }
 //adding the sort and the pagination in AfterViewInit cycle hook to be sure that all is rendered 
   ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}