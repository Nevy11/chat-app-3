import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-library-content',
  templateUrl: './library-content.component.html',
  styleUrl: './library-content.component.scss',
})
export class LibraryContentComponent {
  searchTerm: string = '';
  selectedCategory: string = '';
  sortOption: string = 'date';
  categories = ['Books', 'Articles', 'Tutorials', 'Videos'];
  resources = [
    {
      title: 'Angular Basics',
      author: 'John Doe',
      date: new Date(),
      description: 'An introduction to Angular basics.',
      category: 'Books',
    },
    {
      title: 'Advanced Rust Programming',
      author: 'Jane Smith',
      date: new Date('2023-09-15'),
      description: 'A deep dive into Rust.',
      category: 'Tutorials',
    },
    // Add more resources here
  ];
  filteredResources = [...this.resources];
  totalItems = this.filteredResources.length;

  constructor() {}

  ngOnInit(): void {}

  searchLibrary() {
    this.filteredResources = this.resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        resource.author.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterByCategory() {
    if (this.selectedCategory) {
      this.filteredResources = this.resources.filter(
        (resource) => resource.category === this.selectedCategory
      );
    } else {
      this.filteredResources = [...this.resources];
    }
  }

  sortLibrary() {
    if (this.sortOption === 'date') {
      this.filteredResources.sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      );
    } else if (this.sortOption === 'title') {
      this.filteredResources.sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  paginate(event: any) {
    // Implement pagination logic here
  }
}
