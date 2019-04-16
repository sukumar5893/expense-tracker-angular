import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
@Component({
  selector: 'app-limitprogress',
  templateUrl: './limitprogress.component.html',
  styleUrls: ['./limitprogress.component.css']
})
export class LimitprogressComponent implements OnInit {
  result = 0;
  constructor(
    private userService: UserService
  ) { }

  async ngOnInit() {

    const limitData = await this.userService.getLimitData()
    console.log(limitData)
    const userLimitData = Object.values(limitData)
    console.log(userLimitData)
    return this.result = userLimitData[0];

  }

}
