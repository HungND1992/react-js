import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";

function randomId() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const MenuList = [
  {
    id: randomId(),
    name: "Pepperoni Pizza",
    text: "",
    image: Pepperoni,
    price: 15.99,
  },
  {
    id: randomId(),
    name: "Margherita Pizza",
    text: "",
    image: Margherita,
    price: 11.99,
  },
  {
    id: randomId(),
    name: "PedroTech Special Pizza",
    text: "",
    image: PedroTechSpecial,
    price: 256.53,
  },
  {
    id: randomId(),
    name: "Vegan Pizza",
    text: "",
    image: Vegan,
    price: 17.99,
  },
  {
    id: randomId(),
    name: "Pineapple Pizza",
    text: "",
    image: Pineapple,
    price: 4.99,
  },
  {
    id: randomId(),
    name: "Very Expensive Pizza",
    text: "",
    image: Expensive,
    price: 1997.99,
  },
];