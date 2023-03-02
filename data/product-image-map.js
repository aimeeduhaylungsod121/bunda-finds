export const PRODUCT_IMAGE_MAP = {
    'WIRELESS GAMING': {
        featuredImage: { source: require('../assets/images/xx99-mark-2.png') },
        images: [
            { source: require('../assets/images/xx99-mark-two-1.png') },
            { source: require('../assets/images/xx99-mark-two-2.png') },
            { source: require('../assets/images/xx99-mark-two-3.png') },
        ],
    },
    'XX99 Mark I': {
        featuredImage: { source: require('../assets/images/xx99-mark-1.png') },
        images: [
            { source: require('../assets/images/xx99-mark-one-1.png') },
            { source: require('../assets/images/xx99-mark-one-2.png') },
            { source: require('../assets/images/xx99-mark-one-3.png') },
        ],
    },
    KIDS: {
        featuredImage: { source: require('../assets/images/xx59.png') },
        images: [
            { source: require('../assets/images/xx59-1.png') },
            { source: require('../assets/images/xx59-2.png') },
            { source: require('../assets/images/xx59-3.png') },
        ],
    },
    ZX9: {
        featuredImage: { source: require('../assets/images/zx9.png') },
        images: [
            { source: require('../assets/images/zx9-1.png') },
            { source: require('../assets/images/zx9-2.png') },
            { source: require('../assets/images/zx9-3.png') },
        ],
    },
    TELEVISION: {
        featuredImage: { source: require('../assets/images/zx7.png') },
        images: [
            { source: require('../assets/images/zx7-1.png') },
            { source: require('../assets/images/zx7-2.png') },
            { source: require('../assets/images/zx7-3.png') },
        ],
    },
    'SAMSUNG CELLPHONE': {
        featuredImage: { source: require('../assets/images/yx1.png') },
        images: [
            { source: require('../assets/images/yx1-1.png') },
            { source: require('../assets/images/yx1-2.png') },
            { source: require('../assets/images/yx1-3.png') },
        ],
    },
};

export const DATA = [
    {
        id: 1,
        category: 'headphones',
        is_featured: true,
        name: 'WIRELESS GAMING',
        description:
            '',
        featuredImage: { source: require('../assets/images/xx99-mark-2.png') },
        images: [
            { source: require('../assets/images/xx99-mark-two-1.png') },
            { source: require('../assets/images/xx99-mark-two-2.png') },
            { source: require('../assets/images/xx99-mark-two-3.png') },
        ],
        price: 2500,
        features:
            '',
        includedItems: [
            { amount: 1, name: 'Headphone Unit' },
            { amount: 2, name: 'Replacement Earcups' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: '3.5mm 5m Audio Cable' },
            { amount: 1, name: 'Travel Bag' },
        ],
    },
    {
        id: 2,
        category: 'Shop',
        is_featured: true,
        name: 'Sandals',
        description:
            '',
        featuredImage: { source: require('../assets/images/xx99-mark-1.png') },
        images: [
            { source: require('../assets/images/xx99-mark-one-1.png') },
            { source: require('../assets/images/xx99-mark-one-2.png') },
            { source: require('../assets/images/xx99-mark-one-3.png') },
        ],
        price: 1750,
        features:
            '',
        includedItems: [
            { amount: 1, name: 'Headphone Unit' },
            { amount: 2, name: 'Replacement Earcups' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: '3.5mm 5m Audio Cable' },
        ],
    },
    {
        id: 3,
        category: 'headphones',
        is_featured: false,
        name: 'KIDS',
        description:
            '',
        featuredImage: { source: require('../assets/images/xx59.png') },
        images: [
            { source: require('../assets/images/xx59-1.png') },
            { source: require('../assets/images/xx59-2.png') },
            { source: require('../assets/images/xx59-3.png') },
        ],
        price: 750,
        features:
            '',
        includedItems: [
            { amount: 1, name: 'Headphone Unit' },
            { amount: 2, name: 'Replacement Earcups' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: '3.5mm 5m Audio Cable' },
        ],
    },
    {
        id: 4,
        category: 'shop',
        is_featured: true,
        name: 'Makeup',
        description:
            '',
        featuredImage: { source: require('../assets/images/zx9.png') },
        images: [
            { source: require('../assets/images/zx9-1.png') },
            { source: require('../assets/images/zx9-2.png') },
            { source: require('../assets/images/zx9-3.png') },
        ],
        price: 4500,
        features:
            '',
        includedItems: [
            { amount: 2, name: 'Speaker Unit' },
            { amount: 2, name: 'Speaker Cloth Panel' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: '3.5mm 10m Audio Cable' },
            { amount: 1, name: '10m Optical Cable' },
        ],
    },
    {
        id: 5,
        category: 'speakers',
        is_featured: false,
        name: 'TELEVISION',
        description:
            '',
        featuredImage: { source: require('../assets/images/zx7.png') },
        images: [
            { source: require('../assets/images/zx7-1.png') },
            { source: require('../assets/images/zx7-2.png') },
            { source: require('../assets/images/zx7-3.png') },
        ],
        price: 3500,
        features:
            '',
        includedItems: [
            { amount: 2, name: 'Speaker Unit' },
            { amount: 2, name: 'Speaker Cloth Panel' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: '3.5mm 7.5m Audio Cable' },
            { amount: 1, name: '7.5m Optical Cable' },
        ],
    },
    {
        id: 6,
        category: 'earphones',
        is_featured: false,
        name: 'SAMSUNG CELLPHONE',
        description:
            '',
        featuredImage: { source: require('../assets/images/yx1.png') },
        images: [
            { source: require('../assets/images/yx1-1.png') },
            { source: require('../assets/images/yx1-2.png') },
            { source: require('../assets/images/yx1-3.png') },
        ],
        price: 600,
        features:
            '',
        includedItems: [
            { amount: 2, name: 'Earphone Unit' },
            { amount: 6, name: 'Multi-size Earplugs' },
            { amount: 1, name: 'User Manual' },
            { amount: 1, name: 'USB-C Charging Cable' },
            { amount: 1, name: 'Travel Pouch' },
        ],
    },
];
