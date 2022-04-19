const express = require('express');
const app = express();
const port = 5000;
// define variables
var id = 0902094;
var status = "single";
// add variables
var user_list = [
    { name: "vara", address:"Bkk",birth_tear: "2003"},
    { name: "ar", address:"tkk", birth_tear: "2023"},
    { name: "tttr", address:"askk", birth_tear: "2223"}
];

// Connect topic
var topic = "easy access"
// Content Fonts variable
var ContentFont1 = "oNLINE cREATIVE community"
var ContentFont2 = "By mr. veerapat.bunk"
var feature_more = "learn-More"
// Content Feature Info Variable
var feature = [
    {
        img : "/aiot.jpg",
        top : "AIoT && Robotics",
        bottom : "Enjoy Coding and Playing Python ROS Mechanics Java"
    },
    {
        img : "/pexels-olia-danilevich-4974914.jpg",
        top : "Programing-Courses",
        bottom : "Enjoy Coding and Playing HTML CSS JavaScript Nodejs"
    }
]
// Content icons and text
var box_icon = [
    {
        icon : "github-_2_.svg",
        text : "VEERAPAT BUNKWANG"
    },
    {
        icon : "youtube-_1_.svg",
        text : "VEERAPAT BUNKWANG"
    },
    {
        icon : "facebook.svg",
        text : "Veerapat Bunkwang"
    },
    {
        icon : "gmail.svg",
        text : "veerapat.bunk@bumail.net"
    }
]
// Content nav bar
var navs = [
    {
        about: "ABOUT",
        docs: "DOCS",
        bottom : "LOGIN"
    }
]
//Connect public folder
app.use(express.static('public'))

// Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2',{obj_box : box_icon,
        feature_more: feature_more,
        obj_navs : navs,
        topic : topic,
        obj_feature : feature, 
        ContentFont1 : ContentFont1,
        ContentFont2 : ContentFont2}) // font-End : Back-End
})
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS");
});
// Connect index.ejs
app.get("/",(req,res)=>{
    res.render('index',{UserId: id, status: status, obj_user_list : user_list})
})


// Open Sever
app.listen(port,() =>{
    console.log("Server is Listening no port: ",port);
});
app.set('view engine','ejs');