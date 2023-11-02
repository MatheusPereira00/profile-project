import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppConfig } from '@config/models/appconfig';
import { ConfigService } from '@config/services/app.config.service';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

@Component({
  selector: 'app-config',
  templateUrl: './app.config.component.html',
})
export class AppConfigComponent implements OnInit, OnDestroy {
  public scale = 14;

  public scales: number[] = [12, 13, 14, 15, 16];

  public config: AppConfig;

  public subscription: Subscription;

  constructor(
    public app: AppComponent,
    public appMain: AppMainComponent,
    public configService: ConfigService,
    public primengConfig: PrimeNGConfig
  ) {}

  public ngOnInit(): void {
    this.config = this.configService.config;
    this.changeTheme(this.config.theme, this.config.dark); //* Setar tema caso ultimo não seja o default
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.scale = 14;

      this.applyScale();

      this.setConfigLocally(this.config);
    });
  }

  public onConfigButtonClick(event: Event): void {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configClick = true;
    event.preventDefault();
  }

  public incrementScale(): void {
    this.scale++;
    this.applyScale();
  }

  public decrementScale(): void {
    this.scale--;
    this.applyScale();
  }

  public applyScale(): void {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  public onRippleChange(ripple): void {
    this.primengConfig.ripple = ripple;
    this.configService.updateConfig({ ...this.config, ...{ ripple } });
    this.setConfigLocally({
      ...this.config,
      ripple,
    });
  }

  public onInputStyleChange(): void {
    this.configService.updateConfig(this.config);
    this.setConfigLocally(this.config);
  }

  public changeTheme(theme: string, dark: boolean): void {
    const themeElement = document.getElementById('theme-css');
    themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
    this.configService.updateConfig({ ...this.config, ...{ theme, dark } });
    this.setConfigLocally({
      ...this.config,
      dark,
      theme,
    });
  }

  public setConfigLocally(config: AppConfig): void {
    localStorage.setItem('@lspereira: config', JSON.stringify(config));
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
