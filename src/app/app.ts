import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Summerization } from '../Services/summerization';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected readonly title = signal('Summerization_Frontend');

  content: string = '';
  summary: string = '';
  loading = false;

  private summarizeService = inject(Summerization);

  // 🔹 Sanitize input before sending
  private sanitizeContent(text: string): string {
    return text
      .replace(/[^a-zA-Z0-9\s]/g, '')   // remove special characters
      .replace(/\s+/g, ' ')             // collapse multiple spaces/newlines
      .trim();                          // trim leading/trailing spaces
  }

  generateSummary() {
    console.log("Button Clicked");
    if (!this.content.trim()) {
      alert('Please enter content to summarize.');
      return;
    }

    this.loading = true;
    this.summary = '';

    // 🔹 Clean the content before sending
    const sanitized = this.sanitizeContent(this.content);
    console.log(sanitized);
    this.summarizeService.summarizeContent(sanitized).subscribe({
      next: (res) => {
        this.summary = res.summary;
        this.loading = false;
        
      },
      error: () => {
        alert('Error summarizing content.');
        this.loading = false;
      }
    });
  }
}
