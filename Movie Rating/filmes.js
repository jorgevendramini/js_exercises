/*Você está desenvolvendo um sistema de avaliação de filmes.
Crie um array com os filmes disponíveis e outro array com as notas dadas pelos usuários a cada filme.
Crie uma função que permita ao usuário dar uma nota a um filme, informando o nome do filme e a nota. 
A função deve atualizar o array de notas do filme correspondente. 
Crie outra função que calcule a média das notas de um filme, informando o nome do filme.*/



const stars = document.querySelectorAll('.star');
const rating = document.querySelectorAll('.rating');
const media = document.querySelectorAll('.mediaFilme');

stars.forEach((star, index) => {
  star.addEventListener('mouseover', () => {
    for(let i = 0; i <= index; i++){
      stars[i].classList.add('active');
    }
  });

  star.addEventListener('mouseout', () => {
    for(let i = 0; i <= index; i++){
      stars[i].classList.remove('active');
    }
  });

  star.addEventListener('click', () => {
    rating[index].style.opacity = '1';
    media[index].style.opacity = '0.8';
  });
});

