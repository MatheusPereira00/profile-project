import { Component, Input, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
} from '@angular/router';

import { Store } from '@ngrx/store';
import * as fromRoot from '@app/app.reducer';
import * as LOADING from '@shared/store/loading/loading.actions';

@Component({
  selector: 'app-loading',
  template: `
    <div class="spinner-container">
      <p-progressSpinner
        [style]="{ width: '100px', height: '100px' }"
        styleClass="custom-spinner"
        strokeWidth="4"
        fill="#e0efef"
        animationDuration="1s"></p-progressSpinner>
    </div>
  `,
  styles: [
    `
      .spinner-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.32);
        z-index: 20000;
      }

      :host ::ng-deep .custom-spinner .p-progress-spinner-circle {
        animation: custom-progress-spinner-dash 1.5s ease-in-out infinite,
          custom-progress-spinner-color 0.5s ease-in-out infinite;
      }

      @keyframes custom-progress-spinner-color {
        100%,
        0% {
          stroke: #21367f;
        }
        40% {
          stroke: #194e91;
        }
        66% {
          stroke: #068bc0;
        }
        80%,
        90% {
          stroke: #0298ca;
        }
      }

      @keyframes custom-progress-spinner-dash {
        0% {
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -35px;
        }
        100% {
          stroke-dasharray: 89, 200;
          stroke-dashoffset: -124px;
        }
      }
    `,
  ],
})
export class LoadingComponent implements OnInit {
  @Input() public detectRoutingOngoing = false;

  constructor(private router: Router, private store: Store<fromRoot.AppState>) {}

  public ngOnInit(): void {
    if (this.detectRoutingOngoing) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationStart || event instanceof RouteConfigLoadStart) {
          this.store.dispatch(LOADING.StartLoading());
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationError ||
          event instanceof NavigationCancel ||
          event instanceof RouteConfigLoadEnd
        ) {
          this.store.dispatch(LOADING.StopLoading());
        }
      });
    }
  }
}
