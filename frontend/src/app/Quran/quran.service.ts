import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuranService {

  private apiUrl = 'http://localhost:3000/api'; // The base URL of your Express backend
  private reciUrl = 'http://localhost:3000/api/v4';
  constructor(private http: HttpClient) { }

  // Method to get verses in IndoPak script by chapter number
  getVersesInIndopakByChapter(chapterNumber: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/verses/indopak/${chapterNumber}`);
  }

  getAudioByChapter(recitationId: Number, chapterNumber: Number): Observable<any> {
    const url = `${this.reciUrl}/recitations/${recitationId}/by_chapter/${chapterNumber}`;
    return this.http.get<any>(url);
  }

}
