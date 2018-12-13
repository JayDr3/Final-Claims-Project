const fs = require('fs');

module.exports = {
    addClaimPage: (req, res) => {
        res.render('add-claim.ejs', {
            title: "Welcome to Teamabc-123 | Add a new claim"
            ,message: ''
        });
    },
    addClaim: (req, res) => {

        let message = '';
        let ssn = req.body.ssn;
        let first_name = req.body.first_name;
        let middle_init=req.body.middle_init;
        let last_name = req.body.last_name;
        let gender = req.body.gender;
        let number = req.body.number;
        let username = req.body.username;

        let usernameQuery = "SELECT * FROM `claims` WHERE user_name = '" + username + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Username already exists';
                res.render('add-claim.ejs', {
                    message,
                    title: "Welcome to Teamabc-123 | Add a new claim"
                });
            } else {
                        // send the claim's details to the database
                        let query = "INSERT INTO `claims` (ssn, first_name, middle_init, last_name, gender, number, user_name) VALUES ('" +
                            ssn + "', '" + first_name + "', '" + middle_init + "', '" + last_name + "', '" + gender + "', '" + number + "', '" + username + "')";
                        db.query(query, (err, result) => {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            res.redirect('/');
                        });
            
                }
        });
    },
    editClaimPage: (req, res) => {
        let claimId = req.params.id;
        let query = "SELECT * FROM `claims` WHERE id = '" + claimId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-claim.ejs', {
                title: "Edit Claim"
                ,claim: result[0]
                ,message: ''
            });
        });
    },
    editClaim: (req, res) => {
        let claimId = req.params.id;
        let ssn = req.body.ssn;
        let first_name = req.body.first_name;
        let middle_init=req.body.middle_init;
        let last_name = req.body.last_name;
        let gender=req.body.gender;
        let number = req.body.number;

        let query = "UPDATE `claims` SET `ssn` = '" + ssn + "',`first_name` = '" + first_name + "', `middle_init` = '" + middle_init + "', `last_name` = '" + last_name + "', `gender` = '" + gender + "', `number` = '" + number + "' WHERE `claims`.`id` = '" + claimId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/');
        });
    },
    deleteClaim: (req, res) => {
        let claimId = req.params.id;
        let deleteUserQuery = 'DELETE FROM claims WHERE id = "' + claimId + '"';
                db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
    }
};