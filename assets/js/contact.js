// import contactForm  from '@future-wd/contact-form-xhr';
import contactForm from 'js/contact-form-xhr'
import * as params from '@params';

const dev = contactForm('js-contactForm',{
  formAction: 'https://mail.powerfulwebdesign.com.au/v2/index.php', // online
  // formAction: 'http://localhost/mail.php', // local test
  account: 'local',
  grecaptchaKey: '6LdUwwweAAAAAA9iDDa0A5RosBBoagSnU1yBvUQ3', // local test
  //debug: true,
});

const prod = contactForm('js-contactForm',{
  formAction: 'https://mail.powerfulwebdesign.com.au/v2/index.php',
  account: 'pbe',
  grecaptchaKey: '6LfyBEoeAAAAAGgMEs1aU_V-NRaJsKozabroPWoN',
});

params.env === 'development'
? dev
: prod;