import {v4 as uuidv4} from "uuid"
import {SiMicrosoftacademic, SiProcessingfoundation} from "react-icons/si"
import {IoBusinessSharp} from "react-icons/io5"
import {MdHistoryEdu, MdOutlineSelfImprovement} from "react-icons/md"
import {GiCardPick} from "react-icons/gi"
export const navLinks = [
  {
    id:uuidv4(),
    title:"Home",
    link:"/",
  },
  {
    id:uuidv4(),
    title:"Magazine",
    link:"/magazine"
  },
  {
    id:uuidv4(),
    title:"Books",
    link:"/books"
  },
  {
    id:uuidv4(),
    title:"Textbooks",
    link:"/textbooks"
  },
  {
    id:uuidv4(),
    title:"Product",
    link:"/product"
  },
]

export const categories = [
  {
    id: uuidv4(),
    name:"Children",
    icon:<GiCardPick/>
  },
  {
    id: uuidv4(),
    name:"Business",
    icon:<IoBusinessSharp/>
  },
  {
    id: uuidv4(),
    name:"Educational",
    icon:<SiProcessingfoundation/>
  },
  {
    id: uuidv4(),
    name:"Non-Fiction",
    icon:<MdOutlineSelfImprovement/>
  },
  {
    id: uuidv4(),
    name:"Biography",
    icon:<SiMicrosoftacademic/>
  },
  {
    id: uuidv4(),
    name:"Fantasy",
    icon:<MdHistoryEdu/>
  },
  {
    id: uuidv4(),
    name:"Romance",
    icon:<MdHistoryEdu/>
  }

]