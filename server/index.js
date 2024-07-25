const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')
const FormModel = require("./models/Form")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/employee")

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json({ message: "Success", role: user.role, email: user.email });
          } else {
            res.json({ message: "The password is incorrect" });
          }
        } else {
          res.json({ message: "No records found" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json("An error occurred during login");
      });
  });
  app.patch('/form/accept/:id', (req, res) => {
    const id = req.params.id;
    FormModel.findByIdAndUpdate(id, { status: 'Accepted' }, { new: true })
      .then(form => res.json(form))
      .catch(err => res.status(500).json(err));
  });
  
  app.patch('/form/reject/:id', (req, res) => {
    const id = req.params.id;
    FormModel.findByIdAndUpdate(id, { status: 'Rejected' }, { new: true })
      .then(form => res.json(form))
      .catch(err => res.status(500).json(err));
  });
    

app.get('/form/data',(req,res)=>{
    FormModel.find({})
    .then(users =>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/form/data/:email', (req, res) => {
    const email = req.params.email;
    FormModel.find({ email: email })
      .then(forms => res.json(forms))
      .catch(err => res.json(err));
  });

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=> res.json(employees))
    .catch(err=>res.json(err))
})
app.post('/form',(req,res)=>{
    FormModel.create(req.body)
    .then(form=>res.json(form))
    .catch(err=>res.json(err))
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    FormModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

  

app.listen(3004,()=>{
    console.log("Server is running")
})  