const button = document.getElementById('js-snip')

function update(id, num) {
  const elem = document.getElementById(id);
  if (elem) {
    elem.addEventListener('change', () => {
      // Sets the default frame color when adding the item
      const attr = `data-item-custom${num}-value`;
      button.setAttribute(attr, elem.value)
    })
  }
}

// sizes
update('js-sizes', 1);
// longetivity pack
update('js-long', 4);
// heat pack
update('js-designs', 3);
update('js-fillings', 4);

// update json-ld with a price expiry date, 1 year from today
// get element
const jsonOrig = document.getElementById('json-product')
if (jsonOrig) {
  // get todays date, add 1 year and format as YYY-MM-DD
  const today = new Date()
  const oneYearFull = today.setFullYear(today.getFullYear() + 1)
  const oneYearShort = new Date(oneYearFull).toISOString().slice(0, 10);
  // parse original json-ld
  const jsonParsed = JSON.parse(jsonOrig.innerText)
  // add valid until
  jsonParsed.offers.priceValidUntil = oneYearShort
  // strinfigy and replace original
  jsonOrig.innerText = JSON.stringify(jsonParsed)
}









