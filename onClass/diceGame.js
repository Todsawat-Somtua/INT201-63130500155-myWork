//สร้าง object ผู้เล่น 2 คน (name ใช้สำหรับการใส่ชื่อของผู้เล่น, 
//score ใช้เพื่อเก็บคะแนนในการชนะแต่ละครั้ง
//และ diceValue ใช้เพื่อเก็บค่าที่ผู้เล่นคนนั้นทอยได้ในแต่ละรอบ)
let player1 = {name: "Player 1", score: 0, diceValue: []};
let player2 = {name: "Player 2", score: 0, diceValue: []};
let player = {statsLog: []};
//ใส่จำนวนรอบที่ต้องการเล่น
play(10);
//ใช้ For-loop เพื่อจะให้เกิดการทอยลูกเต๋าในทุกๆรอบ 
//และเปรียบเทียบผู้เล่นที่ชนะแต่ละรอบ สุดท้ายคือเทียบว่าใครได้แต้มมากที่สุด
function play(round) {
    for (let i = 0 ; i < round; i++) {
        rollDice(i);
        console.log(`\n--- Round ${i+1} ---`);
        console.log(`Player 1 Roll: ${player1.diceValue[i]}`);
        console.log(`Player 2 Roll: ${player2.diceValue[i]}`);
        console.log(whoWin(i));
    }
    console.log(`\nThe winner is: ${gameWin()}`);
    console.log(player.statsLog);
}

//สร้างฟังก์ชัน rollDice สำหรับใช้ในการทอยลูกเต๋า
//สุ่มตัวเลขโดยใช้ Math.random() <- เป็นการสุ่มเลขที่จะได้ค่าที่ 0<x<1
//และนำไปคูณด้วย 6 (จำนวนหน้าของเต๋า) ออกมา ซึ่งค่าจะเป็นค่าทศนิยม
//จึงต้องใช้ Math.ceil เพื่อปัดขึ้นทำให้กลายเป็นเลขจำนวนเต็ม
function rollDice(i) {
    player1.diceValue[i] = Math.ceil(Math.random() * 6);
    player2.diceValue[i] = Math.ceil(Math.random() * 6);
}

//เอาค่าลูกเต๋าที่ทอยได้มาเปรียบเทียบกัน แล้ว return ออกมาเป็น String เพื่อบอกผู้ชนะในรอบนั้น
//มีการเก็บค่า score เพิ่มครั้งละ 1 เพื่อไปใช้ในการเปรียบเทียบตอนสุดท้าย
//ว่าคนที่ชนะมากที่สุดในทุกรอบการทอยคือคนไหน
function whoWin(i){
    let result = "";
    if(player1.diceValue[i] > player2.diceValue[i]) {
        player.statsLog[i] = "Player 1 Win"
        player1.score += 1;
        return result = `${player1.name} Win`
    } else if (player1.diceValue[i] < player2.diceValue[i]){
        player.statsLog[i] = "Player 2 Win"
        player2.score += 1;
        return result = `${player2.name} Win`
    } else {
        player.statsLog[i] = "Draw"
        return result = "It's Draw"
    }
}

//นำค่า score มาเปรียบเทียบว่า ใครชนะในแต่ละรอบมากกว่ากัน
//และ return string บอกผู้ที่มีคะแนนมากกว่า
function gameWin() {
    let result = "";
    if(player1.score > player2.score){
        return result = `${player1.name} Win`;
    } else if(player1.score < player2.score){
        return result = `${player2.name} Win`;
    } else {
        return result = `Noone It's draw`;
    }
}