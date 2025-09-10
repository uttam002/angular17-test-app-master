import { Component, OnInit } from '@angular/core';
import { AdvanceCardComponent } from "../../../../shared/components/advance-card/advance-card.component";
import { InfoPanelComponent } from "../info-pannel/info-pannel.component";
import { LoginFormComponent } from "./login-form/login-form.component";

@Component({
  selector: 'test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [AdvanceCardComponent, InfoPanelComponent, LoginFormComponent],
  standalone: true
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
