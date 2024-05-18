import contactForm from 'js/contact-form-xhr'
import * as params from '@params';

// production config
let formAction = 'https://api.rapidforms.com.au/index.php';
let account = 'pbe';
let grecaptchaKey = '6LfyBEoeAAAAAGgMEs1aU_V-NRaJsKozabroPWoN';
let debug = true;

//dev config
if (params.env === 'development') {
  formAction = 'https://api.rapidforms.com.au/index.php'; // online
  // formAction = 'http://localhost/index.php'; // local test
  account = 'pbe';
  grecaptchaKey = '6LdUwwweAAAAAA9iDDa0A5RosBBoagSnU1yBvUQ3'; // local test
  debug = true
}

contactForm({
  formId: 'js-contactForm',
  formAction: formAction,
  account: account,
  grecaptchaKey: grecaptchaKey,
  debug: debug,
})

params.env === 'development' ? console.log('contact form dev env'): null;
