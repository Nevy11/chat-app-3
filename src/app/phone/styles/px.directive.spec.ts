import { PxDirective } from './px.directive';

describe('PxDirective', () => {
  it('should create an instance', () => {
    const directive = new MyDirective(renderer, elementRef);
    expect(directive).toBeTruthy();
  });
});
