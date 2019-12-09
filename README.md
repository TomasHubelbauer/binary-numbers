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

Display that with indices once and then with real values again for obviousness

### Accept hex and binary strings as input (ask about endianness or maybe show variants for all endiadnesses)

### Implement the missing 24 and 64 bit conversions by extending the `DataView` prototype

### Consider supporting mixed endian with the respective `DataView` prototype extensions
