import { Injectable } from '@angular/core';
import { AppConfig } from '@config/models/appconfig';
import { Subject } from 'rxjs';

const defaultConfig = {
  theme: 'dark',
  dark: true,
  inputStyle: 'outlined',
  ripple: true,
};

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: AppConfig =
    JSON.parse(localStorage.getItem('@lspereira: config')) || defaultConfig;

  private configUpdate = new Subject<AppConfig>();

  public configUpdate$ = this.configUpdate.asObservable();

  public updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
  }

  getConfig() {
    return this.config;
  }
}
