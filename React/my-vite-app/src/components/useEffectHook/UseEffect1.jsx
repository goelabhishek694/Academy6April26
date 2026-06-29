import React, {useState, useEffect} from 'react'

function UseEffect1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    useEffect(() =>{
        console.log("useEffect is called only once intially.  when the component is mounted.");

        const fetchData = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const result = await response.json();
            console.log(result);
            setData(result);
        }
        fetchData();
    }, []); //empty dependency array -> call this UE function only once intially.  when the component is mounted. 

    //Update lifecycle 

    useEffect(() =>{
        console.log("useEffect is called because a state is changed");
    }); //np dependency array -> call this UE function whenver there is a state change . 

    useEffect(() =>{
        console.log("useEffect is called because count is changed");
        document.title = `You clicked ${count} times`;
    }, [count]); //dependency array -> call this UE function when there is chane in count state.x 

    // setInterval is setup , cb fn is called every 1 sec. 
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       console.log('Timer tick');
    //     }, 1000);
      
    //     // Cleanup function -> when the component is unmounted, setInterval is cleared. to avoid memory leaks .  
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);  // Runs only once on mount and unmount
    


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setName(name + "a")}>
        Change Name
      </button>
      <p>{data.map((item) => <li key={item.id}>{item.name}</li>)}</p>
    </div>

  )
}

export default UseEffect1
