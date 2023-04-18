/*Você está desenvolvendo um sistema de avaliação de filmes.
Crie um array com os filmes disponíveis e outro array com as notas dadas pelos usuários a cada filme.
Crie uma função que permita ao usuário dar uma nota a um filme, informando o nome do filme e a nota. 
A função deve atualizar o array de notas do filme correspondente. 
Crie outra função que calcule a média das notas de um filme, informando o nome do filme.*/

const ratingStars = [...document.getElementsByClassName("star")];

function executeRating(stars) {
  const starClassActive = "star star-filled";
  const starClassInactive = "star star-empty";
  const starsLength = stars.length;
  let i;

  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}

executeRating(ratingStars);
