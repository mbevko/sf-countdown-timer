let timer = document.querySelector(".timer")

const conversion = () => {

   let d = new Date();
   let release = new Date(2023, 8, 31, 20, 0, 0);
   let countDown = release - d

   let ss = countDown / 1000;
   let hh =  Math.floor((countDown / (1000 * 60 * 60)) % 24)
   ss = ss % 3600
   let mm  = (parseInt( ss / 60 ))
   ss = Math.round(ss % 60)

   timer.innerHTML = `${hh > 9 ? hh : '0' + hh}:${mm > 9 ? mm : '0' + mm}:${ss > 9 ? ss : '0' + ss}`;
}

setInterval(conversion, 100);

