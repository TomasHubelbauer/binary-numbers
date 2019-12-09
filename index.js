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
