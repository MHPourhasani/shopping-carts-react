import alpha1 from './asset/images/alpha/alpha1.jpg';
import alpha2 from './asset/images/alpha/alpha2.jpg';
import alpha3 from './asset/images/alpha/alpha3.jpg';

import jordan1 from './asset/images/jordan/jordan1.jpg';
import jordan2 from './asset/images/jordan/jordan2.jpg';
import jordan3 from './asset/images/jordan/jordan3.jpg';

import skacher1 from './asset/images/skacher/skacher1.jpg';
import skacher2 from './asset/images/skacher/skacher2.jpg';
import skacher3 from './asset/images/skacher/skacher3.jpg';
import skacher4 from './asset/images/skacher/skacher4.jpg';
import skacher5 from './asset/images/skacher/skacher5.jpg';

import reebok1 from './asset/images/reebok/reebok1.jpg';
import reebok2 from './asset/images/reebok/reebok2.jpg';
import reebok3 from './asset/images/reebok/reebok3.jpg';

import adidas1 from './asset/images/adidas/adidas1.jpg';
import adidas2 from './asset/images/adidas/adidas2.jpg';
import adidas3 from './asset/images/adidas/adidas3.jpg';

import ecco1 from './asset/images/ecco/ecco1.jpg';
import ecco2 from './asset/images/ecco/ecco2.jpg';
import ecco3 from './asset/images/ecco/ecco3.jpg';

import calvin1 from './asset/images/calvin/calvin1.jpg';
import calvin2 from './asset/images/calvin/calvin2.jpg';

import lego1 from './asset/images/lego/lego1.jpg';
import lego2 from './asset/images/lego/lego2.jpg';
import lego3 from './asset/images/lego/lego3.jpg';
import lego4 from './asset/images/lego/lego4.jpg';
import lego5 from './asset/images/lego/lego5.jpg';

import yazi1 from './asset/images/yazi/yazi1.jpg';
import yazi2 from './asset/images/yazi/yazi2.jpg';
import yazi3 from './asset/images/yazi/yazi3.jpg';

import cayana1 from './asset/images/cayana/cayana1.jpg';
import cayana2 from './asset/images/cayana/cayana2.jpg';
import cayana3 from './asset/images/cayana/cayana3.jpg';

import scacherLogo from './asset/images/scacherLogo.png';
import adidasLogo from './asset/images/adidasLogo.png';
import eccoLogo from './asset/images/eccoLogo.png';
import nikeLogo from './asset/images/nikeLogo.png';
import reebokLogo from './asset/images/reebokLogo.png';
import locasteLogo from './asset/images/locasteLogo.png';
import asicsLogo from './asset/images/asicsLogo.png';

export const products = [
	{
		id: 1,
		name: 'Alpha',
		brand: 'Adidas',
		brandLogo: adidasLogo,
		services: ['Lifetime warranty', 'Free Delivery', 'Original'],
		price: 120,
		offPrice: 108,
		discount: 12,
		percendDiscount: 10,
		images: [alpha1, alpha2, alpha3],
	},
	{
		id: 2,
		name: 'Jordan',
		brand: 'Nike',
		brandLogo: nikeLogo,
		descriptions: [{ support: 'Lifetime warranty' }, { support: 'Original' }],
		price: 170,
		offPrice: 144.5,
		discount: 25.5,
		percendDiscount: 15,
		images: [jordan1, jordan2, jordan3],
	},
	{
		id: 3,
		name: 'Skacher',
		brand: 'Skacher',
		brandLogo: scacherLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 99,
		offPrice: 82.17,
		discount: 16.83,
		percendDiscount: 17,
		images: [skacher1, skacher2, skacher3, skacher4, skacher5],
	},
	{
		id: 4,
		name: 'Reebok',
		brand: 'Reebok',
		brandLogo: reebokLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 260,
		offPrice: 208,
		discount: 52,
		percendDiscount: 20,
		images: [reebok1, reebok2, reebok3],
	},
	{
		id: 5,
		name: 'Adidas',
		brand: 'Adidas',
		brandLogo: adidasLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 150,
		offPrice: 114,
		discount: 36,
		percendDiscount: 24,
		images: [adidas1, adidas2, adidas3],
	},
	{
		id: 6,
		name: 'ecco',
		brand: 'ecco',
		brandLogo: eccoLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 220,
		offPrice: 209,
		discount: 11,
		percendDiscount: 5,
		images: [ecco1, ecco2, ecco3],
	},
	{
		id: 7,
		name: 'Calvin',
		brand: 'Lacoste',
		brandLogo: locasteLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 214,
		offPrice: 115.56,
		discount: 98.44,
		percendDiscount: 46,
		images: [calvin1, calvin2],
	},
	{
		id: 8,
		name: 'Lego ZX',
		brand: 'Adidas',
		brandLogo: adidasLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 174,
		offPrice: 137.46,
		discount: 36.54,
		percendDiscount: 24,
		images: [lego1, lego2, lego3, lego4, lego5],
	},
	{
		id: 9,
		name: 'Yazi',
		brand: 'Yazi',
		brandLogo: scacherLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 235,
		offPrice: 192.7,
		discount: 42.3,
		percendDiscount: 18,
		images: [yazi1, yazi2, yazi3],
	},
	{
		id: 10,
		name: 'Cayana 27',
		brand: 'asics',
		brandLogo: asicsLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Original' },
			{ support: 'Free Delivery' },
		],
		price: 158,
		offPrice: 94.8,
		discount: 63.2,
		percendDiscount: 40,
		images: [cayana1, cayana2, cayana3],
	},
];
