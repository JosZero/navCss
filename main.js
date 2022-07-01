const btnMore = document.querySelector("#btnMore");

btnMore.addEventListener('click',(e)=>{
      e.preventDefault();
      const links =document.querySelector('#links');
      links.classList.toggle('collapsed');
});