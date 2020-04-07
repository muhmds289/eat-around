var db = require("../models");

module.exports = function (app) {
  // Get all View sorted by different columns
  // GET working to return review + user + restaurant
  app.get("/api/view", function (req, res) {
    db.Review.findAll({
      attributes: ['body', 'rating', 'favorite'],
      raw: true,
      include: [
        {
          model: db.User,
          attributes: ['name']
        },
        {
          model: db.restaurant,
          attributes: ['name', 'cuisine', 'price']
          
        }
      ]
    }).then(function (dbView) {
      res.json(dbView);
    });
  });


  app.post("/api/eatAround", function (req, res) {
    console.log(req.body)
    db.eatAround.create(req.body).then(function (dbAddWhiskey) {
      // res.json(dbeatAround);
    });
  });

  app.delete("/api/restaurant/:id", function(req, res) {
    db.restaurant.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRestaurant) {
      res.render('viewRestaurant',{
        restaurants: dbRestaurant
      })
    });

  });

  app.post("/api/addReview", function (req, res) {
    console.log(req.body)
    db.Review.create(req.body).then(function (dbeatAround) {
      // res.json(dbeatAround);
    });
  });

  app.post("/api/addUser", function (req, res) {
    console.log(req.body)
    db.User.create(req.body).then(function (dbAddUser) {
      res.json(dbAddUser);
      console.log(dbAddUser)
    });
  });

  app.post("/api/addReview", function (req, res) {
    console.log(req.body)
    db.Review.create(req.body).then(function (dbAddReview) {
      res.json(dbAddReview);
      console.log(dbAddReview)
    });
  });
};
