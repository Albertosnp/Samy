const { filterProducts } = require('./filterProducts');

describe('Test to filterProducts function', () => {
  const allProducts = [
    {
      type: 'Image',
      id: 2,
      title: 'Grey beach',
      price: 43,
      author: 'Mary Robinette',
      created_at: '2012-12-12T21: 08: 20Z',
      main_attachment: {
        big: 'https://picsum.photos/id/100/600',
        small: 'https://picsum.photos/id/100/300',
      },
      likes_count: 1,
      liked: false,
      links: [
        {
          rel: 'avatar',
          uri: 'http://lorempixel.com/250/250/',
          methods: 'GET',
        },
        {
          rel: 'like',
          uri: 'http://localhost:3100/images/2/likes',
          methods: 'POST',
        },
      ],
    },
    {
      type: 'Image',
      id: 3,
      title: 'A castle',
      price: 45,
      author: 'Aliette de Bodard',
      created_at: '2012-12-12T21: 08: 20Z',
      main_attachment: {
        big: 'https://picsum.photos/id/101/600',
        small: 'https://picsum.photos/id/101/300',
      },
      likes_count: 2,
      liked: true,
      links: [
        {
          rel: 'avatar',
          uri: 'http://lorempixel.com/250/250/',
          methods: 'GET',
        },
        {
          rel: 'like',
          uri: 'http://localhost:3100/images/3/likes',
          methods: 'POST',
        },
      ],
    },
    {
      type: 'Image',
      id: 4,
      title: 'Red fruits',
      price: 30,
      author: 'SamyRoad',
      created_at: '2012-12-12T21: 08: 20Z',
      main_attachment: {
        big: 'https://picsum.photos/id/102/600',
        small: 'https://picsum.photos/id/102/300',
      },
      likes_count: 7,
      liked: true,
      links: [
        {
          rel: 'avatar',
          uri: 'http://lorempixel.com/250/250/',
          methods: 'GET',
        },
        {
          rel: 'like',
          uri: 'http://localhost:3100/images/4/likes',
          methods: 'POST',
        },
      ],
    },
    {
      type: 'Image',
      id: 5,
      title: "Feet don't fail me",
      price: 12,
      author: 'Djeli Clark',
      created_at: '2012-12-12T21: 08: 20Z',
      main_attachment: {
        big: 'https://picsum.photos/id/103/600',
        small: 'https://picsum.photos/id/103/300',
      },
      likes_count: 8,
      liked: false,
      links: [
        {
          rel: 'avatar',
          uri: 'http://lorempixel.com/250/250/',
          methods: 'GET',
        },
        {
          rel: 'like',
          uri: 'http://localhost:3100/images/5/likes',
          methods: 'POST',
        },
      ],
    },
    {
      type: 'Image',
      id: 16,
      title: 'Dream',
      author: 'Brooke Bolander',
      price: 310,
      created_at: '2012-12-12T21: 08: 20Z',
      main_attachment: {
        big: 'https://picsum.photos/id/104/600',
        small: 'https://picsum.photos/id/104/300',
      },
      likes_count: 8,
      liked: false,
      links: [
        {
          rel: 'avatar',
          uri: 'http://lorempixel.com/250/250/',
          methods: 'GET',
        },
        {
          rel: 'like',
          uri: 'http://localhost:3100/images/16/likes',
          methods: 'POST',
        },
      ],
    },
  ];

  it('Should return empty array when pass empty string', () => {
    const products = filterProducts({ allProducts: [], wordSearched: '' });

    expect(products).toEqual([]);
  });

  it('Should return one product when typing Grey"', () => {
    const products = filterProducts({ allProducts, wordSearched: 'Grey' });

    expect(products).toEqual([
      {
        "type": "Image",
        "id": 2,
        "title": "Grey beach",
        "price": 43,
        "author": "Mary Robinette",
        "created_at": "2012-12-12T21: 08: 20Z",
        "main_attachment": {
            "big": "https://picsum.photos/id/100/600",
            "small": "https://picsum.photos/id/100/300"
        },
        "likes_count": 1,
        "liked": false,
        "links": [
            {
                "rel": "avatar",
                "uri": "http://lorempixel.com/250/250/",
                "methods": "GET"
            },
            {
                "rel": "like",
                "uri": "http://localhost:3100/images/2/likes",
                "methods": "POST"
            }
        ]
    }
    ]);
  });

  it('Should return an empty array when allproducts it´s not an array', () => {
    const products = filterProducts({
      allProducts: '',
      wordSearched: 'Grey',
    });

    expect(products).toEqual([]);
  });

  it('Should return an empty array when wordSearched it´s not an string', () => {
    const products = filterProducts({
      allProducts: allProducts,
      wordSearched: false,
    });

    expect(products).toEqual([]);
  });
});
