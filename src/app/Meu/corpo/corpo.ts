import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-corpo',
  standalone: true,
  imports: [],
  templateUrl: './corpo.html',
  styleUrl: './corpo.css',
})
export class Corpo implements AfterViewInit, OnDestroy{
private observer!: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const elementos: NodeListOf<HTMLElement> =
      this.elRef.nativeElement.querySelectorAll('.animado');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('mostrar');
          this.observer.unobserve(entry.target); // opcional
        }
      });
    });

    elementos.forEach(el => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
