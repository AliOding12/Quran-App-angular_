import { Component } from '@angular/core';
import { QuranService } from '../Quran/quran.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  verses: any;
  chapterno: number  = 1;
  chapterNumbers: number[] = Array.from({ length: 114 }, (_, i) => i + 1);
  audioData: any;
  recitaionid: Number = 1;

  constructor(private quranService: QuranService) { }

  ngOnInit(): void {
    this.loadChapterData(); // Example: Fetch verses for chapter 1 on component initialization
    this.quranService.getAudioByChapter(this.recitaionid, this.chapterno)
      .subscribe({
        next:
        (data) => {
          this.audioData = data;
          console.log('Audio data:', this.audioData);
        },
        error:(error) => {
          console.error('Error fetching audio data:', error);
        }
  });
  }

  loadChapterData(): void {
    if (this.chapterno !== null) {
    this.quranService.getVersesInIndopakByChapter(this.chapterno).subscribe({
      next: (data) => {
        this.verses = data;
        //console.log('Verses:', this.verses);
      },
      error:(error) => {
        console.error('Error fetching verses:', error);
      }
    })}}

    setChapterno(newChapterno: number): void {
      this.chapterno = newChapterno; // Set chapterno to the passed parameter
      this.loadChapterData(); 
    }


    

  
  }



