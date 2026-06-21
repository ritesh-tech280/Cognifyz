const express = require('express');
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


let students = []

// save student 
app.post("/students", (req,res) => {
    const student = {
      id: Date.now(),
      ...req.body,
    };
     students.push(student);
     res.status(201).json({
        message:"Student added Successfully",
        student
     });
})

//get students
app.get('/students', (req, res) => {
  res.json(students)
})

// delete student 
app.delete("/students/:id",(req, res) => {
  const id = Number(req.params.id);
  students = students.filter(
    student => student.id !== id
  );
  res.json({
    message:'Student Deleted Successfully'
  })
})

//edit student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex(
    student => student.id === id
  )

  if(index === -1){
    return res.status(404).json({
      message:"Student not Found"
    });
  }

  students[index] = {
    ...students[index],
    ...req.body
  };
  res.json({
    message:"Student updated Successfully"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})