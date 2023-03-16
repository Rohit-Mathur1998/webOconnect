const pool = require("../database");
const bcrypt = require("bcrypt");
require("dotenv");

const create = (req,res) => {
    try {
        const {id,name,email,password,gender,status}=req.body;
        pool.query(`insert into users(id,name,email,password,gender,status) values('${id}','${name}','${email}','${password}','${gender}','Pending')`,(err,result)=>{
            if(err){
                return res.send({status:"error", message:err.message})
            }
            return res.send({result})
        })
        
    } catch (error) {
        return res.send({status:"error", message:error.message})
        
    }
}


const updateProfile = (req,res) =>{

    try {
        const{email} = req.body
pool.query(`update users set email='${email}'`,(err,result)=> {
    if(err){
        return res.send({status:"error",message:err.message})
    }
    return res.send({result})
})
        
    } catch (error) {
        return res.send({status:"error",message:err.message})
    }
}

const updatePassword =(req,res) => {
    try {
        const {oldpassword,id} = req.body;
        pool.query(`select password from users where id='${id}'`,(err,result) => {
            if(err){
                return res.send({status:"error", message:err.message})
            }
         if(result[0].password != req.body.oldpassword ){
            return res.send({message:"password is incorrect"})
         }
         else{
            pool.query(`update users set password='${req.bodynewpassword}'`,(err,result1)=>{
                if(err){
                    return res.send({status:"error", message:err.message})
                }
                return res.send({message:"password updated successfully"})
            })
         }
        })
    } catch (error) {
        return res.send({status:"error", message:err.message})
        
    }
}



module.exports={create,updateProfile,updatePassword}