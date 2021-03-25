// let demo=document.getElementById("demo");                                    //getElementById
// console.log(demo);

//getElementsByClassName                                                        //getElementsByClassName
// let links=document.getElementsByClassName("links")
// console.log(links)
// for(let i=0;i<=links.length;i++)
// {
//     links[i].style.background="red";
// }

//without using class name

// let links=document.getElementsByTagName("a")                                    //getElementsByTagName
// // links[0].style.color="blue"
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.color="red";
//  }

// let demo=document.getElementById("demo")
// demo.setAttribute("title","title is a tooltip")                                    //add attributes
// demo.setAttribute("name","i am name")                                              //setAttribute method

//dom property 

//  let links=document.getElementsByTagName("a")
//  //html collections
//  //loop this links
//  for(let i=0;i<links.length;i++)
//  {
//      links[i].className="links-"+i;
//  }
// let links=document.getElementsByTagName("a")
// links.forEach(function(link,i) {
//     console.log(link)
    
// });      //Uncaught TypeError: links.forEach is not a function


// let links=document.getElementsByTagName("a");     //using spread operator
//  [...links].forEach(function(link,i) {
//    console.log(link);
//     link.className="links-"+i;
//  });

//  let links=document.getElementsByTagName("a");        //using array.from
//  Array.from(links).forEach(function(link,i) {
//    console.log(link);
//     link.className="links-"+i;
//  });
 
// let links=document.getElementsByTagName("a");        //using array.from
//   Array.from(links).forach(function(link,i) {
//     console.log(link);
//      link.className="links-"+i;
//   });
 
//   let links=document.getElementsByTagName("a");        //using array.from
//   Array.from(links).map(function(link,i) {
//     console.log(link);
//      link.className="links-"+i;
//   });
 

// function jspiders(){
//     return arguments;
// }

// let str="hello";
// let users=jspiders("aaaa","bbbbbbbb","ccccccc")

// for(let user of users){
//     console.log(user);
// }

// for(let s of str){
//     console.log(s)
// }

// let linkold=document.getElementsByTagName("a"); //html collection
// console.log(linkold,"tagname way")

// let linknew=document.querySelectorAll("a");  //nodeList
// //css selectors like id,class,element
// console.log(linknew,"select query way")

// let linkOdd=document.querySelectorAll("a:nth-child(odd)");
// let linkEven=document.querySelectorAll("a:nth-child(even)");

// linkOdd.forEach(odd=>odd.style.backgroung="red");

// let template=document.querySelector(".template");
// let demo=document.querySelector("#demo")
// let  p=document.querySelector("p");

// console.log(template);
// console.log(demo);
// console.log(p);

// let links=document.querySelectorAll("#template li:nth-child(odd)");
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.background="lightblue";
//       links[i].style.color="red";
     
//   }

//   let link=document.querySelectorAll("#template");
//    let links=document.querySelectorAll("#demo");
//   for(let i=0;i<=link.length;i++)
//  {
   
//      link[i].style.background="red";
//       link[i].style.color="white";
//        links[i].style.background="blue";
//       links[i].style.color="white";
     
//   }

  //  let links=document.querySelectorAll("#demo");
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.background="blue";
//       links[i].style.color="white";
     
//   }

// let template=document.querySelector("template");
// console.log(template)

// let p=document.createElement("p");
// p.textContent="welcome";
// template.appendChild(p);


//to create form

// let form=document.createElement("form");
// form.setAttribute("method","GET");
// form.setAttribute("Action","#");

// let label_username=document.createElement("label");
// label_username.textContent="username";
// label_username.setAttribute("for","username");

// let label_password=document.createElement("label");
// label_password.textContent="password";
// label_password.setAttribute("for","password");

// console.log(form);
// console.log(label_username);
// console.log(label_password);

// let username_input=document.createElement("input");
// username_input.setAttribute("type","text");
// username_input.setAttribute("id","username");
// username_input.setAttribute("name","username");
// username_input.setAttribute("placeholder","enter username");
// username_input.className="form-control";

// let password_input=document.createElement("input");
// password_input.setAttribute("type","text");
// password_input.setAttribute("id","password");
// password_input.setAttribute("name","password");
// password_input.setAttribute("placeholder","enter password");
// password_input.className="form-control";

// let btn=document.createElement("button")
// btn.textContent="login";
// btn.classList.add("btn","btn-success","my-2")

// form.append(label_username,username_input,label_password,password_input,btn)

// document.body.classList.add("container","my-2","col-md-4","mx-auto");
// document.body.appendChild(form);

//dom events

// let template=document.getElementById("template");
// console.log(template);
// template.onclick=function(){
//   console.log("hey template");
//   this.textContent="i an playing..."
// };

// template.onmousemove=function(){
  
//   this.textContent=" playing..."
// };

// template.onmouseleave=function(){
  
//   this.textContent=" stopped..."
// };

// {/* <video controls>
//   <source src=""></source>

// </video> */}

/*--19/02/21
let template=document.getElementById("template");
template.addEventListener("click",(event)=>{
  console.log("i am AddEventListener method");
  console.log(event);//mouse event methods and properties
  console.log(event.target);//it prints current event
  console.log(event.type);//type of event
  console.log(this);//window
  console.log(event.clientX);//x-axis position
  console.log(event.clientY);//y-axis position
});

let btn=document.getElementById("btn");
btn.addEventListener("click",e=>{
  // btn.classList.toggle("active");
  // let getActiveClass=btn.getAttribute("class","active");
  // console.log(getActiveClass);
  let changeColor=e.target.classList.toggle("active");
  console.log(changeColor);
  if(changeColor===true){
    document.body.style.background="blue";
    e.target.style.background="white";
    e.target.style.border="none";
    e.target.style.color="#111";

  }else{
     document.body.style.background="white";
    e.target.style.background="blue";
    e.target.style.border="blue";
    e.target.style.color="#fff";
  }
})

let btn=document.getElementById("btn");
btn.addEventListener("click",e=>{
  let ChangeText=e.target.classList.toggle("active");
console.log(ChangeText);
if(ChangeText===true){
  e.target.innerHTML="successfully submitted..";
  e.target.ClassName="btn btn-success active";
}else{
   e.target.innerHTML="login ";
  e.target.ClassName="btn btn-danger";
}
});

20/02/21

let username=document.getElementById("username");
console.log(username);
username.addEventListener("keyup",e=>{
  console.log(e.target.value);//it is getting current value
});

let t1=document.getElementById("textArea");
let t2=document.getElementById("textAreaClone");
t1.addEventListener("keyup",e=>{
let rs=e.target.value;
t2.innerHTML=rs;
if(rs.length>10){
  document.body.innerHTML=`
  <img src="./images/forest.jpg"/>
  t2.style.height="200px";
t2.style.width="200px";`;
}

})

let m1=document.getElementById("textArea");
let m2=document.getElementById("textAreaClone");
m1.addEventListener("keyup",e=>{
  let re=e.target.value;
  //m2.innerHTML=[...re].reverse().join("");
if(e.key==="Enter"){
m2.innerHTML=re;
}
});

let t1=document.getElementById("textArea");
let t2=document.getElementById("textAreaClone");
t1.addEventListener("keyup",e=>{
  let res=e.target.value;
  if(res.length>10&& res.length<30){
    t2.style.color="red";
   t2.style.background="blue";
   t2.style.borderColor="pink"
  }else if(res.length>30&& res.length<45){
    t2.style.color="green";
   t2.style.background="yellow";
   t2.style.borderColor="blue";
  }
  t2.innerHTML=res;
})


21/02/21

let username=document.getElementById("username");
let password=document.getElementById("password");
let form=document.getElementById("form");
let errorBlock=document.getElementById('errorBlock');
//submit event//submit a form 
form.addEventListener("submit",e=>{
  let errorMessages=[];
 e.preventDefault();
 var name=username.value;
 var pass=password.value;
 if(username.value===""|| username.value===null){
  errorMessages.push("username is required");
 }
 if(password.value===""|| password.value===null){
  errorMessages.push("password is required");
 }
 if(password.value.length < 6){
   errorMessages.push("password should be min 6 characters");
 }
 //client side validation
 if(errorMessages.length > 0){
    errorBlock.innerHTML=errorMessages.join("<br/>");
 }else{
    alert(`username is ${username.value}  password is ${password.value}`);
     username.value="";
     password.value="";
 }


});---------*/

23/02/21

let lists=document.querySelectorAll("li");
let form=document.getElementById("form");
let input=document.getElementById("input");
form.addEventListener("submit",e=>{
  e.preventDefault();
  let item=input.value;

  let li=document.createElement("li");
li.classList.add("list-group-item")

  console.log(item);
  lists.forEach(list=>{
    list.append(item);
 })
});


for(let list of lists){
let btn=document.createElement("button");
btn.classList.add("btn","btn-danger","btn-sm","float-right");
btn.textContent="Remove";
list.appendChild(btn);
  //Dom events
 btn.addEventListener("click",e=>{
    console.log(e.target);
    list.remove();//remove method used for removing nodelist
  });
}