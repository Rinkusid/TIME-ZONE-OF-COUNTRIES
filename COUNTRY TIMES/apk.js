function india(){
    let zone={timeZone:'Asia/Kolkata'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#Indian_date').innerText=currentDate
    document.querySelector('#Indian_time').innerText=currentTime
}
setInterval(india,1000)


function usa(){
    let zone={timeZone:'America/New_York'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#usa_date').innerText=currentDate
    document.querySelector('#usa_time').innerText=currentTime
}
setInterval(usa,1000)


function china(){
    let zone={timeZone:'Asia/Shanghai'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#china_date').innerText=currentDate
    document.querySelector('#china_time').innerText=currentTime
}
setInterval(china,1000)

function pakistan(){
    let zone={timeZone:'Asia/Kabul'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#pakistan_date').innerText=currentDate
    document.querySelector('#pakistan_time').innerText=currentTime
}
setInterval(pakistan,1000)

function hongkong(){
    let zone={timeZone:'Asia/Hong_Kong'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#hongkong_date').innerText=currentDate;
    document.querySelector('#hongkong_time').innerText=currentTime;
}
setInterval(hongkong,1000)

function qatar(){
    let zone={timeZone:'Asia/Qatar'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#qatar_date').innerText=currentDate;
    document.querySelector('#qatar_time').innerText=currentTime;
}
setInterval(qatar,1000)

function singapore(){
    let zone={timeZone:'Asia/Singapore'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#singapore_date').innerText=currentDate;
    document.querySelector('#singapore_time').innerText=currentTime;
}
setInterval(singapore,1000)

function mexico(){
    let zone={timeZone:'America/Mexico_City'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#mexico_date').innerText=currentDate;
    document.querySelector('#mexico_time').innerText=currentTime;
}
setInterval(mexico,1000)


function argentina(){
    let zone={timeZone:'America/Argentina/Catamarca'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#argentina_date').innerText=currentDate;
    document.querySelector('#argentina_time').innerText=currentTime;
}
setInterval(argentina,1000)

function germany(){
    let zone={timeZone:'Europe/Berlin'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#germany_date').innerText=currentDate;
    document.querySelector('#germany_time').innerText=currentTime;
}
setInterval(germany,1000)

function indonesia(){
    let zone={timeZone:'Asia/Jakarta'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#indonesia_date').innerText=currentDate;
    document.querySelector('#indonesia_time').innerText=currentTime;
}
setInterval(indonesia,1000)

function dubai(){
    let zone={timeZone:'Asia/Dubai'};
    let currentDate=new Date().toLocaleDateString('en-US',zone);
    let currentTime=new Date().toLocaleTimeString('en-US',zone);
    document.querySelector('#dubai_date').innerText=currentDate;
    document.querySelector('#dubai_time').innerText=currentTime;
}
setInterval(dubai,1000)