let songInd = 0;
let audioElement = new Audio(`songs/1.mp3`)
let masterPLay = document.querySelector('#playPause');
let myPlayer = document.querySelector('#myPlayer')
let gif = document.querySelector('#gif')
let songInfo = document.querySelector('.songPlayed')

let songs = [
    {songName : "Bekhayali From Kabir Singh" , filePath:"songs/1.mp3", coverPath : "cover/cover1.jpg" },
    {songName : "Baatein Yekabhi Na" , filePath:"songs/2.mp3", coverPath : "cover/cover2.jpg" },
    {songName : "Kesariya From Brahmastra" , filePath:"songs/3.mp3", coverPath : "cover/cover3.jpg" },
    {songName : "Pal From Jalebi" , filePath:"songs/4.mp3", coverPath : "cover/cover4.jpg" },
    {songName : "Agar Tum Sath Ho" , filePath:"songs/5.mp3", coverPath : "cover/cover5.jpg" },
    {songName : "Tum Hi Ho" , filePath:"songs/6.mp3", coverPath : "cover/cover6.jpg" },
    {songName : "Khairiyat From Chichore" , filePath:"songs/7.mp3", coverPath : "cover/cover7.jpg" },
    {songName : "Chahu Main Ya Na" , filePath:"songs/8.mp3", coverPath : "cover/cover8.jpg" }
]
// Initialize first song name
songInfo.innerHTML = songs[songInd].songName;

//Play Pause
masterPLay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPLay.classList.remove('fa-pause-circle')
        masterPLay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})

//audioElement.play()

//listen to events

audioElement.addEventListener('timeupdate',() => 
    {
      progress = parseInt(audioElement.currentTime / audioElement.duration * 100);
      myPlayer.value = progress;
})

myPlayer.addEventListener('change',() => {
    audioElement.currentTime = myPlayer.value * audioElement.duration / 100;
})

const playAll =()=> {
     
      Array.from(document.querySelectorAll('.songItemPlay')).forEach((element) => {
      element.classList.add('fa-play-circle');
      element.classList.remove('fa-pause-circle')
}
)}



// Array.from(document.querySelectorAll('.songItemPlay')).forEach((element) => {
//     element.addEventListener('click',(e) => {
//         playAll();
  

//         songInd = parseInt(e.target.id) ;

//         e.target.classList.remove('fa-play-circle')
//          e.target.classList.add('fa-pause-circle')

//         audioElement.src = songs[songInd].filePath;

         
//          audioElement.currentTime = 0;
//          audioElement.play();
//          songInfo.innerHTML = songs[songInd].songName;
         
      

//          masterPLay.classList.remove('fa-play-circle');
//         masterPLay.classList.add('fa-pause-circle');


        
//     })
// });

Array.from(document.querySelectorAll('.songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e) => {

       let songIndex = parseInt(e.target.id);

        // If clicking the same song that is currently playing
        if (songInd === songIndex && !audioElement.paused) {
            // Pause it
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');

            // Also change main play button
            masterPLay.classList.remove('fa-pause-circle');
            masterPLay.classList.add('fa-play-circle');
            return;
        }

        // Otherwise play the selected song
        songInd = songIndex;

        playAll(); // reset icons
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = songs[songInd].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        songInfo.innerHTML = songs[songInd].songName;

        masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
    });
});


let next = document.querySelector('#next')
next.addEventListener('click', () => {
   if(songInd >= 7){
        songInd = 0;
    }
    else {
     songInd += 1;
    }
    audioElement.src = songs[songInd].filePath;
    
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         songInfo.innerHTML = songs[songInd].songName;
          
         masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
})

let previous = document.querySelector('#previous')
previous.addEventListener('click', () => {
    if(songInd <= 0){
        songInd = 0;
    }
    else {
     songInd -= 1;
    }
    audioElement.src = songs[songInd].filePath;
    
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         songInfo.innerHTML = songs[songInd].songName;
          

         masterPLay.classList.remove('fa-play-circle');
        masterPLay.classList.add('fa-pause-circle');
})


