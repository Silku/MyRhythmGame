/**
 * Todo
 * ui
 * 충돌 판정 : perfect ~ miss
 * 배속
 * 
 */


    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = 1080;
    canvas.height = 720;
    displayWidth = canvas.width;
    // displayHeight = canvas.height;

    let background = {
        draw(){
            ctx.fillStyle = 'rgb(0,0,0)';
            ctx.fillRect(0,0 ,1080,720);
        }
    }

    // 판정선
    let judgeLine = {
        x : 0,
        y: 670,
        width : displayWidth,
        height : 10,
        draw(){
            ctx.fillStyle = 'rgb(255,0,0)';
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }


    // 324, 432, 540 ,648, 756
    class Note{
        constructor(){
            this.x = 432;
            this.y = 100;
            this.width = 100;
            this.height = 30;
        }
        draw(){
            ctx.fillStyle = 'rgb(0,255,255)'
            ctx.fillRect(this.x,this.y,this.width,this.height)
        }
    }


    let su = Math.ceil(Math.random()*10)
    console.log(su)

    let time = 0;
    let notes = [];
    // 노트 애니메이션

    function dropNote(){
        background.draw();
        judgeLine.draw();
        requestAnimationFrame(dropNote)
        time++;
        // time +=  Math.ceil(Math.random()*10);
        // ctx.clearRect(0,0, canvas.width, canvas.height)
        if(time % 120 === 0){
            let note = new Note();
            let note2 = new Note();
            note2.x = 540;
            notes.push(note, note2);
        }
        notes.forEach((e , i , o)=>{
            e.y++;
            if(e.y > 670){
                o.splice(i, 1)
            }
            e.draw();
        })


    }
    dropNote();



    document.addEventListener('keydown',function(e){
        if(e.key === 'f'){
            console.log('f누름')
        }
    })

    document.addEventListener('keydown',function(e){
        if(e.key === 'q'){
            console.log('f누름')
            audio.pause();
            audio.currentTime = 0;
        }
    })




const mp3 = document.querySelector('#mp3')
const audio = new Audio;
audio.src='./assets/only for you.mp3'
mp3.addEventListener('click', function(){
        audio.play();
        audio.volume = 0.1

})
