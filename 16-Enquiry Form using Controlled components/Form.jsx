import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'
import Table from 'react-bootstrap/Table';
import { Button, Col } from 'react-bootstrap';
export default function () {
    const notify = () => toast.error("Email or Number already exists!");
    const[userData,UserFun]=useState({
        username:'',
        email:'',
        phone:'',
        message:'',
        index:''
    });

    const [saveData,saveFun] = useState([])

    let handleInputData =(event)=>{
        let oldData = {...userData}
let inputName= event.target.name;
let inputValue = event.target.value
oldData[inputName]=inputValue;
UserFun(oldData)

    }
    
    let onSubmit = (event)=>{
        event.preventDefault()
let currentDataFromat={
    username:userData.username,
    email:userData.email,
    phone:userData.phone,
    message:userData.message,
    
}
let email = userData.email;
let phone = userData.phone;
let matchCount=0
if(userData.index===""){
  saveData.map((val,id)=>(
      val.email == email ? matchCount++ : null)
  
  );
  if(matchCount>=1){
      notify()
  
  }
  else{
          let oldData=[...saveData,currentDataFromat]
          UserFun({
            username: '',
            email: '',
            phone: '',
            message: '',
            index: ''
        });
          saveFun(oldData);
}
}
else{
  let editIndex = userData.index;
  console.log(editIndex)
  let checkFilterUser = saveData.filter((v,i)=>(
    v.email==userData.email||v.phone==userData.phone)&&i!=editIndex
  )
if(checkFilterUser.length==0){
  let oldData= saveData;
  oldData[editIndex] ['username'] = userData.username
  oldData[editIndex] ['email'] = userData.email
  oldData[editIndex] ['phone'] = userData.phone
  oldData[editIndex] ['message'] = userData.message
  UserFun({
   username: '',
   email: '',
   phone: '',
   message: '',
   index: ''
 });
  saveFun(oldData)
}
else{
  console.log(checkFilterUser.length)
  console.log(checkFilterUser)
  notify();
}



}
    }
  return (
    <div className='formDiv'>
        <div className='formContainer'>
        <h1>Enquiry Now</h1>
<form onSubmit={onSubmit}>
<label>Name</label>
<input type='text' onChange={handleInputData} name='username' value={userData.username}/>
<label>Email</label>
<input type='email' onChange={handleInputData} name='email' value={userData.email} />
<label>Phone</label>
<input type='text' onChange={handleInputData} name='phone' value={userData.phone}/>
<label>Message</label>
<input type='textarea' onChange={handleInputData} name='message' value={userData.message} />
<button className='button'>{userData.index===''?'Save':'update'}</button>
</form>
</div>

    <Col lg={6} className='tableInfo'>
<ShowData saveData={saveData} saveFun={saveFun} userFun={UserFun}/>
</Col>

<ToastContainer />
    </div>
  )
}

function ShowData({saveData,saveFun,userFun}){
  const [update,updateFun]=useState(false);


let editRow =(index)=>{
 let editData = saveData.filter((v,i)=>
i==index
 )[0]

 editData['index']=index
 userFun(editData)



}
  let deleteRow=(index)=>{
    let finalData = saveData.filter((val,id)=>
    id!=index
    )
    saveFun(finalData)
  }

    return(
        <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
{saveData.length?saveData.map((val,id)=>(
  <tr key={id} className='data'>
    
    <td>{id+1}</td>
    <td>{val.username}</td>
    <td>{val.email}</td>
    <td>{val.phone}</td>
    <td className='overflow-td'>{val.message}</td>
  
  <td className='btn'> <Button variant="primary" onClick={()=>editRow(id)}>{update?'Save':'Update'}</Button> <Button variant="danger" onClick={()=>{deleteRow(id)}}>Delete</Button></td>
</tr>


)):'no data found'}

        
        
        </tbody>
      </Table>
    )
}