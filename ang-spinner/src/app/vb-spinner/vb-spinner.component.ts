import { Component, OnInit } from '@angular/core';
import { VbService } from '../vb.service';

@Component({
  selector: 'vb-spinner',
  templateUrl: './vb-spinner.component.html',
  styleUrls: ['./vb-spinner.component.css']
})
export class VbSpinnerComponent implements OnInit {

  constructor(private vbService: VbService) {
    // this.vbService.setOverlay.next(false);
  }

  ngOnInit() {
  }
}
