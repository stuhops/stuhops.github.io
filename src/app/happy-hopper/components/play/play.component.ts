import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { BACKGROUND_MUSIC_URL, CANVAS_SIZE, GameLoop } from 'happy-hopper';

@Component({
  selector: 'happy-hopper-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements AfterViewInit {
  @Output() gameOver = new EventEmitter<number>();
  @ViewChild('gameCanvas') gameCanvas!: ElementRef;
  BACKGROUND_MUSIC_URL = BACKGROUND_MUSIC_URL;
  CANVAS_SIZE = CANVAS_SIZE;
  gameLoop!: GameLoop;

  constructor(private _router: Router) {}

  ngAfterViewInit(): void {
    this.gameLoop = new GameLoop(this.gameCanvas.nativeElement, { start: true });

    document.addEventListener('game-over', () => {
      this.gameLoop.stopGameLoop();
      this.gameOver.emit();
      this._router.navigate(['/projects/happy-hopper']);
    });
  }
}
