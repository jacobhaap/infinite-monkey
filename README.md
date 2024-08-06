# 1 Monkey, 1 Typewriter.

> "[The infinite monkey theorem](https://en.wikipedia.org/wiki/Infinite_monkey_theorem) states that a monkey hitting keys at
> random on a typewriter keyboard for an infinite amount of time will
> almost surely type any given text, including the complete works of
> William Shakespeare." - *Wikipedia*

This react site is an example of the infinite monkey theorem, randomly generating text similarly to a monkey randomly hitting keys on a typewriter.

The random text generation is based on the 26 uppercase letters of the Latin Alphabet, and spaces. Weighting is applied to the characters based on their positions of a QWERTY layout keyboard/typewriter, with the highest weighting given to the Home Row keys and the Space Bar, and the lowest weighting given to the Top and Bottom row keys. The text is generated one character at a time, at a randomized speed per character to allow for variations in typing speed, to mimic the realistic experience of a monkey using a typewriter.
