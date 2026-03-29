/**
 * Single source of truth for We Build business information.
 * Import from here instead of hardcoding phone, email, address, etc.
 */

export const BUSINESS = {
  name: 'We Build',
  phone: '(704) 574-8124',
  phoneTel: '7045748124',
  email: 'designcenter@webuildclt.com',
  url: 'https://webuildclt.com',
  address: {
    street: '14330 S Lakes Drive',
    city: 'Charlotte',
    state: 'NC',
    zip: '28273',
    country: 'US',
    full: '14330 S Lakes Drive, Charlotte NC 28273',
  },
  geo: {
    latitude: 35.1,
    longitude: -80.9,
  },
  social: [
    'https://www.instagram.com/webuildclt/',
    'https://www.facebook.com/WeBuildCLT',
  ],
  logo: 'https://webuildclt.com/images/logo.png',
  foundingDate: '2019',
  description:
    'Family-owned construction company in Charlotte, NC. Commercial construction, upfits, roof coating. 60+ years combined experience.',
} as const;
