const heroModel = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      age: { type: 'integer' },
      planet: { type: 'string' },
      gender: { type: 'string' },
      alien: { type: 'boolean' },
      tendency: { type: 'string' },
      editorial: { type: 'string' },
    },
  };
  
  module.exports = heroModel;
  