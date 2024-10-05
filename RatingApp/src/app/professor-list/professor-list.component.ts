import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {

  professors = [
    {
      name: 'Shubham Vyas',
      department: 'Chemistry',
      university: 'Colorado School of Mines',
      quality: 3.7,
      percentage: 75,
      difficulty: 4.3
    },
    {
      name: 'Shubham Singh',
      department: 'Management',
      university: 'University of Minnesota Duluth',
      quality: 3.8,
      percentage: 85,
      difficulty: 3.4
    }
  ];

}
