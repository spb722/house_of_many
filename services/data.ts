import { Product } from '../types';

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wabi-Sabi Vase',
    description: 'A handcrafted ceramic vase embodying the beauty of imperfection. The textured surface catches light in unique ways, making it a perfect centerpiece for a minimalist home.',
    price: '$120',
    thumbnail: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1740&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1740&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1965&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070&auto=format&fit=crop',
    ],
    dimensions: '12" x 8"',
    material: 'Stoneware Clay',
  },
  {
    id: '2',
    name: 'Teak Stool',
    description: 'Carved from a single block of reclaimed teak, this stool serves as both functional seating and a sculptural object. The grain patterns tell the story of the tree.',
    price: '$350',
    thumbnail: 'https://images.unsplash.com/photo-1594052062635-43029f60046e?q=80&w=1887&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1594052062635-43029f60046e?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1888&auto=format&fit=crop',
    ],
    dimensions: '18" x 14"',
    material: 'Reclaimed Teak',
  },
  {
    id: '3',
    name: 'Linen Lounge Chair',
    description: 'Designed for deep relaxation, this chair features a low profile and generous cushions upholstered in organic, unbleached linen.',
    price: '$890',
    thumbnail: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596162955779-9c897cb57745?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=1887&auto=format&fit=crop',
    ],
    dimensions: '32" x 30" x 28"',
    material: 'Organic Linen, Oak',
  },
  {
    id: '4',
    name: 'Brutalist Candle Holder',
    description: 'Heavy, dark, and imposing. This cast iron candle holder adds a dramatic touch to any dining setting. Inspired by mid-century brutalist architecture.',
    price: '$85',
    thumbnail: 'https://images.unsplash.com/photo-1622372738946-62e02505f631?q=80&w=1887&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1622372738946-62e02505f631?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534349762230-e73717713f09?q=80&w=1887&auto=format&fit=crop',
    ],
    dimensions: '10" x 4"',
    material: 'Cast Iron',
  },
  {
    id: '5',
    name: 'Earthenware Bowl',
    description: 'A shallow bowl perfect for fruit or simply as display. The glaze is applied by hand, ensuring no two pieces are exactly alike.',
    price: '$95',
    thumbnail: 'https://images.unsplash.com/photo-1610701596061-2ecf2665f505?q=80&w=1887&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1610701596061-2ecf2665f505?q=80&w=1887&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605335613393-273641031336?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615486511484-92e172cc416d?q=80&w=2070&auto=format&fit=crop',
    ],
    dimensions: '14" Diameter',
    material: 'Terracotta',
  },
  {
    id: '6',
    name: 'Minimalist Lamp',
    description: 'Soft, diffused light emits from this frosted glass sculpture. A modern classic that fits seamlessly into contemporary interiors.',
    price: '$210',
    thumbnail: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507473885765-e6ed058f7959?q=80&w=2070&auto=format&fit=crop',
    ],
    dimensions: '16" x 10"',
    material: 'Frosted Glass, Steel',
  },
];

const BASE_CATEGORIES: Category[] = [
  {
    id: 'c1',
    title: 'Wooden Vases & Planters',
    description: 'Handcrafted vases that celebrate the beauty of natural wood.',
    image: 'https://images.unsplash.com/photo-1574635537920-d8f980148b8a?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 'c2',
    title: 'Animal & Bird Sculptures',
    description: 'Graceful forms inspired by nature.',
    image: 'https://images.unsplash.com/photo-1535359781650-6c589b9409f5?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 'c3',
    title: 'Human Figures',
    description: 'Contemporary sculptures capturing human emotions.',
    image: 'https://images.unsplash.com/photo-1550920444-12349195b098?q=80&w=1887&auto=format&fit=crop',
  },
  {
    id: 'c4',
    title: 'Wall Mirrors & Frames',
    description: 'Elegant mirrors with handcrafted wooden frames.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop',
  },
  {
    id: 'c5',
    title: 'Tabletop & Accent',
    description: 'Small statement pieces for corners that deserve character.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 'c6',
    title: 'Custom Creations',
    description: 'Made-to-order designs tailored to your unique space.',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1887&auto=format&fit=crop',
  },
];

// Duplicate to demonstrate scrolling with "6 in a row" design
export const CATEGORIES: Category[] = [
  ...BASE_CATEGORIES,
  ...BASE_CATEGORIES.map(c => ({...c, id: c.id + '_2'})),
  ...BASE_CATEGORIES.map(c => ({...c, id: c.id + '_3'})),
];