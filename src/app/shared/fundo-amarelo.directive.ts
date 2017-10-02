import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]' 
  //para aplicar a diretiva apenas para algum elemento basta colocá-lo a frente do colchete 'a[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer) {
      //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
      this._renderer.setElementStyle(this._elementRef.nativeElement,
                                      'background-color',
                                      'yellow');
   }

}
