import { useState } from "react"

function App() {
  const [color,setColor] = useState("orange")

  return (
       
    // for the background color 
    <div className="w-full h-screen "
     style={{backgroundColor:color}}>    
   
       <div className="fixed flex flex-wrap
       justify-center top-12 inset-x-0 px-2">  {/* so this div is for the position of the navbar with color names */}
         
          <div className="flex flex-wrap justify-center           
             gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl bg-{color}">   {/* so this function is for the nav bar or say template */}
            
              <button 
              onClick={()=> setColor("Red")}
              className="outline-none px-4 py-1 rounded-full 
              text-black shadow-lg" 
              style={{backgroundColor:"Red"}}>Red</button>     {/* this for the button with styling  */}

              <button 
              onClick={()=> setColor("green")}
              className="outline-none px-4 py-1 rounded-full 
              text-black shadow-lg" 
              style={{backgroundColor:"green"}}>Green</button>

              <button
              onClick={()=> setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full 
              text-black shadow-lg" 
              style={{backgroundColor:"Yellow"}}>Yellow</button>

              <button onClick={()=>(setColor("Blue"))}
              className="outline-none px-4 py-1 rounded-full 
              text-black shadow-lg"
              style={{backgroundColor:"Blue"}}
              >Blue</button>

              <button onClick={()=>(setColor("Brown"))}
              className="outline-none px-4 py-1 rounded-full 
              text-white shadow-lg"
              style={{backgroundColor:"Brown"}}
              >Brown</button>

          </div>
        </div>
      </div>
       
  )
}

export default App
