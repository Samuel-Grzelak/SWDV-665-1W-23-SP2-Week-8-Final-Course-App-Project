import { Component } from '@angular/core';
import { Habit } from './habit.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  habits: Habit[] = [];
  habitTitle: string = '';
  habitTotal: number = 0;

  deleteHabit(habit: Habit) {
    // Delete the habit from the array
    const index = this.habits.indexOf(habit);
    if (index > -1) {
      this.habits.splice(index, 1);
    }
  }

  editHabit(habit: Habit, title: string, total: number) {
    // Update the habit with the new title and total
    habit.title = title;
    habit.total = total;
  }

  addHabit(title: string, total: number) {
    // Create a new habit and add it to the array
    const habit: Habit = {
      title,
      total,
    };
    this.habits.push(habit);
  }
}
