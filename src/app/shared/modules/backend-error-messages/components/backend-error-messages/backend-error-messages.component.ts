import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../../../types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsInput: BackendErrorsInterface;

  errorMessages!: string[];

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsInput).map(
      (name: string) => {
        const messages = this.backendErrorsInput[name].join(', ');

        return `${name} ${messages}`;
      }
    );
  }
}
