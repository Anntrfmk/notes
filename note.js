let addSmall = document.querySelector('.btn');
let addBig = document.querySelector('.addBig');
let Notes = document.querySelector('.Notes');
//add.addEventListener('click', () =>{
    //let note = document.createElement('div');
    //note.classList.add('blue');
   // Notes.append(note);
//});
addSmall.addEventListener('click', () =>{
    let smallNote = document.createElement('textarea');
    smallNote.classList.add('pink');
   // smallNote.style.whiteSpace ='pre';
   // smallNote.style.overflow = 'hidden';
   // smallNote.style.textOverflow = 'ellipsis';
    Notes.append(smallNote);  

   smallNote.addEventListener('input', () => {
        smallNote.style.height = 'auto';
        smallNote.style.height = smallNote.scrollHeight + 'px';
    });

   // smallNote.addEventListener('dblclick', () =>{
     //   smallNote.classList.add('blue')
   // });
 });

 //addBig.addEventListener('click', () =>{
    //let bigNote = document.createElement('input');
   // bigNote.classList.add('blue');
   // Notes.append(bigNote);

//});

