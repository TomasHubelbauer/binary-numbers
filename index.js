window.addEventListener('load', () => {
  const numberInput = document.getElementById('numberInput');
  numberInput.addEventListener('input', render);

  const bitsP = document.getElementById('bitsP');
  const int8P = document.getElementById('int8P');
  const uint8P = document.getElementById('uint8P');
  const int16BeP = document.getElementById('int16BeP');
  const int16LeP = document.getElementById('int16LeP');
  const uint16BeP = document.getElementById('uint16BeP');
  const uint16LeP = document.getElementById('uint16LeP');
  const int32BeP = document.getElementById('int32BeP');
  const int32LeP = document.getElementById('int32LeP');
  const uint32BeP = document.getElementById('uint32BeP');
  const uint32LeP = document.getElementById('uint32LeP');

  function render() {
    const number = numberInput.valueAsNumber;
    if (number !== ~~number) {
      alert('The number must be a decimal!');
      numberInput.value = ~~number;
      return;
    }

    // BYTE BITS
    if (number >= 0 && number <= 256) {
      bitsP.textContent = 'Byte bits:'
        + (((number & (1 << (7 - 0))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 1))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 2))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 3))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 4))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 5))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 6))) !== 0) ? ' set' : ' unset')
        + (((number & (1 << (7 - 7))) !== 0) ? ' set' : ' unset')
        + ' ' + number.toString(2)
        ;
    } else {
      bitsP.textContent = 'Not a byte.';
    }

    // INT8
    int8P.innerHTML = '';
    if (number >= -128 && number <= 127) {
      const arrayBuffer = new ArrayBuffer(1);
      const dataView = new DataView(arrayBuffer);
      dataView.setInt8(0, number);
      int8P.append(document.createTextNode(`Is int8 (1 byte, -128-127). `));
      const hexCode = document.createElement('code');
      hexCode.textContent = getHexString(arrayBuffer);
      int8P.append(hexCode);
      const binCode = document.createElement('code');
      binCode.textContent = getBinString(arrayBuffer);
      int8P.append(binCode);
    } else {
      int8P.textContent = 'Is not int8.';
    }

    // UINT8
    uint8P.innerHTML = '';
    if (number >= 0 && number <= 256) {
      const arrayBuffer = new ArrayBuffer(1);
      const dataView = new DataView(arrayBuffer);
      dataView.setUint8(0, number);
      uint8P.append(document.createTextNode(`Is uint8 (1 byte, 0-256). `));
      const hexCode = document.createElement('code');
      hexCode.textContent = getHexString(arrayBuffer);
      uint8P.append(hexCode);
      const binCode = document.createElement('code');
      binCode.textContent = getBinString(arrayBuffer);
      uint8P.append(binCode);
    } else {
      uint8P.textContent = 'Is not uint8.';
    }

    // INT16
    int16BeP.innerHTML = '';
    int16LeP.innerHTML = '';
    if (number >= -32768 && number <= 32767) {
      const arrayBuffer = new ArrayBuffer(2);
      const dataView = new DataView(arrayBuffer);

      dataView.setInt16(0, number, false);
      int16BeP.append(document.createTextNode(`Is int16 big endian (2 bytes, -32768-32767). `));
      const beHexCode = document.createElement('code');
      beHexCode.textContent = getHexString(arrayBuffer);
      int16BeP.append(beHexCode);
      const beBinCode = document.createElement('code');
      beBinCode.textContent = getBinString(arrayBuffer);
      int16BeP.append(beBinCode);
      int16BeP.append(makeSvg(number));

      dataView.setInt16(0, number, true);
      int16LeP.append(document.createTextNode(`Is int16 little endian (2 bytes, -32768-32767). `));
      const leHexCode = document.createElement('code');
      leHexCode.textContent = getHexString(arrayBuffer);
      int16LeP.append(leHexCode);
      const leBinCode = document.createElement('code');
      leBinCode.textContent = getBinString(arrayBuffer);
      int16LeP.append(leBinCode);
    } else {
      int16BeP.innerHTML = 'Is not int16 big endian.';
      int16LeP.innerHTML = 'Is not int16 little endian.';
    }

    // UINT16
    uint16BeP.innerHTML = '';
    uint16LeP.innerHTML = '';
    if (number >= 0 && number <= 65536) {
      const arrayBuffer = new ArrayBuffer(2);
      const dataView = new DataView(arrayBuffer);

      dataView.setUint16(0, number, false);
      uint16BeP.append(document.createTextNode(`Is uint16 big endian (2 bytes, 0-65536). `));
      const beHexCode = document.createElement('code');
      beHexCode.textContent = getHexString(arrayBuffer);
      uint16BeP.append(beHexCode);
      const beBinCode = document.createElement('code');
      beBinCode.textContent = getBinString(arrayBuffer);
      uint16BeP.append(beBinCode);
      uint16BeP.append(makeSvg(number));

      dataView.setUint16(0, number, true);
      uint16LeP.append(document.createTextNode(`Is uint16 little endian (2 bytes, 0-65536). `));
      const leHexCode = document.createElement('code');
      leHexCode.textContent = getHexString(arrayBuffer);
      uint16LeP.append(leHexCode);
      const leBinCode = document.createElement('code');
      leBinCode.textContent = getBinString(arrayBuffer);
      uint16LeP.append(leBinCode);
    } else {
      uint16BeP.innerHTML = 'Is not uint16 big endian.';
      uint16LeP.innerHTML = 'Is not uint16 little endian.';
    }

    // TODO: INT24
    // TODO: UINT24

    // INT32
    int32BeP.innerHTML = '';
    int32LeP.innerHTML = '';
    if (number >= -2147483648 && number <= 2147483647) {
      const arrayBuffer = new ArrayBuffer(4);
      const dataView = new DataView(arrayBuffer);

      dataView.setInt32(0, number, false);
      int32BeP.append(document.createTextNode(`Is int32 big endian (4 bytes, -2147483648-2147483647). `));
      const beHexCode = document.createElement('code');
      beHexCode.textContent = getHexString(arrayBuffer);
      int32BeP.append(beHexCode);
      const beBinCode = document.createElement('code');
      beBinCode.textContent = getBinString(arrayBuffer);
      int32BeP.append(beBinCode);
      int32BeP.append(makeSvg(number));

      dataView.setInt32(0, number, true);
      int32LeP.append(document.createTextNode(`Is int32 little endian (4 bytes, -2147483648-2147483647). `));
      const leHexCode = document.createElement('code');
      leHexCode.textContent = getHexString(arrayBuffer);
      int32LeP.append(leHexCode);
      const leBinCode = document.createElement('code');
      leBinCode.textContent = getBinString(arrayBuffer);
      int32LeP.append(leBinCode);
    } else {
      int32BeP.innerHTML = 'Is not int32 big endian.';
      int32LeP.innerHTML = 'Is not int32 little endian.';
    }

    // UINT32
    uint32BeP.innerHTML = '';
    uint32LeP.innerHTML = '';
    if (number >= 0 && number <= 4294967295) {
      const arrayBuffer = new ArrayBuffer(4);
      const dataView = new DataView(arrayBuffer);

      dataView.setUint32(0, number, false);
      uint32BeP.append(document.createTextNode(`Is uint32 big endian (4 bytes, 0-4294967295). `));
      const beHexCode = document.createElement('code');
      beHexCode.textContent = getHexString(arrayBuffer);
      uint32BeP.append(beHexCode);
      const beBinCode = document.createElement('code');
      beBinCode.textContent = getBinString(arrayBuffer);
      uint32BeP.append(beBinCode);
      uint32BeP.append(makeSvg(number));

      dataView.setUint32(0, number, true);
      uint32LeP.append(document.createTextNode(`Is uint32 little endian (4 bytes, 0-4294967295). `));
      const leHexCode = document.createElement('code');
      leHexCode.textContent = getHexString(arrayBuffer);
      uint32LeP.append(leHexCode);
      const leBinCode = document.createElement('code');
      leBinCode.textContent = getBinString(arrayBuffer);
      uint32LeP.append(leBinCode);
    } else {
      uint32BeP.innerHTML = 'Is not uint32 big endian.';
      uint32LeP.innerHTML = 'Is not uint32 little endian.';
    }

    // TODO: INT64
    // TODO: UINT64
  }

  render(numberInput.valueAsNumber);
  //makeSvg(4321, [false, false, false, true, false, false, false, false, true, true, true, false, false, false, false, true]);
});

function getHexString(arrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer);
  let buffer = '';
  for (const byte of uint8Array) {
    if (byte < 15) {
      buffer += '0';
    }

    buffer += byte.toString(16);
    buffer += ' ';
  }

  return buffer;
}

function getBinString(arrayBuffer) {
  const uint8Array = new Uint8Array(arrayBuffer);
  let buffer = '';
  for (const byte of uint8Array) {
    const str = byte.toString(2);
    buffer += '0'.repeat(8 - str.length);
    buffer += str;
    buffer += ' ';
  }

  return buffer;
}

// TODO: Accept a flag indicating LE/BE and use for both
// TODO: Derive a byte hex to show above the bits
// TODO: Use external dummy SVG shared instance
function makeSvg(number, le) {
  if (le) {
    throw new Error('LE is not supported yet');
  }

  // Create a temporary SVG used to host the text element used for measurements
  const dummySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  document.body.append(dummySvg);

  // Measure the area needed to contain the provided text using the dummy DOM SVG
  function measure(text) {
    const dummyText = text.cloneNode(true);
    dummySvg.append(dummyText);
    // Note not to use `getComputedTextLength` as it doesn't reflect the rotation
    const bounds = dummyText.getClientRects()[0];
    dummyText.remove();
    return { width: bounds.width, height: bounds.height };
  }

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  const marginX = 15;
  let x = marginX;
  let groupX = x;
  const marginY = 5;
  let rectY = marginY;
  let groupY = marginY;

  const bitCount = Math.ceil(Math.ceil(Math.log(4321) / Math.log(2)) / 8) * 8;
  const maxExp = Math.pow(2, bitCount - 1);
  const maxExpText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  maxExpText.textContent = `* ${maxExp} =`;
  // Note that these values are swap to simulate the writing mode
  const maxExpHeight = measure(maxExpText).width;

  let partX;

  for (let index = 0; index < bitCount; index++) {
    let y = marginY;

    const order = bitCount - index - 1;
    const exp = Math.pow(2, order);
    const bit = number & exp;

    const orderText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    orderText.textContent = order;
    orderText.setAttribute('font-size', 'x-small');
    const { width: orderWidth, height: orderHeight } = measure(orderText);
    orderText.setAttribute('y', y + orderHeight);
    orderText.setAttribute('stroke', 'gray');
    svg.append(orderText);

    y += orderHeight;

    const bitText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    bitText.textContent = bit ? '1' : '0';
    bitText.setAttribute('font-family', 'monospace');
    bitText.setAttribute('font-size', '22');
    bitText.setAttribute('font-weight', 'bold');
    const { width: bitWidth, height: bitHeight } = measure(bitText);
    bitText.setAttribute('y', y + bitHeight);
    bitText.setAttribute('stroke', 'black');
    svg.append(bitText);

    y += bitHeight;

    // Remember last group's y to be able to draw the encompassing rect using it
    rectY = Math.max(rectY, y);

    const expText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    expText.textContent = `* ${exp} =`;
    expText.style = 'writing-mode: tb;';
    expText.setAttribute('font-family', 'monospace');
    const { width: expWidth } = measure(expText);
    expText.setAttribute('y', y + marginY * 4);
    expText.setAttribute('stroke', bit ? 'gray' : 'silver');
    svg.append(expText);

    y += maxExpHeight;

    const part = bit ? exp : 0;
    const partText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    partText.textContent = part;
    partText.setAttribute('font-family', 'monospace');
    const { width: partWidth, height: partHeight } = measure(partText);
    partText.setAttribute('y', y + partHeight + marginY * 4);
    partText.setAttribute('stroke', bit ? 'gray' : 'silver');
    svg.append(partText);

    y += partHeight;

    const _partX = partX;

    // Center the texts vertically within the bit column
    const width = 10 + Math.max(orderWidth, bitWidth, expWidth) + 10;
    orderText.setAttribute('x', x + ((width - orderWidth) / 2));
    bitText.setAttribute('x', x + ((width - bitWidth) / 2));
    expText.setAttribute('x', x + ((width - expWidth) / 1.5));
    partText.setAttribute('x', x + ((width - partWidth) / 2.5));
    partX = x + ((width - partWidth) / 2.5) + partWidth;
    x += width;

    // TODO: Display the byte hex value atop the group in large font
    if (index > 0 && index % 8 === 7) {
      // Enclose the group of bits comprising a byte visually
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', groupX - 5);
      rect.setAttribute('y', 5 + orderHeight + 5);
      rect.setAttribute('width', x - groupX + 7.5);
      rect.setAttribute('height', rectY - marginY * 2);
      rect.setAttribute('stroke', 'silver');
      rect.setAttribute('fill', 'none');
      svg.append(rect);

      // Separate the groups of bits comprising a byte visually
      if (index !== bitCount - 1) {
        x += width;
      }
      else {
        x += marginX;
      }

      // Remember last group's x to be able to draw the encompassing rect using it
      groupX = x;
    }

    if (index > 0) {

      const addText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      addText.textContent = '+';
      addText.setAttribute('font-family', 'monospace');
      addText.setAttribute('x', _partX + ((partX - partWidth - _partX) / 2));
      addText.setAttribute('y', y + marginY * 4.25);
      addText.setAttribute('text-anchor', 'middle');
      svg.append(addText);

      if (index === bitCount - 1) {
        const sumText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        sumText.textContent = '= ' + number;
        sumText.setAttribute('font-family', 'monospace');
        sumText.setAttribute('font-weight', 'bold');
        sumText.setAttribute('font-size', 'large');
        sumText.setAttribute('text-decoration', 'underline');
        x += measure(sumText).width;
        sumText.setAttribute('x', partX + partWidth);
        sumText.setAttribute('y', y + marginY * 4.25);
        //sumText.setAttribute('text-anchor', 'middle');
        svg.append(sumText);
      }
    }

    groupY = Math.max(groupY, y);
  }

  svg.setAttribute('width', x);
  svg.setAttribute('height', groupY + marginY * 7);
  dummySvg.remove();
  return svg;
}
