const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");
const port = 3000;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "foodsaver",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM tbl_buyerreg";
  const sqlSelect1 = "SELECT * FROM tbl_bussellerreg";
  const sqlSelect2 = "SELECT * FROM tbl_indsellerreg";
  const sqlInsert3 = "SELECT * FROM tbl_sellerlisting";

  db.query(sqlSelect, (err, result1) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error in query 1");
    }

    db.query(sqlSelect1, (err, result2) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error in query 2");
      }

      db.query(sqlSelect2, (err, result3) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Error in query 3");
        }
        db.query(sqlInsert3, (err, result4) => {
            if (err) {
              console.log(err);
              return res.status(500).send("Error in query 4");
            }
        // Combine the results and send the response
        const combinedResult = {
          tbl_buyerreg: result1,
          tbl_bussellerreg: result2,
          tbl_indsellerreg: result3,
          tbl_sellerlisting:result4,
        };

        res.send(combinedResult);
      });
    });
  });
});
});


app.get("/api/getItem/:itemId", (req, res) => {
    const itemId = req.params.itemId;
    const sqlSelect = "SELECT * FROM tbl_sellerlisting WHERE itemID = ?";
    
    db.query(sqlSelect, [itemId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error in query");
        }

        res.send(result);
    });
});


app.get('/getDistance/:zipcode1/:zipcode2', async (req, res) => {
    const apiKey = 'CjeJpL155to7xuMCX5itSgHtncw3KaAIIhn5M6MjigeuU1hV0JfM9gKnyWBul2N8l';
    const { zipcode1, zipcode2 } = req.params;
  
    try {
      const response = await axios.get(`https://www.zipcodeapi.com/rest/${apiKey}/distance.json/${zipcode1}/${zipcode2}/mile`);
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching distance:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


app.post("/api/insert", (req, res)=>{
const Name= req.body.Name;
const Email  = req.body.Email;
const Password = req.body.Password;
const Confirm_Password = req.body.Confirm_Password;
const Username = req.body.Username;

const businessName = req.body.businessName;
const businessEmail= req.body.businessEmail;
const businessPassword= req.body.businessPassword;
const confirm_businessPassword= req.body.confirm_businessPassword;
const businessAddress=req.body.businessEmail;
const businessNumber=req.body.businessNumber;

const individualName=req.body.individualName;
const individualEmail=req.body.individualEmail;
const individualPassword=req.body.individualPassword;
const confirm_individualPassword=req.body.confirm_individualPassword;
const individualAddress=req.body.individualAddress;
const individualSSN=req.body.individualSSN;

const itemName= req.body.itemName;
const itemPrice  = req.body.itemPrice;
const itemExp = req.body.itemExp;
const itemDesc = req.body.itemDesc;
const itemAddress = req.body.itemAddress;
const itemUnit= req.body.itemUnit;
const itemIMG= req.body.itemIMG;
const itemCat= req.body.itemCat;


    const sqlInsert =
     "INSERT INTO `tbl_buyerreg` (Name, Email, Password, Confirm_Password, Username) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, Password, Confirm_Password, Username], (err, result)=>{
console.log(result);
    });

    const sqlInsert1 =
    "INSERT INTO `tbl_bussellerreg` (businessName, businessEmail, businessPassword, confirm_businessPassword,businessAddress,businessNumber) VALUES (?,?,?,?,?,?)";
   db.query(sqlInsert1, [businessName, businessEmail, businessPassword, confirm_businessPassword,businessAddress,businessNumber], (err, result)=>{
console.log(result);
   });

   const sqlInsert2 =
   "INSERT INTO `tbl_indsellerreg` (individualName, individualEmail, individualPassword, confirm_individualPassword,individualAddress,individualSSN) VALUES (?,?,?,?,?,?)";
  db.query(sqlInsert2, [individualName, individualEmail, individualPassword, confirm_individualPassword, individualAddress, individualSSN], (err, result)=>{
console.log(result);
  });

  const sqlInsert3 =
  "INSERT INTO `tbl_sellerlisting` (itemName, itemPrice, itemDesc, itemExp,itemAddress,itemUnit,itemCat,itemIMG) VALUES (?,?,?,?,?,?,?,?)";
 db.query(sqlInsert3, [itemName, itemPrice, itemDesc, itemExp,itemAddress,itemUnit,itemCat,itemIMG], (err, result)=>{
console.log(result);


 });

 
});





app.listen(3001, () => {
    console.log("running on port 3001");
});