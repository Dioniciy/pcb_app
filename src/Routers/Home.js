import React from "react";
import PCB_element from "../Components/PCB"
import './Home.scss';

function Drow_element(element)
{
   return <PCB_element 
        key = {element.id}
        id = {element.id}
        title = {element.title} 
        in_voltage = {element.in_voltage} 
        price = {element.price} 
        price_unit = {element.price_unit}
        description = {element.description} 
        image = {element.image}
     />
  
}

class Home extends React.Component {
 
  state = {
    isLoading: true,
    pcb_array: [],
    pcbs : [
      { 
        key: 0,
        id: 0,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://www.miraclepwb.com/wp-content/uploads/2020/09/PCB-Board.jpg",
      },
      {
        key: 1,
        id: 1,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://st2.depositphotos.com/4935269/7306/v/600/depositphotos_73063937-stock-illustration-printed-circuit-board-pcb-without.jpg",
      },
      {
        key: 2,
        id: 2,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://www.miraclepwb.com/wp-content/uploads/2020/09/PCB-Board.jpg",
      },
      {
        key: 3,
        id: 3,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://media.elektor.com/media/catalog/product/cache/81e8af4009b65a0e5c366ff25faf04a4/1/8/18559_-_160548-51.jpg",
      },
      {
        key: 4,
        id: 4,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYwP9QXvtgoNPmQ4FMlEGj99du3lIYTiRnA&usqp=CAU",
      },
      {
        key: 5,
        id: 5,
        title: "LCU",
        in_voltage: "12-24 V",
        price: 300,
        price_unit: "$",
        description: "Автоматизована система керування освітленням",
        image: "https://www.miraclepwb.com/wp-content/uploads/2020/09/PCB-Board.jpg",
      },
  ]
  };
   
  get_server_data = async() =>{
    
  //  console.log(pcbs[0]);
    //const pcbs = await   axios.get('url');
    this.setState({ isLoading: false});

  };

  componentDidMount() {
   
     this.get_server_data();
  }

  render() 
  {
      const { isLoading, pcbs} = this.state;
      return  (
          <section className="container">
           {
            isLoading
            ? (<div className="loader">
              <span className="Loader__text"> "Loading..." </span>
            </div>)
            : (
                <div className = "elements">
                {
                  (pcbs || []).map((element) => Drow_element(element) ) 
                }
                </div>
              ) 
          }
        </section>
     );
  }
}

export default Home;
