const button = document.querySelector('#js-snip')
// const quantity = document.querySelector('#quantity')
// quantity.addEventListener('change', () => {
//   // Sets the default quantity when adding the item
//   button.setAttribute('data-item-quantity', quantity.value)
// })
const select = document.querySelector('#js-sizes')
if (select) {
  select.addEventListener('change', () => {
    // Sets the default frame color when adding the item
    button.setAttribute('data-item-custom1-value', select.value)
  })
}