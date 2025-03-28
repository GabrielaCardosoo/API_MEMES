import { Component } from '@angular/core';
import { MemeService } from '../meme.service';
@Component({
  selector: 'app-memes-list',
  standalone: false,
  templateUrl: './memes-list.component.html',
  styleUrl: './memes-list.component.css'
})
export class MemesListComponent {

memes:any[] = [];
constructor(private service: MemeService){}
ngOnInit(): void {
  this.service.getMemes().subscribe(
    json => this.memes = json.data.memes

  );
}

}
