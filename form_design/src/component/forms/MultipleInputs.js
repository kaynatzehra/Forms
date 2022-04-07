import  {useState} from 'react'


const MultipleInputs =  () =>  {


    const [name, setName] = useState("");
    const [Number, setNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [counter, setCounter]= useState(1)
    
    const increment=()=>{
      setCounter(counter +1);
    };
      
    return (
      <div>
          <form  className='pick'>
      <label className='edit'>Enter your FullName: 
        <input type="text"  aria-label="Firstname" placeholder='Enter your Name' value={name}  
          onChange={(e) => setName(e.target.value)}
        />   
      </label><br />
      <label className='edit'>Enter your Number: 
        <input
          type="text" placeholder='Enter your Number'
          value={Number}  
          onChange={(e) => setNumber(e.target.value)}
        />
      </label><br />
      <label className='edit'>Enter your Email: 
        <input
          type="text" placeholder='Enter your Email'
          value={Email}  
          onChange={(e) => setEmail(e.target.value)}
        />
      </label><br />
      <label className='edit'>Enter your Password:       
        <input
          type="text" placeholder='Enter your Password'
          value={name}  
          onChange={(e) => setName(e.target.value)}
        />
      </label><br />
    </form>
    <div className='pick' >  
       <button onClick={increment}>Submit</button>Number of Entries: {counter} </div>
      </div>
    )
  }


  export default MultipleInputs;