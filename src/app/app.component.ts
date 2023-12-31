import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet>
      <p-toast
        [breakpoints]="{
          '500px': { width: '90%', marginRight: '0rem', marginLeft: '1%' }
        }"
        [showTransformOptions]="'translateX(95%)'"
        [baseZIndex]="10000"></p-toast>
      <app-loading *ngIf="isLoading" [detectRoutingOngoing]="false"></app-loading>
    </router-outlet>
  `,
  styles: [``],
})
export class AppComponent implements OnInit {
  public isLoading = false;

  public menuMode = 'static';

  public config: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  public ngOnInit(): void {
    this.setDefaultConfig();
  }

  public setDefaultConfig(): void {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }
}
