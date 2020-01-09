# Binary Numbers

[**LIVE**](https://tomashubelbauer.github.io/binary-numbers)

## Tips

Have a byte number and looking to check if bits are set or unset?

- `byte & 1` will be either 1 (last bit is set) or 0
- `byte & 2` will be either 2 or 0
- …
- `byte & 64` will be either 64 or 0
- `byte & 128` will be either 128 (first bit is set) or 0

Want to sum up a subset of the byte's bits to get a number (say last 3 bits)?

`(byte & 4) + (byte & 2) + (byte & 1)`

First five bits?

`((byte & 128) / 8) + … + (byte & 16) / 8` - the 8 comes from it going to the 4th bit from the last

Want to sum up a subset of bits across multiple bytes? Multiply each bit by the index of the byte squared.

## To-Do

### Implement a *Formula* section for each view, hex and bin, showing the conversion to dec

The best way to show this will be to expand the formula and display arrows from the variables
(like d1...dn for each digit) in the formula and the digits in the hex/bin form displayed.
Consider instead of the variables showing the actual digit values where the arrows existing
between them in the formula and in the displayed hex/bin would make sure they cannot be mistook
for another digit of the same value.

Display that with indices once and then with real values again for obviousness.

Base this on the current code for the SVG of bit summing of the BE numbers.

When we have multiple forms (bin, hex, dec), display conversions to hex/bin if decimal or
to dec if not decimal. See below about accepting multiple kinds of inputs and repeating the
UI for them.

### Display a bit summing SVG for LE numbers as well and adapt it as per its comments

### Accept hex and binary strings as input

Change from `number` input to text input and display the content for the number as dec, hex
and bin - all of these forms which match. Prevent invalid inputs from being input (only 0-9
and A through F in both cases). Repeat the UI (draw programatically) for each matching form.

### Implement the missing 24 and 64 bit conversions by extending the `DataView` prototype

https://gist.github.com/nphyx/5c19ef4cdb9774d87e0d +
https://github.com/TomasHubelbauer/sqlite-javascript/blob/master/patchDataView.js

### Consider supporting middle endian with the respective `DataView` prototype extensions

https://en.wikipedia.org/wiki/Endianness#Middle-endian

### Fix the part sum for negative numbers

Currently `-1` is all ones which sums up to non-sense (all parts).

Stretch the column width for all columns based on the part width of the widest
part.
