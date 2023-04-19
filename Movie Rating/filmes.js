/*Você está desenvolvendo um sistema de avaliação de filmes.
Crie um array com os filmes disponíveis e outro array com as notas dadas pelos usuários a cada filme.
Crie uma função que permita ao usuário dar uma nota a um filme, informando o nome do filme e a nota. 
A função deve atualizar o array de notas do filme correspondente. 
Crie outra função que calcule a média das notas de um filme, informando o nome do filme.*/

//https://javascript.info/


const stars = document.querySelectorAll('.star');
const media = document.querySelectorAll('.mediaFilme');

let rating = [0,0,0,0];

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for(let i = 0; i <= index; i++){
      stars[i].classList.add('active');
    }
  });

  star.addEventListener('mouseout', () => {
    for(let i = 0; i <= index; i++){
      if(!star.classList.contains('locked')){
        stars[i].classList.remove('active');
      }
    }
  });

  star.addEventListener('click', () => {
    for(let i = 0; i <= index; i++){
      stars[i].classList.add('locked');
    }
      rating[index] = parseInt(this.getAttribute('data-rating'));
      setActiveRating();
  });

});

setActiveRating = () => {
  stars.forEach((star, index) => {
      if(parseInt(star.getAttribute('data-rating')) <= rating[index]){
        star.classList.add('active');
        console.log(rating);
      } else {
        star.classList.remove('active');
      }

      star.addEventListener('click', () => {
        if(star.classList.contains('active')){
          star.classList.remove('active');
          rating[index] = 0;
        } else {
          star.classList.add('active');
          rating[index] = parseInt(star.getAttribute('data-rating'));
        }
      });
  });
}

