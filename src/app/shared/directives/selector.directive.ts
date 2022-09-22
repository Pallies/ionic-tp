import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[selector]',
})
export class SelectorDirective {
  _prop: string;

  @Input() set value(item: string) {
    this._prop = item;
  }
  get value() {
    return this._prop;
  }
  @Input() set selector(item: string) {
    const text = this.value;
    if (item !== text) {
      this.color = 'inherit';
    } else {
      this.color = 'gold';
    }
  }
  @Output() selectorChange: EventEmitter<string> = new EventEmitter();

  @HostBinding('style.color') color: string;

  @HostListener('click') onMouseOver() {
    const selected = this.value;
    this.selectorChange.emit(selected);
  }
}
