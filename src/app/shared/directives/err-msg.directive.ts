import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit {

  private _color   : string = 'red';
  private _mensaje : string = 'Este Campo es Requerido';

  @Input() set valid(valor: boolean) {
    (valor)
      ? this.htmlElement.nativeElement.classList.remove('hidden')
      : this.htmlElement.nativeElement.classList.add('hidden');
  }

  @Input() set color( valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje();
  }

  htmlElement: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // this.setColor(); undefined en este punto para las propiedades`
    // this.setMensaje(); undefined en este punto para las propiedades`
    this.setClase();
    this.setColor();
    this.setMensaje();
  }

  setClase() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setVisibility(){

  }
}
