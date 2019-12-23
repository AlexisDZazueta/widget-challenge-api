const widgetsMock = [
  {
    id: 'b78f0a5b-b871-4d37-8ba7-c99150f7c9e8',
    code: 'Widget 1577',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Elite',
    size: 'Large',
    color: 'Teal'
  },
  {
    id: '4ffc8df5-a6e0-4d09-8e72-d494fee2a30d',
    code: 'Widget 2829',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Prime',
    size: 'Medium',
    color: 'Orange'
  },
  {
    id: '3066d3dd-1264-428f-b28b-5d95f1854359',
    code: 'Widget 1653',
    cover: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
    type: 'Extreme Edition',
    size: 'Large',
    color: 'Mauv'
  },
  {
    id: '2d08ce83-bc31-4244-aa51-a2c6f970ce49',
    code: 'Widget 2122',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Prime',
    size: 'Extra Small',
    color: 'Pink'
  },
  {
    id: '366ff121-bc7f-4267-a09f-fefd93a0a580',
    code: 'Widget 2881',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Elite',
    size: 'Large',
    color: 'Purple'
  },
  {
    id: 'fdfb144d-7095-4073-a260-980849a6217f',
    code: 'Widget 1697',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Elite',
    size: 'Small',
    color: 'Crimson'
  },
  {
    id: 'eda2c15e-e9e7-4b8f-bd58-de3123acd98e',
    code: 'Widget 2123',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Extreme Edition',
    size: 'Extra Large',
    color: 'Goldenrod'
  },
  {
    id: 'ebe663a9-e554-42f4-9df5-22175c62d765',
    code: 'Widget 1757',
    cover: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
    type: 'Extreme Edition',
    size: 'Large',
    color: 'Violet'
  },
  {
    id: '832544a8-3d28-4f42-8bb2-541e41ede033',
    code: 'Widget 1627',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Elite',
    size: 'Extra Large',
    color: 'Maroon'
  },
  {
    id: '18e8905c-30d4-4461-8b97-8d593eee9e5d',
    code: 'Widget 1464',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Prime',
    size: 'Medium',
    color: 'Mauv'
  },
  {
    id: '7a9774d1-4593-43e0-93d1-aecb8ea57735',
    code: 'Widget 2062',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Elite',
    size: 'Extra Small',
    color: 'Green'
  },
  {
    id: '90b5587a-862c-4db4-991c-8e6998282dc9',
    code: 'Widget 1194',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Prime',
    size: 'Medium',
    color: 'Red'
  },
  {
    id: 'c1b1b7aa-f298-4f12-9889-2ea7363f7955',
    code: 'Widget 1649',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Prime',
    size: 'Extra Large',
    color: 'Crimson'
  },
  {
    id: '9671a2ad-f06a-4ccd-addf-f339922aa9d4',
    code: 'Widget 1946',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Extreme Edition',
    size: 'Extra Small',
    color: 'Khaki'
  },
  {
    id: '8c2b500a-e819-469e-b4df-6b2113c7f428',
    code: 'Widget 2070',
    cover: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
    type: 'Extreme Edition',
    size: 'Large',
    color: 'Yellow'
  },
  {
    id: '99c19ccb-460f-4fea-94de-3a3b7ce8b283',
    code: 'Widget 1714',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Extreme Edition',
    size: 'Large',
    color: 'Puce'
  },
  {
    id: 'b9e7e51f-33b5-4308-bac1-a9a62a686155',
    code: 'Widget 1423',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Elite',
    size: 'Extra Small',
    color: 'Red'
  },
  {
    id: '05d6c27e-e0cc-480d-aab5-f9928eb7136c',
    code: 'Widget 1056',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Prime',
    size: 'Large',
    color: 'Crimson'
  },
  {
    id: '0dd43c05-b685-4c63-bfb1-86c8da97835d',
    code: 'Widget 1307',
    cover: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
    type: 'Prime',
    size: 'Small',
    color: 'Green'
  },
  {
    id: '09228d85-ad0c-41fe-8836-dff3b52b1ec9',
    code: 'Widget 1042',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Extreme Edition',
    size: 'Medium',
    color: 'Orange'
  },
  {
    id: '044a47c2-f83d-4806-9bad-25624b4729d6',
    code: 'Widget 2404',
    cover: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
    type: 'Elite',
    size: 'Extra Large',
    color: 'Fuscia'
  },
  {
    id: '7743a2ef-5d26-4296-98bf-b4307951ead1',
    code: 'Widget 1089',
    cover: 'http://dummyimage.com/250x250.png/dddddd/000000',
    type: 'Prime',
    size: 'Large',
    color: 'Puce'
  }
];

module.exports = {
  widgetsMock
};
