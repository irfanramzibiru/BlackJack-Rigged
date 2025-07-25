chip=document.getElementById("chipJudi")
bettingChip=[0,50,100,200,300,500]
counterbet=0

chipPlayer=document.getElementById("chipPlayer")
chipPemain=1000 //opsional dulu 
bermain=false

kartu=[]
kartuPemain=document.getElementById("playerCard")
totalkartuPemain=document.getElementById("totalplayerCard")

kartuD=[]
kartuDealer=document.getElementById("dealerCard")
totalkartuDealer=document.getElementById("totaldealerCard")

rigged=0


function tambah(){
    if(counterbet<bettingChip.length-1 && bermain==false){
    counterbet+=1}
    chip.textContent="$"+bettingChip[counterbet]
}

function kurang(){
    if(counterbet>0 && bermain==false){
    counterbet-=1}
    chip.textContent="$"+bettingChip[counterbet]
}

function mulai(){
    if(bermain==false && counterbet!=0){
        chipberkurang = chipPemain-bettingChip[counterbet]
        chipPlayer.textContent = "$"+ chipberkurang
        chipPemain-=bettingChip[counterbet]
        bermain=true
        while(chipPemain<bettingChip[counterbet]){
            counterbet-=1
            chip.textContent=bettingChip[counterbet]        
        }
        play()
    }
}

function stand(){
    bermain=false
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function play(){
    rigged+= 1
    kartu=[]
    kartuPemain.textContent=kartu

    kartuPpertama = getRandomCard()
    kartuPkedua = getRandomCard()
    kartu = [kartuPpertama,kartuPkedua]
    totalPkartu = kartuPpertama+kartuPkedua

    for (let i = 0; i < kartu.length; i++) {
        kartuPemain.textContent += " | "+kartu[i]
    }
    totalkartuPemain.textContent = totalPkartu

    if(rigged<2){
    kartuDpertama = getRandomCard()
    kartuDkedua = getRandomCard()}
    else{kartuDpertama=10 
        kartuDkedua=11
        rigged=0
    }
    kartuD = [kartuDpertama,kartuDkedua]
    totalDkartu = kartuDpertama

    kartuDealer.textContent = " | "+kartuD[0]+" | ?"
    
    totalkartuDealer.textContent = totalDkartu
}

function hit(){
    if(bermain==true){
        kartuPselanjutnya = getRandomCard()
        totalPkartu += kartuPselanjutnya
        kartuPemain.textContent += " | " + kartuPselanjutnya
        totalkartuPemain.textContent = totalPkartu
    }
    if(totalPkartu>21){bermain=false}
}

function stand(){
    if(bermain==true){
    kartuDealer.textContent=""
    for (let i = 0; i < kartuD.length; i++) {
        kartuDealer.textContent += " | "+kartuD[i]
    }
    totalDkartu= kartuDpertama+kartuDkedua
    totalkartuDealer.textContent = totalDkartu

    while(totalDkartu<17){
        kartuDselanjutnya = getRandomCard()
        totalDkartu += kartuDselanjutnya
        kartuDealer.textContent+= " "+kartuDselanjutnya
        totalkartuDealer.textContent=totalDkartu
    }
    pencairan()
    bermain=false
}
}

function pencairan(){
    if(totalDkartu>21||totalPkartu>totalDkartu){
        chipPemain += bettingChip[counterbet]*2
        chipPlayer.textContent = "$"+chipPemain}
}