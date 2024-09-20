
import { IconName } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
const  Data = [

   {
    id:"1",
    icon:<FcCurrencyExchange  fontSize={35}/>,
    name:"Grocery",
    description:" 5:12 . Grocery Budget",
      money:'-$3255'
    },

    {
        id:"2",
   
        icon:<FcShipped  fontSize={35}/>,
        name:"Transportation",
        description:" 6:12 . Transportation Budget",
        money:'--$55'
        },
        {
            id:"3",
         
            icon:<FcHome  fontSize={35}/>,
            name:"Housing",
            description:" 7:12 . Housing Budget",
              money:'--$255'
            },
        ]
     export default Data;