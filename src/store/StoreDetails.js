import { action, makeObservable, observable } from "mobx"
import logo from "../assets/images/logo.png"  
import newBorn from '../assets/images/newBorn.jpg'
import img from '../assets/images/img.jpg'
import smashCake from '../assets/images/smashCake.jpg'
import img2 from '../assets/images/img2.jpg'
class StoreDetails {
  businessServices
    = [
      {
        id: '0',
        name: "צילומי ניו בורן",
        description: "צילומי ניו בורן ענוגים לתינוק מזל טוב! בשעה טובה הרחבתם את משפחתכם ותינוק או תינוקת מתוקים הצטרפו! איזה דרך טובה יותר לחגוג וליצור זיכרונות שלהם ברכותם מאשר צילומי ניו בורן?",
        price: "900",
        img: newBorn
      },
      {

        id: '1',
        name: "חלאקה",
        description: "צילומי חלאקה נעשים בסטודיו או בחוץ. זמן איכות וחוויה אדירה לילדים ולמשפחה כולה, כייף ועם הרבה סבלנות כל ילד בהתאם לאופי שלו, אז רגע לפני שגוזרים לו את התלתל מוזמנים ליום צילומים חוויתי שלא ישכח!", 
        price: "1000",
        img: img
      },
      {
        id: '2',
        name: "smash cake",
        description: "הילד הגיע לגיל שנה??? הגיע הזמן לצילומים עם עוגה גדולה והרבה קצף!!!"
        , price: "800",
        img: smashCake
      },
      {
        id: '3',
        name:"צילומי חוץ",
        description: "למה לא לצאת להצטלם כל המשפחה באויר הנעים ובפריחה המלבלבת",
        price: "800",
        img:img2
      }

    ]


  business = {
    name: "Shira Rakovski",
    address: "Hafetz Chaim",
    phone: "0527",
    owner: "",
    logo: logo,
    description: "",
  }
  initBusiness =
    async () => {
      const response = await fetch("http://localhost:8787/businessData");
      const data = await response.json();
      // this.business=data;
      this.setBusiness(data)
      console.log(this.business);
      console.log(this.business.description);

    }
  setBusiness(val) {
    this.business = val;
  }
  initialBusinessDetails = async () => {
    const response = await fetch("http://localhost:8787/businessData");
    const data = await response.json();
    this.business = data;

  };


  constructor() {
    makeObservable(this, {
      businessServices: observable,
       business: observable, 
       initBusiness: action,
      setBusiness: action,
      initialbusinessServices: action,
      addService: action,

    })
    
    if (this.businessServices.length === 4)
      this.businessServices.map(s => this.addService(s))
    console.log("the new length is: ", this.businessServices.length)
  }
  setService = (businessDetails) => {

  }
  addService = async (newServiceDetails) => {

    if (this.businessServices.length > 4) {
      newServiceDetails.id = String(this.businessServices.length)

    }
    const response = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(newServiceDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText);
    if (response.status === 200) {
      this.businessServices = ([...this.businessServices, newServiceDetails])
      console.log("true")
      console.log(this.businessServices.length)

    }

    return


  }
  initialbusinessServices = async () => {

    const response = await fetch("http://localhost:8787/services");
    const data = await response.json();
    console.log(data);
    this.businessServices = ([...data]);
    console.log("businessServices", this.businessServices)
  }
}
export default new StoreDetails;