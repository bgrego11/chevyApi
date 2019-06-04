var express = require('express');
var router = express.Router();



// create mongo model and connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_sr460dl9:og3urni9kkn5hoqtq4nptneaqs@ds151508.mlab.com:51508/heroku_sr460dl9', {useNewUrlParser: true});


var TradeIn = require('../tradeIn')

router.post('/', function(req, res, next) {
    let trade = new TradeIn(req.body)
    trade.save()
    res.send("sent")

    // let song = new Song({ 
    //         title: title,
    //         artist: artist
    //     });
    //     song.save(function (err) {
    //       if (err) return handleError(err);
    //       res.json({msg: "saved"})
    //       // saved!
    //     });

});

module.exports = router;


