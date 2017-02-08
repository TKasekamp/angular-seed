import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { ComModule } from './com.module';

export function main() {
   describe('Com component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ComModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

              expect(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Com subsystem page');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-com></sd-com>'
})
class TestComponent {}
