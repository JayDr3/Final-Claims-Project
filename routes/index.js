module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `claims` ORDER BY id ASC"; // query database to get all the claims

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "Welcome to Teamabc-123 | View Claims"
                ,claims: result
            });
        });
    },
};