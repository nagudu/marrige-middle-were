import db from "../models";

export const sing_up = (req, res) => {
    const { id='', username, i_m_a, i_m_looking_for, age, email, password, } = req.body;
    db.sequelize
        .query(`INSERT INTO users( username, i_m_a, i_m_looking_for, age, email, password) VALUES  ('${username}','${i_m_a}','${i_m_looking_for}','${age}','${email}','${password}')`)
        .then((results) => res.json({ results, success: true, message: "successfull submit" }))
        .catch((err) => {
            console.log(err)
            res.json({ err, success: false })})
}; 

export const long_in = (req, res) => {
    const { id='', username, email, password, } = req.body;
    db.sequelize
        .query(`SELECT * FROM users WHERE email="${email}" and password="${password}"`)
        .then((results) => {
            if(results[0].length){
                res.json({ loggedIn: true, user: results[0] })
            } else {
                res.json({ loggedIn: false, message: "Email or password is not correct" })
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({ err, success: false })})
}; 

export const getUserInfo = (req, res) => {
    const { user_id } = req.params

    db.sequelize
        .query(`SELECT * FROM users WHERE id="${user_id}" `)
        .then((results) => {
            if(results[0].length){
                res.json({ success:true, user: results[0] })
            } else {
                res.json({ success:false, message: "Email not found" })
            }
        })
        .catch((err) => {
            console.log(err)
            res.json({ err, success: false })
        })
}; 