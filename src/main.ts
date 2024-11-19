import { AppComponent } from './routes/app.component';

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './routes/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);
