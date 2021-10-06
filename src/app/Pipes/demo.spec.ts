import { Demo } from './demo.pipe';

describe('Demo', () => {
  it('create an instance', () => {
    const pipe = new Demo();
    expect(pipe).toBeTruthy();
  });
});
