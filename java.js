document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const generosJogos = document.querySelectorAll('input[name="generos[]"]:checked');
    const jogarComAmigo = document.getElementById('jogarComAmigo').value;
    const horario = document.getElementById('horario').value;

    if (nome === 'Maria' && parseInt(idade) > 10 && generosJogos.length === 5) {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = '#f8f9fa';
    }

    let textoSelecoes = `Nome: ${nome}\nIdade: ${idade}\nGênero: ${genero ? genero.value : 'N/A'}\nGêneros de Jogos: `;
    
    generosJogos.forEach(function (genero) {
        textoSelecoes += genero.value + ', ';
    });

    textoSelecoes += `\nGosta de jogar com um amigo? ${jogarComAmigo}\nHorário preferido: ${horario}`;

    alert(textoSelecoes.slice(0, -2));
});
