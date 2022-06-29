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









