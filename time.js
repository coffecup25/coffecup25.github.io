function updateClock() {
    var now = new Date(), // current date
        //months = ['January', 'February', 'M']; // you get the idea
        time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0'+now.getMinutes(): now.getMinutes()), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(), 
                now.getMonth()+1,
                now.getFullYear()].join('/');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [date, time].join(' ');
    
    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock(); // initial call