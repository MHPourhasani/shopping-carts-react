import alpha1 from './asset/image/alpha/alpha1.jpg';
import alpha2 from './asset/image/alpha/alpha2.jpg';
import alpha3 from './asset/image/alpha/alpha3.jpg';

import jordan1 from './asset/image/jordan/jordan1.jpg';
import jordan2 from './asset/image/jordan/jordan2.jpg';
import jordan3 from './asset/image/jordan/jordan3.jpg';

import skacher1 from './asset/image/skacher/skacher1.jpg';
import skacher2 from './asset/image/skacher/skacher2.jpg';
import skacher3 from './asset/image/skacher/skacher3.jpg';
import skacher4 from './asset/image/skacher/skacher4.jpg';
import skacher5 from './asset/image/skacher/skacher5.jpg';
import scacherLogo from './asset/image/scacherLogo.png';

import reebok1 from './asset/image/reebok/reebok1.jpg';
import reebok2 from './asset/image/reebok/reebok2.jpg';
import reebok3 from './asset/image/reebok/reebok3.jpg';
import reebokLogo from './asset/image/reebokLogo.png';

import adidas1 from './asset/image/adidas/adidas1.jpg';
import adidas2 from './asset/image/adidas/adidas2.jpg';
import adidas3 from './asset/image/adidas/adidas3.jpg';
import adidasLogo from './asset/image/adidasLogo.png';

import ecco1 from './asset/image/ecco/ecco1.jpg';
import ecco2 from './asset/image/ecco/ecco2.jpg';
import ecco3 from './asset/image/ecco/ecco3.jpg';
import eccoLogo from './asset/image/eccoLogo.png';

import nikeLogo from './asset/image/nikeLogo.png';

export const products = [
	{
		id: 1,
		name: 'Alpha',
		brand: 'Adidas',
		brandLogo: adidasLogo,
		descriptions: [
			{ support: 'Lifetime warranty' },
			{ support: 'Free Delivery' },
			{ support: 'Original' },
		],
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
];
