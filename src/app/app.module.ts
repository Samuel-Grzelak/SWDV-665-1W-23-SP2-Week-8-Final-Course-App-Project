import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitCardComponent } from './habit-card/habit-card.component';
import { HabitService } from './services/habit.service';

@NgModule({
  declarations: [AppComponent, HabitCardComponent],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule],
  providers: [HabitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
