var controller = require('../controllers/dashboard.js')
module.exports = function(app) {
  app.get('/',controller.index);
  app.get('/new',controller.new);
  app.get('/:id',controller.display);
  app.post('/mongooses',controller.create);
  app.get('/:id/edit/',controller.edit);
  app.post('/mongooses/:id',controller.update);
  app.post('/:id/destroy',controller.destroy);
 }
