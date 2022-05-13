import './App.css';
import {usestate} from 'react'
import {Arry} from './components/Arry'


function App() {
 const [arry,setarry]= usestate(

   [
     {
       title:"Moto Z",
       price:"20,000 PKR",
       quantity:"5 left",
       description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae."
      }
    ]
    );
//     const [secondarry,setsecondarry]= usestate[
//    {
//     title:"Moto Z2force",
//     price:"30,000 PKR",
//     quantity:"11 left",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae."
//    }
//  ]
//  const [thirdarry,setthirdarry]= usestate[
//    {
//     title:"iphone X",
//     price:"90,000 PKR",
//     quantity:"8 left",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae."
//    }
//  ]
//  const [fortharry,setfortharry]= usestate[
//    {
//     title:"iphone 8plus",
//     price:"55,000 PKR",
//     quantity:"16 left",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae."
//    }
//  ]


 let addtoCart = ()=>{
alert(`"titleiphone 8plus",
  "price55,000 PKR",
  "quantity16 left",
  "descriptionLorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vitae."`)
 }
  
 


return (
    <div className="App">
      
      {arry.map((e) => (
        <Arry title={e.title} price={e.price} Quantity={e.Quantity}  Description={e.Description}
        action={addtoCart}  />

      ))}


    </div>
  );
}
export default App;