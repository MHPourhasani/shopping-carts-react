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

import reebok1 from './asset/image/reebok/reebok1.jpg';
import reebok2 from './asset/image/reebok/reebok2.jpg';
import reebok3 from './asset/image/reebok/reebok3.jpg';

import adidas1 from './asset/image/adidas/adidas1.jpg';
import adidas2 from './asset/image/adidas/adidas2.jpg';
import adidas3 from './asset/image/adidas/adidas3.jpg';

import eco1 from './asset/image/eco/eco1.jpg';
import eco2 from './asset/image/eco/eco2.jpg';
import eco3 from './asset/image/eco/eco3.jpg';

export const products = [
	{
		id: 1,
		name: 'Alpha',
		description: [
			{ support: 'گارانتی مادام العمر' },
			{ support: 'ارسال رایگان' },
			{ support: 'اورجینال' },
		],
		price: 120,
		offPrice: 115,
		discount: 0,
		// image: 'https://s4.uupload.ir/files/item2_fc5s.jpg',
		images: [alpha1, alpha2, alpha3],
	},
	{
		id: 2,
		name: 'Jordan',
		description: [{ support: 'گارانتی مادام العمر' }, { support: 'اورجینال' }],
		price: 170,
		offPrice: 160,
		discount: 8,
		// image: 'https://s4.uupload.ir/files/item2_fc5s.jpg',
		images: [jordan1, jordan2, jordan3],
	},
	{
		id: 3,
		name: 'Skacher',
		description: [
			{ support: 'گارانتی مادام العمر' },
			{ support: 'اورجینال' },
			{ support: 'ارسال رایگان' },
		],
		price: 99,
		offPrice: 89,
		discount: 10,
		// image: 'https://s4.uupload.ir/files/item3_zvc9.jpg',
		images: [skacher1, skacher2, skacher3, skacher4, skacher5],
	},
	{
		id: 4,
		name: 'Reebok',
		description: [
			{ support: 'گارانتی مادام العمر' },
			{ support: 'اورجینال' },
			{ support: 'ارسال رایگان' },
		],
		price: 260,
		offPrice: 220,
		discount: 15,
		// image: 'https://s4.uupload.ir/files/item4_zr94.jpg',
		images: [reebok1, reebok2, reebok3],
	},
	{
		id: 5,
		name: 'Adidas',
		description: [
			{ support: 'گارانتی مادام العمر' },
			{ support: 'اورجینال' },
			{ support: 'ارسال رایگان' },
		],
		price: 150,
		offPrice: 135,
		discount: 0,
		// image: 'https://s4.uupload.ir/files/item5_24ye.jpg',
		images: [adidas1, adidas2, adidas3],
	},
	{
		id: 6,
		name: 'eco',
		description: [
			{ support: 'گارانتی مادام العمر' },
			{ support: 'اورجینال' },
			{ support: 'ارسال رایگان' },
		],
		price: 220,
		offPrice: 200,
		discount: 13,
		// image: 'https://s4.uupload.ir/files/item6_7jfy.jpg',
		images: [eco1, eco2, eco3],
	},
];
