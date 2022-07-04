const { edit_pro_file } = require("../controllers/edit_pro_file");
module.exports = (app) => { 
    app.post("/api/edit_pro_file", edit_pro_file);
} 