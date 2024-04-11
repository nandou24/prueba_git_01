const express = require('express');
const router = express.Router();


const listUsers = [{id:1, name:"nando", lastname:"acuña"},{id:2,name:"sofia", lastname:"rivera"}]
//Listar
router.get('/', (req, res)=>{
    res.json(listUsers)
})


router.get('/:userId/show',(req,res)=>{
    const {userId} = req.params
         //Forma reducida
    const userFinded = listUsers.find(user => user.id === Number(userId))
    //Envía el mensaje con la data 
    res.json(userFinded)
})

router.delete('/:userId', (req, res)=>{

})

router.post('/', (req, res)=>{

})

router.put('/:userId', (req,res)=>{

})

module.exports = router;