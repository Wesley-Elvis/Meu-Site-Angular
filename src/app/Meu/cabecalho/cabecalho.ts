import { Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})

export class Cabecalho implements OnInit, OnDestroy {

  dataTexto = '';
  horaTexto = '';
  dataISO = '';
  horaISO = '';

  private timerId!: ReturnType<typeof setInterval>;
  private isBrowser: boolean;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.atualizarDataHora();

    this.timerId = setInterval(() => {
      this.atualizarDataHora();
      this.cd.markForCheck();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

  private atualizarDataHora(): void {
    const agora = new Date();

    this.dataTexto = agora.toLocaleDateString('pt-BR');

    this.horaTexto = agora.toLocaleTimeString('pt-BR', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    this.dataISO = agora.toISOString().split('T')[0];
    this.horaISO = agora.toTimeString().split(' ')[0];
  }
}
