(function() {
    let canvas = document.querySelector('#canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;

    displayWidth = canvas.width;

    // let note = {
    //     x : 10,
    //     y: 100,
    //     width : 100,
    //     height : 30,
    //     draw(){
    //         ctx.fillStyle = 'rgb(0,255,0)'
    //         ctx.fillRect(this.x,this.y,this.width,this.height)
    //     }
    // }

    // note.draw();

    let judgeLine = {
        x : 10,
        y: 700,
        width : displayWidth,
        height : 10,
        draw(){
            ctx.fillStyle = 'rgb(255,0,0)';
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    class Note{
        constructor(){
            this.x = 300;
            this.y = 100;
            this.width = 100;
            this.height = 30;
        }
        draw(){
            ctx.fillStyle = 'rgb(0,255,255)'
            ctx.fillRect(this.x,this.y,this.width,this.height)
        }
    }



    let time = 0;
    let notes = [];
    // 노트 애니메이션
    function dropNote(){
        requestAnimationFrame(dropNote)
        time++;
        ctx.clearRect(0,0, canvas.width, canvas.height)
        if(time % 120 === 0){
            let note = new Note();
            let note2 = new Note();
            note2.x = 500;
            notes.push(note, note2);
        }
        notes.forEach((e)=>{
            e.y++;
            e.draw();
        })
        judgeLine.draw();
    }

    dropNote();
})()



// function draw() {
//     var ctx = document.getElementById('canvas').getContext('2d');
//     for (var i = 0; i < 6; i++){
//       for (var j = 0; j < 6; j++){
//         ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
//                          Math.floor(255 - 42.5 * j) + ', 0)';
//         ctx.fillRect(j*25,i*25,25,25);
//       }
//     }
//   }

//   draw()