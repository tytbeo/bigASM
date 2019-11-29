import { Directive, Input, OnChanges, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngNot]'
})
export class NgNotDirective implements OnChanges {
  @Input() ngNot : boolean;
  constructor( private container : ViewContainerRef,
    private template : TemplateRef<any> ) { 

  }
  ngOnChanges(){
    if(this.ngNot){
      this.container.clear();
    }else{
      this.container.createEmbeddedView(this.template);
    }
  }
}
