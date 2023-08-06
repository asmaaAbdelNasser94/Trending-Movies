import { Component } from '@angular/core';
import * as Aos from 'aos';
import { NgxLoader } from 'ngx-http-loader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public loader = NgxLoader;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    Aos.init({once:true})
  }
}
