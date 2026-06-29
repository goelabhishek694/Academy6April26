import React, {useState} from 'react'
// diff controlled and uncontrolled components. 

function FormHandling() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));  
    }

    // const handleNameChange = (e) => {
    //     console.log("name changed");
    //     setName(e.target.value); re-renders 
    // }

    // const handleEmailChange = (e) => {
    //     console.log("email changed");
    //     setEmail(e.target.value);
    // }

    const validateForm = () => {
        //some validation logic 
        if(!formData.name || !formData.email){
            return false;
        }
        //pasword -> min lenth is 6 , uppercase letter, lowercase ltter, special charcater, number 
        //email -> valid email address
        //name -> min length 3 , no special characters
        //if all validations pass, return true, else return false
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()){
            console.error("form is invalid!");
            return;
        }

        console.log("name: ", formData.name);
        console.log("email: ", formData.email);
        

    }

  return (
    <form>
        <div>
            <label htmlFor='name'>Name:</label>
            <input 
            type='text' 
            placeholder='Enter your name' 
            id="name"
            value = {name}
            onChange = {handleNameChange} />
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input 
            type='email' 
            placeholder='Enter your email' 
            id="email"
            value = {email}
            onChange = {handleEmailChange} />
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default FormHandling
