const db = require("../config/db");
const bodyParser = require('body-parser');
const axios = require('axios');

const checkUser = async(req,res)=>{
    try {
        const { Email, password } = req.body;

        if (!Email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Invalid input. Please fill in all fields.'
            });
        }

        const [results] = await db.query(`SELECT * FROM signup WHERE Email = ? AND password = ?`, [Email, password]);

        if (results.length === 0) {
            return res.status(401).send({
                success: false,
                message: 'Invalid email or password.'
            });
        }

        const user = results[0];
        res.status(200).send({
            success: true,
            message: 'Login successful',
            user: user  // Optional: Send user data (excluding sensitive information like password)
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error didnt even connect with db',
            error:error.message
    })
    }
}
const createUser = async(req,res)=>{
    try {
        const {Name,Email,password} = req.body;
        if( !Name || !Email){
            return  res.status(500).send({
                  success:false,
                  message:'invalid please fill all of the fields above'
              })
          }
          const data = await db.query(`INSERT INTO signup (Name,Email,password) VALUES(?,?,?)`, [Name,Email,password]);
          if(!data){
            return res.status(404).send({
                success:false,
                message:'no data entered'
            })
          }
          res.status(200).send({
            success:true,
            message:'User created successfully'
          })

        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error didnt even connect with db',
            error:error.message
        })
    }


}

const getqurantext = async(req,res)=>{

    const chapterNumber = req.params.chapter_number; // Assuming the chapter number is provided as a path parameter
  
    try {
      const response = await axios.get(`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${chapterNumber}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching data from the Quran API');
    }

}

const getquranaudio = async(req,res)=>{

    const {recitation_id,chapterNumber}=req.params;
    try {
        const response = await axios.get(`https://api.quran.com/api/v4/recitations/${recitation_id}/by_chapter/${chapterNumber}`);
        const audio = response.data;
        console.log(audio);
        res.json(audio);
    } catch (error) {
        res.status(500).send('Error getting audio file from the Quran API ')
    }


}





module.exports={createUser,checkUser,getqurantext,getquranaudio};