import app from './app';
import appRoutes from './app/controllers';    
import orm, {config} from './app/db/WaterLineOrm';
let {SERVER_PORT} = process.env;


// Setting routes
app.use(appRoutes);


// Start Waterline passing adapters in
orm.initialize(config, function(err, models) {
  if(err) throw err;

  app.models = models.collections;
  app.connections = models.connections;
  // Start Server
  app.listen(SERVER_PORT);

// Stormpath will let you know when it's ready to start authenticating users.
// app.on('stormpath.ready', function () {
//   console.log('Stormpath Ready!');
// });

  console.log(`Server listening on port ${SERVER_PORT}`)
  console.log("Waterline initialized!");
});


