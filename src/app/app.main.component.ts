import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppComponent } from './app.component';

import { Subscription } from 'rxjs';
import { AppConfig } from '@config/models/appconfig';
import { ConfigService } from '@config/services/app.config.service';
@Component({
  selector: 'app-main',
  templateUrl: './app.main.component.html',
  animations: [
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: '0px',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
})
export class AppMainComponent implements AfterViewInit, OnDestroy, OnInit {
  public menuInactiveDesktop: boolean;

  public menuActiveMobile: boolean;

  public overlayMenuActive: boolean;

  public staticMenuInactive = false;

  public profileActive: boolean;

  public topMenuActive: boolean;

  public topMenuLeaving: boolean;

  public theme: string;

  public documentClickListener: () => void;

  public menuClick: boolean;

  public topMenuButtonClick: boolean;

  public configActive: boolean;

  public configClick: boolean;

  public config: AppConfig;

  public subscription: Subscription;

  constructor(
    public renderer: Renderer2,
    public app: AppComponent,
    public configService: ConfigService
  ) {}

  public ngOnInit(): void {
    this.config = this.configService.config;

    this.subscription = this.configService.configUpdate$.subscribe(
      config => (this.config = config)
    );
  }

  public ngAfterViewInit(): void {
    // hides the overlay menu and top menu if outside is clicked
    this.documentClickListener = this.renderer.listen('body', 'click', () => {
      if (!this.isDesktop()) {
        if (!this.menuClick) {
          this.menuActiveMobile = false;
        }

        if (!this.topMenuButtonClick) {
          this.hideTopMenu();
        }
      } else {
        if (!this.menuClick && this.isOverlay()) {
          this.menuInactiveDesktop = true;
        }
        if (!this.menuClick) {
          this.overlayMenuActive = false;
        }
      }

      if (this.configActive && !this.configClick) {
        this.configActive = false;
      }

      this.configClick = false;
      this.menuClick = false;
      this.topMenuButtonClick = false;
    });
  }

  public toggleMenu(event: Event): void {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.app.menuMode === 'overlay') {
        if (this.menuActiveMobile === true) {
          this.overlayMenuActive = true;
        }

        this.overlayMenuActive = !this.overlayMenuActive;
        this.menuActiveMobile = false;
      } else if (this.app.menuMode === 'static') {
        this.staticMenuInactive = !this.staticMenuInactive;
      }
    } else {
      this.menuActiveMobile = !this.menuActiveMobile;
      this.topMenuActive = false;
    }

    event.preventDefault();
  }

  public toggleProfile(event: Event): void {
    this.profileActive = !this.profileActive;
    event.preventDefault();
  }

  public toggleTopMenu(event: Event): void {
    this.topMenuButtonClick = true;
    this.menuActiveMobile = false;

    if (this.topMenuActive) {
      this.hideTopMenu();
    } else {
      this.topMenuActive = true;
    }

    event.preventDefault();
  }

  public hideTopMenu(): void {
    this.topMenuLeaving = true;
    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 1);
  }

  public onMenuClick(): void {
    this.menuClick = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  public onConfigClick(_event: Event): void {
    this.configClick = true;
  }

  public isStatic(): boolean {
    return this.app.menuMode === 'static';
  }

  public isOverlay(): boolean {
    return this.app.menuMode === 'overlay';
  }

  public isDesktop(): boolean {
    return window.innerWidth > 1024;
  }

  public isMobile(): boolean {
    return window.innerWidth < 1024;
  }

  public onSearchClick(): void {
    this.topMenuButtonClick = true;
  }

  public ngOnDestroy(): void {
    if (this.documentClickListener) {
      this.documentClickListener();
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
