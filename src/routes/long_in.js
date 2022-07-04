const { long_in,sing_up, getUserInfo } = require("../controllers/long_in");
module.exports = (app) => { 
    app.post("/api/sing_up", sing_up);
    app.post("/api/long_in", long_in);
    app.get("/api/get_user/:user_id", getUserInfo);
} 
