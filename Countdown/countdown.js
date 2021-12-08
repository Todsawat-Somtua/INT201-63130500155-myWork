const mybirthday = "11 January 2022";

function countdown(){
    const birthdayDate = new Date(mybirthday);
    const today = new Date();
    const totaltime = Math.floor((birthdayDate - today) / 1000); // ได้เป็นหน่วยมิลลิเซคเคิล แปลงเป็นวินาที

    const second = Math.floor(totaltime % 60);
    const minute = Math.floor((totaltime / 60) % 60);
    const hour = Math.floor(((totaltime / 3600) % 24));
    const day = Math.floor((totaltime / 3600) / 24);

    console.log(`${day} days, ${hour} hours, ${minute} minutes and ${second} seconds before my birthday`);
}

countdown()

setInterval(countdown, 1000)