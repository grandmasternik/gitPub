const express = require("express");
const app = express();
const port = 3000;
const drinks = require(`./models/drinks`);

// ========Routes===========//
app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App");
});

app.get("/drinks/", (req, res)=>{
    res.render(`drinks_index.ejs`, {
        drinks
    })
});

// ========Show Routes========//
app.get("/drinks/:id", (req, res)=>{
    res.render('drinks_show.ejs',
    {
        drink: drinks[req.params.id]
    })
});

// ========Web Server========//
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });