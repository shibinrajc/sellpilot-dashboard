import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    FormsModule,
    CdkDropList,
    CdkDrag,
    MatFormFieldModule,
    MatInputModule,
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchText = '';
  showDropdown = false;

  dummyItems = ['Apple', 'Banana', 'Orange', 'Laptop', 'Mobile'];
  get filteredItems() {
    return this.searchText
      ? this.dummyItems.filter((item) =>
          item.toLowerCase().includes(this.searchText.toLowerCase())
        )
      : this.dummyItems;
  }

  hideDropdownWithDelay() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 200); // delay to allow click event on dropdown items
  }
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
