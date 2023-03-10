import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

interface Lab{
  id: number;
  name: string;
  state: boolean;
  image: string;
}

@Component({
  selector: 'app-list-l',
  templateUrl: './list-l.component.html',
  styleUrls: ['./list-l.component.css']
})
export class ListLComponent implements OnInit{
  constructor(private adminService: AdminService, private router: Router) {

  }

  labs!: [Lab];

  ngOnInit(): void {
    this.adminService.labIndex().subscribe((data) => {
      this.labs = data
    });
    console.log(this.labs)
  }
}
