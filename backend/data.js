import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Marco',
      email: 'casmacant@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: '715G6324-MOD-000-004X',
      slug: 'PCI tv philips',
      category: 'Tv',
      image: '/images/p1.jpg', // 679px × 829px
      price: 155,
      countInStock: 10,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'BN91-13583G',
      slug: 'Placa principal tv samsung',
      category: 'Tv',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Samsung',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: '1 876-561-13',
      slug: 'Placa principal tv sony',
      category: 'Tv',
      image: '/images/p3.jpg',
      price: 350,
      countInStock: 15,
      brand: 'Sony',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'EAX65363904(1.1)',
      slug: 'Placa principal tv lg',
      category: 'Tv',
      image: '/images/p4.jpg',
      price: 500,
      countInStock: 5,
      brand: 'Lg',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
