import contactForm  from './contact_script';
contactForm('js-contactForm',{
  formAction: 'https://mail.powerfulwebdesign.com.au/v2/index.php', // production
  //formAction: 'http://localhost/mail.php', // local test
  account: 'local',
  grecaptchaKey: '6LfyBEoeAAAAAGgMEs1aU_V-NRaJsKozabroPWoN', // production
  //grecaptchaKey: '6LdUwwweAAAAAA9iDDa0A5RosBBoagSnU1yBvUQ3', // local test
  grecaptchaLocation: 'bottomright',
  // formId: 'js-contactForm',
  // inputNameId: 'js-contact-name',
  // submitId: 'js-submit',
  // statusId: 'js-statusMessage',
  // alertClass: 'alert', // BS5
  // successClass: 'alert-success', // BS5
  // errorClass: 'alert-danger', // BS5
  // hiddenClass: 'is-hidden', // custom css class dependency
  // spinnerId: 'js-load'
  debug: true,
});