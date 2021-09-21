let a;
let date;
let time;
setInterval(() => {
   a=new Date();
   date=a.toLocaleDateString();
   x= a.getHours();
   y=a.getMinutes();
   z=a.getSeconds();
   if(x<10 && y<10 && z<10)
   {
    time= '0' + a.getHours() + ':0' + a.getMinutes() + ':0' + a.getSeconds()
   }
   else if(x<10 && y<10 && z>10)
   {
    time= '0' + a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds()
   }
   else if(x<10 && y>10 && z<10)
   {
    time= '0' + a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds()
   }
   else if(x<10 && y>10 && z>10)
   {
    time= '0' + a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
   }
   else if(x>10 && y<10 && z<10)
   {
    time= a.getHours() + ':0' + a.getMinutes() + ':0' + a.getSeconds()
   }
   else if(x>10 && y<10 && z>10)
   {
    time= a.getHours() + ':0' + a.getMinutes() + ':' + a.getSeconds()
   }
   else if(x>10 && y>10 && z<10)
   {
    time= a.getHours() + ':' + a.getMinutes() + ':0' + a.getSeconds()
   }
   else if(x>10 && y>10 && z>10)
   {
    time= a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds()
   }
   document.getElementById('time').innerHTML=time + "  on " + date;
}, 1000);
