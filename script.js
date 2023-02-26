var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
   var result=JSON.parse(request.response);
   console.log(result);
   var res=result.filter((ele)=>ele.region==="Asia");
   console.log(res);
   
   var res=result.filter((ele)=>ele.population<200000);
   console.log(res);
   const result = ['name', 'capital', 'flag'];

   result.forEach(element => {
     console.log(element);
});

var res=result.filter((ele)=>ele.USD==="United States dollar").map((ele)=>ele.name);
console.log(res);
};
   



