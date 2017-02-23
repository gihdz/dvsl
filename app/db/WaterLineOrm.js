import Waterline from 'waterline';


// Instantiate a new instance of the ORM
var orm = new Waterline();

//////////////////////////////////////////////////////////////////
// WATERLINE CONFIG
//////////////////////////////////////////////////////////////////
let migrate = process.env.NODE_ENV === "production" ? "safe" : "alter";
// Require any waterline compatible adapters here
// var diskAdapter = require('sails-disk')
var pgAdapter = require('sails-postgresql');
   let {DATABASE_URL, DB_SSL} = process.env;
   
// Build A Config Object
export let config = {

  // Setup Adapters
  // Creates named adapters that have been required
  adapters: {
    'default': pgAdapter,
    postgresql: pgAdapter
  },
  

 

  // Build Connections Config
  // Setup connections using the named adapter configs
  connections: {
    myLocalPostgreSQL: {
      adapter: 'postgresql',
      url: DATABASE_URL
    }
  },

  defaults: {
    migrate: migrate
  }

};
//////////////////////////////////////////////////////////////////
// WATERLINE MODELS
//////////////////////////////////////////////////////////////////

var User = Waterline.Collection.extend({

  identity: 'user',
  connection: 'myLocalPostgreSQL',

  attributes: {
    firstName: 'string',
    lastName: 'string'
  }
});

var Pet = Waterline.Collection.extend({

  identity: 'pet',
  connection: 'myLocalPostgreSQL',

  attributes: {
    name: 'string',
    breed: 'string'
  }
});

// var Contract = Waterline.Collection.extend({

//   identity: 'contracts',
//   connection: 'myLocalPostgreSQL',

//   attributes: {
//     id: {
//       type: 'integer',
//       primaryKey: true
//     },
//     referencenumber: 'string'
//   },
//   migrate: 'safe',
//   autoPK: false,
//   autoCreatedAt: false,
//   autoUpdatedAt: false
// });


// Load the Models into the ORM
orm.loadCollection(User);
orm.loadCollection(Pet);
// orm.loadCollection(Contract);


export default orm;
