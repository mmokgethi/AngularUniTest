import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strenth is 5', () => {
    let pipe = new StrengthPipe();

    expect(pipe.transform(6)).toEqual('5(weak)');
  });
});
