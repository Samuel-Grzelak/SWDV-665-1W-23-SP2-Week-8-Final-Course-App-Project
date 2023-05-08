import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private habits: any[] = [];

  constructor() {
    // Initialize habits (you can replace this with actual data storage or API calls)
    this.habits = [
      { title: 'Exercise', total: 5, remaining: 3 },
      { title: 'Read', total: 7, remaining: 7 },
      { title: 'Meditate', total: 10, remaining: 10 }
    ];
  }

  getHabits(): any[] {
    return this.habits;
  }

  addHabit(habit: any): void {
    this.habits.push(habit);
  }

  deleteHabit(habit: any): void {
    const index = this.habits.indexOf(habit);
    if (index > -1) {
      this.habits.splice(index, 1);
    }
  }

  editHabit(habit: any, newTitle: string, newTotal: number): void {
    habit.title = newTitle;
    habit.total = newTotal;
  }
}
