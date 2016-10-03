var Films = require('../client/src/models/films');

var FilmApi = function(app) {
  
  var films = new Films();

  app.get("/films", function(req, res) {
    res.json({data: films});
  });

  app.get("/films/:id", function(req, res) {
    var foundFilm = req.params.id;
    res.json({data: films[foundFilm]});
  });

  app.post("/films", function(req, res) {
    films.push(req.body.film);
    res.json({data: films});
  });

  app.delete("/films/:id", function(req, res) {
    films.splice(req.params.id, 1);
    res.json({data: films});
  });

  app.put("/films/:id", function(req, res) {
   films[req.params.id] = req.body.film;
   res.json({data: films});
  });

}

module.exports = FilmApi;