import express from 'express'
import app from '../../app';
let router = express.Router();
// Build Express Routes (CRUD routes for /users)


router.get('/users', function(req, res) {
  app.models.user.find().exec(function(err, models) {
    if(err) return res.json({ err: err }, 500);
    res.json(models);
    // res.status(500).json({ err: "lol" });
    // res.type('json');
    // res.customMessage = "lol"
    // res.status(500).send('Custom error');
    
  });
});
router.post('/users', function(req, res) {
//   console.log(req.body);
  // let body = req.body;
  app.models.user.create(req.body, function(err, model) {
    if(err) return res.json({ err: err }, 500);
    res.json(model);
  });
  // res.json({bodyyy: JSON.stringify(req.body)})
});
router.delete('/users', function(req, res) {
  app.models.user.destroy(req.body, function(err, model) {
    if(err) return res.json({ err: err }, 500);
    res.json(model);
  });
  // res.json({body: req.body});
});

router.get('/contracts', (req, res) => {
 app.models.contracts.find().exec(function(err, models) {
    if(err) return res.json({ err: err }, 500);
    res.json(models);
     });
});

export default router;