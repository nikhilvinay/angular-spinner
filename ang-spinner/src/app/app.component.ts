import { Component } from '@angular/core';
import { VbService } from './vb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private vbService: VbService) {

  }

  showSpinner() {
    this.vbService.show();
    setTimeout(() => {
      this.hideSpinner();
    }, 5000);
  }

  hideSpinner() {
    this.vbService.hide();
  }

}
