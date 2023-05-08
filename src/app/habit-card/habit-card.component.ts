import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habit-card',
  templateUrl: './habit-card.component.html',
  styleUrls: ['./habit-card.component.scss'],
})
export class HabitCardComponent {
  @Input() habit: any;

  calculateProgress(): number {
    return ((this.habit.total - this.habit.remaining) / this.habit.total) * 100;
  }

  deleteHabit(): void {
    // Implement delete functionality here
  }

  editHabit(): void {
    // Implement edit functionality here
  }
}
