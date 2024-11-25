let p = document.querySelectorAll('div p:nth-child(1)');
console.log(p);

let ap = document.querySelector('.ap p');

setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    p[0].innerText = (hours % 12 || 12).toString().padStart(2, '0');
    p[1].innerText = minutes.toString().padStart(2, '0');
    p[2].innerText = seconds.toString().padStart(2, '0'); 

   
    ap.innerText = hours >= 12 ? "PM" : "AM";
}, 1000);
