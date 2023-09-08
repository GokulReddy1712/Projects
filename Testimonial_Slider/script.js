const testimonials = [
    {
        name:"Gokul K",
        photourl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"  ,
        text:"reliability I have been using Apple's MAC for years and I can confidently say that it is one of the best computers I have ever used. It has excellent performance and is extremely reliable. I have never had any issues with it and I would highly recommend it to anyone looking for a reliable and powerful computer."          
    },
    {
        name:"Ragul K",
        photourl:"https://media.istockphoto.com/id/1343563115/photo/man-feeling-depressed-on-receiving-bad-news-using-phone.jpg?s=1024x1024&w=is&k=20&c=Mh1GORluV4Jh5PQkpY8sHg057K5SNx0Dk3wuWJZs0QQ=",
        text:"ease of use I have been using Apple's MAC computers for years and I am always impressed with their speed and ease of use. The user interface is intuitive and I never have any issues navigating the system. I highly recommend MAC computers for anyone looking for a reliable and user-friendly computer."
    },
    {
        name:"Vijay",
        photourl:"https://media.istockphoto.com/id/1456958545/photo/photo-of-young-asian-businesswoman-holding-smartphone-on-background.jpg?s=1024x1024&w=is&k=20&c=okE_vIkUJW0kVLx4rk4CL3-I_ogdpB3qPLLt23K9z_Y=",
        text:" MAC computers for years and I have to say that they are incredibly easy to use. I love the intuitive design and the user-friendly interface. I can easily navigate through the different features and settings, and the updates are always smooth and hassle-free. I highly recommend MAC to anyone looking for a reliable and easy-to-use computer."
    },
];
const imgE1 = document.querySelector("img")
const textE1 = document.querySelector(".text")
const userE1 = document.querySelector(".username")

let idx = 0;

updateTestimonials();

function updateTestimonials(){
    const{name,photourl,text}=testimonials[idx];
    imgE1.src = photourl;
    textE1.innerText = text;
    userE1.innerText = name;
    idx++;
    if(idx===testimonials.length){
        idx=0;
    }
    setTimeout(()=>{
        updateTestimonials()
    },2000)
}
