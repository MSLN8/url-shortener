const express = require("express");
const Url = require("../models/url");
const btoa = require("btoa");
const atob = require("atob");
var cors = require("cors");

const router = express.Router();

// GET
router.get("/urls", (req, res, next) => {
  Url.find()
    .then(allTheUrls => {
      res.json(allTheUrls);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/:hash", (req, res) => {
  const baseid = req.params.hash;
  const id = atob(baseid);
  Url.findOne({ _id: id }, (err, doc) => {
    if (doc) {
      res.redirect(doc.url);
    } else {
      res.redirect("/");
    }
  });
});

//POST
router.post("/urls", cors(), (req, res, next) => {
  const urlData = req.body.url;
  Url.findOne({ url: urlData }, (err, doc) => {
    if (doc) {
      console.log("Entry found in db");
      res.send({
        url: urlData,
        hash: btoa(doc._id),
        status: 200,
        statusTxt: "ok"
      });
    } else {
      console.log("entry NOT found in db, saving new");
      var url = new URL({
        url: urlData
      });
      url.save(err => {
        if (err) return console.error(err);
        res.send({
          url: urlData,
          hash: btoa(url._id),
          status: 200,
          statusTxt: "OK"
        });
      });
    }
  });
});

module.exports = router;
