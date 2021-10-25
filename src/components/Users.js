const express=require('express');
//const jwt=require('jsonwebtoken');
const {JWT_SECRET}=process.env;
const {createUser,getUser,getPublicRoutinesByUser}=require('/')
const usersRouter=express.Router();
const Users = usersRouter;
usersRouter.post('/register',async(req,res,next)=>
{
    try 
    {
        if(req.body.username&&req.body.password&&req.body.password.length>=8)
        {
            const user=await createUser(
            {
                username:req.body.username,
                password:req.body.password
            });
            res.send(
            {
                user:user
            });

        }
        else
        {
            console.log("hit throw");
            throw Error('invalid username/password: must have a username and a password 8 characters or longer.');
        }
    }
    catch(error)
    {
        console.log("hit next");
        next(error);
    }
});


usersRouter.post('/login',async(req,res,next)=>
{
    try 
    {
        if(req.body.username&&req.body.password)
        {
            const user=await getUser(
            {
                username:req.body.username,
                password:req.body.password
            });
            if(user)
            {
                const token=jwt.sign(
                {
                    id:user.id,
                    username:user.username,
                    password:req.body.password
                },
                process.env.JWT_SECRET,
                {expiresIn:'1w'}
                );
                user.token=token;
            }
            res.send(user);
        }
        else
        {
            throw Error('invalid username/password');
        }
    }
    catch(error)
    {
        next(error);
    }
});

usersRouter.get('/me',async(req,res,next)=>
{
    try 
    {
            if(req.auth)
            {
                res.send(req.auth);
            }
            else
            {
                next('Invalid Credentials')
            }
    }
    catch(error)
    {
        next(error);
    }
});

usersRouter.get('/:username/routines',async(req,res,next)=>
{
    try 
    {
        res.send(await getPublicRoutinesByUser(
        {
            username:(req.params.username)
        }));
    }
    catch(error)
    {
        next(error);
    }
});


export default Users;