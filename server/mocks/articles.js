module.exports = function(app) {
  var express = require('express');
  var articlesRouter = express.Router();

  articlesRouter.get('/', function(req, res) {
    res.send({
      'articles': []
    });
  });

  articlesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  articlesRouter.get('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.put('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/articles', articlesRouter);
};
