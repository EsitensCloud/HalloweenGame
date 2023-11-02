var audio = false
var money = 100
function Check(){
    if(audio === false){
        audio = true
        document.querySelector(".audio1").play()
    }
    document.querySelector(".help").innerHTML = ""
    let playerNumber = document.querySelector(".number").value
    let playerBet = document.querySelector(".bet").value
    let randomNumber = Math.round((Math.random() * 10) + 2)
    if(playerNumber == randomNumber){
        money += Number(playerBet * 3)
        document.querySelector(".help").innerHTML = "Вы выйграли джекпот!"
    }
    else if(playerNumber < 2 || playerNumber > 12 ){
        document.querySelector(".help").innerHTML = "Некорректное число на которое вы поставили"
    }
    else if(playerBet < 1 || playerBet > money){
        document.querySelector(".help").innerHTML = "Некорректная сумма ставки"
    }    
    else if(playerNumber > 7 && randomNumber > 7){
        money += Number(playerBet)
        document.querySelector(".help").innerHTML = "Вы выйграли"      
    }
    else if(playerNumber < 7 && randomNumber < 7){
        money += Number(playerBet)
        document.querySelector(".help").innerHTML = "Вы выйграли"
    }
    else{
        money -= playerBet
        document.querySelector(".result").innerHTML = "Ты програл"
    }
    if(money <= 0){
        document.querySelector(".audio2").play()
        document.querySelector(".hidden").classList.remove("hidden")
    }
    document.querySelector(".num").innerHTML = randomNumber
    document.querySelector(".balance").innerHTML = "Твой баланс: " + money + " конфет"
}
document.querySelector(".audio1").volume = 0.5
document.querySelector(".audio2").volume = 0.5
document.querySelector(".check").addEventListener("click",Check)
