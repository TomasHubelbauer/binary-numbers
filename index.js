window.addEventListener('load', () => {
  const numberInput = document.getElementById('numberInput');
  numberInput.addEventListener('input', render);

  function render() {
    const number = numberInput.valueAsNumber;

    if (number >= -128 && number <= 127) {
      const arrayBuffer = new ArrayBuffer(1);
      const dataView = new DataView(arrayBuffer);
      dataView.setUint8(0, number);
      document.getElementById('uint8HexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('uint8BinTd').textContent = getBinString(arrayBuffer);
      dataView.setInt8(0, number);
      document.getElementById('int8HexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('int8BinTd').textContent = getBinString(arrayBuffer);
    } else {
      document.getElementById('uint8HexTd').textContent = '';
      document.getElementById('uint8BinTd').textContent = '';
      document.getElementById('int8HexTd').textContent = '';
      document.getElementById('int8BinTd').textContent = '';
    }

    if (number >= 0 && number <= 65535) {
      const arrayBuffer = new ArrayBuffer(2);
      const dataView = new DataView(arrayBuffer);
      dataView.setUint16(0, number, false);
      document.getElementById('uint16BeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('uint16BeBinTd').textContent = getBinString(arrayBuffer);
      dataView.setUint16(0, number, true);
      document.getElementById('uint16LeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('uint16LeBinTd').textContent = getBinString(arrayBuffer);
    } else {
      document.getElementById('uint16BeHexTd').textContent = '';
      document.getElementById('uint16BeBinTd').textContent = '';
      document.getElementById('uint16LeHexTd').textContent = '';
      document.getElementById('uint16LeBinTd').textContent = '';
    }

    if (number >= -32768 && number <= 32767) {
      const arrayBuffer = new ArrayBuffer(2);
      const dataView = new DataView(arrayBuffer);
      dataView.setInt16(0, number, false);
      document.getElementById('int16BeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('int16BeBinTd').textContent = getBinString(arrayBuffer);
      dataView.setInt16(0, number, true);
      document.getElementById('int16LeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('int16LeBinTd').textContent = getBinString(arrayBuffer);
    } else {
      document.getElementById('int16BeHexTd').textContent = '';
      document.getElementById('int16BeBinTd').textContent = '';
      document.getElementById('int16LeHexTd').textContent = '';
      document.getElementById('int16LeBinTd').textContent = '';
    }

    // TODO: 24bit

    if (number >= -2147483648 && number <= 2147483647) {
      const arrayBuffer = new ArrayBuffer(4);
      const dataView = new DataView(arrayBuffer);
      dataView.setInt32(0, number, false);
      document.getElementById('uint32BeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('uint32BeBinTd').textContent = getBinString(arrayBuffer);
      dataView.setInt32(0, number, true);
      document.getElementById('uint32LeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('uint32LeBinTd').textContent = getBinString(arrayBuffer);
    } else {
      document.getElementById('uint32BeHexTd').textContent = '';
      document.getElementById('uint32BeBinTd').textContent = '';
      document.getElementById('uint32LeHexTd').textContent = '';
      document.getElementById('uint32LeBinTd').textContent = '';
    }

    if (number >= 0 && number <= 4294967295) {
      const arrayBuffer = new ArrayBuffer(4);
      const dataView = new DataView(arrayBuffer);
      dataView.setUint32(0, number, false);
      document.getElementById('int32BeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('int32BeBinTd').textContent = getBinString(arrayBuffer);
      dataView.setUint32(0, number, true);
      document.getElementById('int32LeHexTd').textContent = getHexString(arrayBuffer);
      document.getElementById('int32LeBinTd').textContent = getBinString(arrayBuffer);
    } else {
      document.getElementById('int32BeHexTd').textContent = '';
      document.getElementById('int32BeBinTd').textContent = '';
      document.getElementById('int32LeHexTd').textContent = '';
      document.getElementById('int32LeBinTd').textContent = '';
    }

    // TODO: 64bit (BigInt?)
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
