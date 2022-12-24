import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataAccessService } from '../Services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private apis: DataAccessService) {

  }
  data: any;


  initializeForm() {
    this.data = ({
      action : "get_travel_from"
    })
  }

  ngOnInit(): void {
    this.initializeForm();
    this.apis.Post('/', this.data).subscribe((res: any) => {
      console.log(res.data);
    });
  }

}
