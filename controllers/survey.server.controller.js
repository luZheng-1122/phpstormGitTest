var express = require('express');

module.exports.showForm = function(req,res){
    products = req.app.locals.products;
    res.render('survey.ejs', {products:products});
}

module.exports.showResult = function (req,res) {
    console.log(req.body);
    gender = req.body.gender;
    productidx = req.body.vote;
    products = req.app.locals.products;
    surveyresults = req.app.locals.surveyresults;
    var hasVote = 0;

    sess = req.session;
    console.log(sess);


    // res.render('surveyresult.ejs',{products:products, surveyresults: surveyresults, hasVote: hasVote});
    if ("vote" in sess){
        hasVote = 1;
        res.render('surveyresult.ejs',{products:products, surveyresults: surveyresults, hasVote: hasVote});
    }
    else{
        sess.vote = productidx;
        if(gender == 0){
            surveyresults.mp[productidx]++;
        }
        else{
            surveyresults.fp[productidx]++;
        }
        res.render('surveyresult.ejs', {products:products, surveyresults: surveyresults, hasVote: hasVote});
    }

}