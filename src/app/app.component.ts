import { Component } from '@angular/core';
declare function require(path: string);
import { Options,LabelType } from 'ng5-slider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularComponent';
  img=['https://images.unsplash.com/photo-1584517900924-03df8d8369a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1558980394-4c7c9299fe96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1584294798143-161041fdc72d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
  height=250;
  width=320;
  public selectedOption = [
    { id: 'Economy', name: 'Economy' },
    { id: 'Premium Economy', name: 'Premium Economy' },
    { id: 'Business', name: 'Business' },
    { id: 'First', name: 'First' }
  ]
  array=["India", "Thailand", "Afganistan", "Bhutan"]

  displayData(response){
    // console.log("response from parent component", response);
    
  }
  UserSelectedOption=(event)=>{
  //  console.log('event select Outside',event)
  }

// GUEST-CONFIG  Data

public PopupVisible=false;
public maxChild=4;
public maxAdult=6;
public minChild=0;
public minAdult=1;
public defaultAdult=2;
public defaultChild=0;
public maximumRooms=5;
public guestPerRooms=6;
public totalPax=9;
public rooms=[{ room: 1, adult: 2, children: 0, child: [], childincrement: this.maxChild !== this.defaultChild ? true : false, childecrement: this.minChild !== this.defaultChild ? true : false, fontimg: this.minChild !== this.defaultChild ? true : false, adultincrement: this.maxAdult !== this.defaultAdult ? true : false, adultdecrement: this.minAdult !== this.defaultAdult ? true : false, disableDiv:false }]
public count= 2;
public storageData=[]
public placeholder="Select Option";
public blank="";
PaxArrayOutData=(event)=>{
//  console.log('inner event=========>>>',event)
}

// GUEST-CONFIG 2
PaxArray(event){
// console.log('innerdata============>>>',event)
}

  
  // DropDown code
  public normalDropdown = false;
  public iconDropdown = true;
  public isDropDownVisible = false;
  public isNormalDropDownVisible = false;
  public selectedDropdownValue = '';
  public selectedNormalDropdownValue = '';
  public dropDownOptions = [
    { value: 'Option1', label: 'Option1' },
    { value: 'Option2', label: 'Option2' },
    { value: 'Option3', label: 'Option3' },
    { value: 'Option4', label: 'Option4' },
    { value: 'Option5', label: 'Option5' },
  ];

  onDropDownSelection(value){
    this.selectedDropdownValue = value.value;
    this.isDropDownVisible = !this.isDropDownVisible;
  }

  onNormalDropDownSelection(value){
    this.selectedNormalDropdownValue = value.value;
    this.isNormalDropDownVisible = !this.isNormalDropDownVisible;
  }

  handleDropDownToggle(){    
    this.isDropDownVisible = !this.isDropDownVisible;
  }

  handleNormalDropDownToggle(){    
    this.isNormalDropDownVisible = !this.isNormalDropDownVisible;
  }


  // Toggle View

  image1 = require('../assets/img/jp-grid.svg')

  image2 = require('../assets/img/jp-list.svg')

  image3 = require('../assets/img/jp-map.svg')

  image4 = require('../assets/img/jp-grid-active.svg')

  image5 = require('../assets/img/jp-list-active.svg')

  image6 = require('../assets/img/jp-map-active.svg')

  ToggleImages = [
    { ActiveSrc: this.image1, InActiveSrc: this.image4, active: true },
    { ActiveSrc: this.image2, InActiveSrc: this.image5, active: false },
    { ActiveSrc: this.image3, InActiveSrc: this.image6, active: false }
  ]

  handleEvent(event) {
    console.log("event is receive from child that is", event);


    console.log("response from parent");
  }


// CallOut Component function
public HitId1="callOut1";
public HitId2="callOut2";
public HitId3="callOut3";
public HitId4="callOut4";
public HitId5="callOut5";
public HitId6="callOut6";
public HitId7="callOut7";
public HitId8="callOut8";


public hitText(showResp){
  // console.log('text from text box',showResp);
}


//CollapseExpand   function data 

public CollapseExpanddata=[
  {
    "title": "Terms & Conditions",
    "subtitle": [
      {
        "name": "Jet Airways Discounts",
        "data": "One-way base fare waived off free ticket* (applicable on Deal Fare Choices in Economy for travel on Jet Airways Domestic flights within India on enrolment and annual renewal)5% discount on Base Fare for purchase of domestic and international revenue tickets on jetairways.com except on Light Fare Choice in Economy. At the time of booking your itinerary, kindly use the code 'JTAMEX' in 'Promotion Code' field to avail 5% discount on jetairways.com."
      },
      {
        "name": "Collaborate with business teams",
        "data": "Effective May 17, 2018. Jet Airways American Express® Platinum Credit Card Co-brand Card Holders will be able to check-in at any of our Première counters at the airport, for Jet Airways flights within India. This facility is available only at metro cities in India which includes Mumbai, Delhi, Chennai, Kolkata, Hyderabad and Bengaluru."
      }
    ],
    "expanded": false
  },
  {
    "title": "Partner Details",
    "subtitle": [
      {
        "name": "Partner Information",
        "data": "sample partner information."
      },
      {
        "name": "Collaborate with business teams",
        "data": "business information."
      }
    ],
    "expanded":false
  }
]

CollapseExpand=(event)=>{
  console.log("event is receive from parent", event);
}

// Input CheckBox Function
public CheckBoxData= [
  {   
      "text":"We will",
      "hit":false
  },
  {
      "text":"agree term and condition",
      "hit":true
  },
  {
      "text":"of your",
      "hit":false
  },  
  {
      "text":"policy",
      "hit":true
  }
]
public CheckBoxData1= [
  {   
      "text":"Agree Terms and Conditions.",
      "hit":false
  }
]
public CheckBoxData2= [
  {   
      "text":"Agree GDPR.",
      "hit":false
  }
]
EventCalled=(event)=>{
  alert('Click on '+event)
 }
 Checked=(event)=>{
  // console.log('inner event',event);
}


///ThumbnailSlider Function=================================>>>
public ThumbnailSliderImges=['https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1544097935-e6d136448533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1551525212-a1dc18871d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80','https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60']
OnThumbnailHover=(i)=>{
  // console.log('call from parent File',i)
}


// Radio button ==============================================>
radioValue=(event)=>{
 console.log('called from parents radio',event)
}


// Google Map Button==============================================>>>
lat: number = 19.2096412;
lng: number = 73.09707449999999;
icon = {
  url: 'https://cdn4.iconfinder.com/data/icons/hotel-and-services-2-2/512/57-512.png',
  scaledSize: {
    width: 41,
    height: 45
  }
}
hotelsArray = [
  {
    id:1,
    title:"V by Vinnca Hotel & Spa, Madhapar, Bhuj, Gujarat, India",
    lat:23.239361,
    lng:69.719009,
    imgUrl:'https://pix6.agoda.net/hotelImages/525/5251646/5251646_18062915140066550750.jpg?s=1024x768'
  },
  {
    id:2,
    title:"Palladium Hotel, The St. Regis Mumbai, Maharashtra, India",
    lat:18.993652,
    lng:72.825218,
    imgUrl:'https://pix6.agoda.net/hotelImages/411/411757/411757_19051614210074542898.jpg?s=1024x768'
  },
  {
    id:3,
    title:"Ibis New Delhi Aerocity Hotel, Aerocity, IGIA, New Delhi, India",
    lat:28.551411,
    lng:77.123123,
    imgUrl:'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/29/56/295605766.jpeg'
  },
  {
    id:4,
    title:"Sri Bishnu Hotel & Restaurant, Ratulia, West Bengal, India",
    lat:22.406437,
    lng:87.668472,
    imgUrl:'https://pix6.agoda.net/hotelImages/546/546111/546111_13121322250017900800.jpg?s=1024x768'
  },
  {
    id:5,
    title:"Coral River Resort, Madhopur, Punjab, India",
    lat:32.368473,
    lng:75.600082,
    imgUrl:'https://pix6.agoda.net/hotelImages/6892126/-1/3ae9485d877f67fd450ee34d8840b41b.jpg?s=1024x768'
  }
  
]




onMapClick(event){
  console.log(event);
  this.lat=event.coords.lat;
  this.lng=event.coords.lng;

  console.log('lmdklwmkm',this.lat,this.lng);
}

onMarkerClick(label:string){
  console.log('You Clicked Hotel ==> ',label);
}






// Desktop calendar selected===========================================>>>>>>>>>>>>
DatesArray=(event)=>{
  console.log('dates from child',event)
}


// Hotel List Card=============================================================>>>>>>>>>>>>>>>>>

public card_list=[{
  "HotelListImg":['https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1544097935-e6d136448533?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1551525212-a1dc18871d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80','https://images.unsplash.com/photo-1559841644-08984562005a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'],
  "hotel" : "Red Fox Hotel Delhi Airport",
  "ratings" : 3.5,
  "location": "Aerocity",
  "distance": "3.9 km from airport",
  "type":["Pet Friendly", "Couple Friendly" ],
  "facilities":["Free Wi-Fi", "Airport", "Transport Facility"],
  "more_options":["Beakfast Included", "Pay at Hotel"],
  "price": 8548,
  "after_discount": 5281,
  "duration": "Per Night"
}]


// Range Slider========================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
public minValue = 0;
public maxValue = 27000;
onRangeSliderChange() {
  console.log('Minimum value is',this.minValue);
  console.log('Maximum value is',this.maxValue);
}
public  Options = {
  floor: 0,
  ceil: 27000,
  step: 1,
  getPointerColor: (value: number): string => {
    {
        return '#ae285d';
    }
  },
  getSelectionBarColor: (value: number): string => {
    {
        return '#ae285d';
    }
  },
  translate: (value: number): string => {
    return 'INR ' + value;
  }
};


// SliderContent Mobile======================================================>>>>

value1: number = 50000;
 public options = {
    floor:5000,
    ceil:1500000,
    step:5000,
    showTicks: false,
    showSelectionBar: true,
    getPointerColor: (value: number): string => {
      {
          return '#ae285d';
      }
    },
    getSelectionBarColor: (value: number): string => {
      {
          return '#ae285d';
      }
    },
    translate: (value: number, label: LabelType): string => {
    if(value<=99999){
      return '5K'
    }
    else{
      return '15L'
    }
    }
  };

  onSliderChange(){
    //  console.log('vabkahch',this.value);
    
    }




// Range selector function=====================================================>>>>>>>

value2:number= 6
options2={
  floor: 0,
  ceil: 500000,
  step:50000,
  vertical: false,
  showSelectionBar: true,
  showTicksValues: true,
  draggableRange:true,
  ticksValuesTooltip: (v: number): string => {
    return 'Tooltip for ' + v;
  },
  getPointerColor: (value: number): string => {
    {
        return '#ae285d';
    }
  },
  getSelectionBarColor: (value: number): string => {
    {
        return '#ae285d';
    }
  },
  getTickColor: (value: number): string => {
    {
        return '#ae285d';
    }
  },
  translate: (value: number): string => {
    if(value==0){
      return '0';
    }
    if(value>0 && value<=50000){
    return '50K';
    }
    if(value>50000 && value<=100000){
      return '1L';
    }
    if(value>100000 && value<=150000){
      return '1.5L';
    }
    if(value>150000 && value<=200000){
      return '2L';
    }
    if(value>200000 && value<=250000){
      return '2.5L';
    }
    if(value>250000 && value<=300000){
      return '3L';
    }
    if(value>300000 && value<=350000){
      return '3.5L';
    }
    if(value>350000 && value<=400000){
      return '4L';
    }
    if(value>400000 && value<=450000){
      return '4.5L';
    }
    if(value>450000 && value<=500000){
      return '5L';
    }
  }
    
}
onSliderTickChange=()=>{
  
}


// BREADCUMB FUNCTION========================================>>>>>>>>>>>>>>>>>>>>>
public BreadCumbData=[
  {
      "name": "About JetPrivilage",
      "url":"#jp",
      "IsClickable":true
  },
  {
      "name":"About the company",
      "url":"#aboutCompany",
      "IsClickable":true
  },
  {
      "name":"About",
      "url":"",
      "IsClickable":false
  }
]

HitBreadCumb=(event)=>{
console.log('parent hit for BreadCumb============>',event)
}

// TOGGLE-BUTTON FUNCTIONALITY=================================>>>>>>>>>>>>>>>>>>>>>>>>>

getToggleValue(toggleValue){
  console.log("toggle value received is = ",toggleValue);
  
}
Toggledisable=false;
Toggledisable1=true;

//ProfileSidebar dat=====================================================================>>>
ProfileSidebar ={
  "ProfileName":"Ratan TATA",
  "ProfileNumber":"210265789",
  "ProfileType":"Platinum Member",
  "ProfileImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ratan_Tata_photo.jpg/220px-Ratan_Tata_photo.jpg",
  "ProfileBody":[ {
       "name": "My Profile",
       "content": "My Profile",
       "isSelected": true
   },
   {
       "name": "Account Summary",
       "content": "Account Summary",
       "isSelected": false
   },
   {
       "name": "JP Miles",
       "content": "JP Miles",
       "isSelected": false
   },
   {
       "name": "My Bookings",
       "content": "My Bookings",
       "isSelected": false
   },
   {
       "name": "Service Requests",
       "content": "Service Requests",
       "isSelected": false
   },
   {
       "name": "Security & privacy",
       "content": "Security & privacy",
       "isSelected": false
   },
   {
       "name": "Child Enrollment",
       "content": "Child Enrollment",
       "isSelected": false
   },
   {
       "name": "My Family+",
       "content": "My Family+",
       "isSelected": false
   },
   {
       "name": "Business Rewards+",
       "content": "Business Rewards+",
       "isSelected": false
   },
   {
       "name": "Print/Request Card",
       "content": "Print/Request Card",
       "isSelected": false
   },
   {
       "name": "Log Out",
       "content": "Log Out",
       "isSelected": false
   }]
   }

   ProfileSidebarFunction(event){
    console.log("event is receive from parent", event);
  }


  // Mobile Typing Calendar===============================================>>>>>>>>>>>>>
  ValidateDate(date){
    console.log('Vlidated image received',date)
     }
}
