import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strenth is 5', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5(weak)');
  });

  it('should display strong if strength is 10', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(10)).toEqual('10(strong)');
  });

  it('should display unbelivable if strength is >= 20', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(21)).toEqual('1(unbelievable)');
  });
});
