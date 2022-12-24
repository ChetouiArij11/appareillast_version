

const express = require("express");
const route = express.Router();
const Appareil = require("../models/appareil.model");


// GET
route.get("/", (req, res) => {
  //res.status(200).json(appareils)
  Appareil.find().then((listAppareils) => {
    console.log(listAppareils);
    res.status(200).json(listAppareils);
  });
});

// GET/:id
route.get("/:id", (req, res) => {
  //console.log(req.params.id);
  //res.status(200).send(`${req.params.id} reçu !`);

  Appareil.findById(req.params.id)
    .then((monApp) => {
      console.log(monApp);
      res.status(200).json(monApp);
    })
    .catch((err) => {
      res.status(404).json({ message: "appareil not found!" });
      console.log("Appareil non trouvé !");
    });

  // appareil = appareils.find((e) => {
  //   return e._id == req.params.id
  // })

  // if (appareil == undefined) {
  //   res.status(404).json({'message': 'appareil not found!'})
  // }
  // else {
  //   res.status(200).json(appareil)
  // }
});

// POST
route.post("/", (req, res) => {
  Appareil.create({ "name": req.body.name, "status": req.body.status })
    .then((monApp) => {
        console.log(monApp);
        res.status(200).json(monApp);
      }
    );

  // console.log('Contenu de req.body: ' + req.body._id)
  // appareils.push({ '_id': req.body._id, 'name': req.body.name, 'status': req.body.status })
  // appareils.push(req.body);
  // res.status(201).json(appareils);
});

// PUT

// DELETE

module.exports = route;

