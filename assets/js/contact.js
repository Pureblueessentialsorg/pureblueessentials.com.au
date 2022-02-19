import contactForm  from '@future-wd/contact-form-xhr';
!process.env.HUGO_ENVIRONMENT === 'development'
? prod()
: dev;
const dev = contactForm('js-contactForm',{
  formAction: 'https://mail.powerfulwebdesign.com.au/v2/index.php', // online
  // formAction: 'http://localhost/mail.php', // local test
  account: 'local',
  grecaptchaKey: '6LdUwwweAAAAAA9iDDa0A5RosBBoagSnU1yBvUQ3', // local test
  debug: true,
});

const prod = contactForm('js-contactForm',{
  formAction: 'https://mail.powerfulwebdesign.com.au/v2/index.php',
  account: 'pbe',
  grecaptchaKey: '6LfyBEoeAAAAAGgMEs1aU_V-NRaJsKozabroPWoN',
});