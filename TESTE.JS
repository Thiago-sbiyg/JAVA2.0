function boasVindas(){
console.log("Bem Ao Sistema Escolar!")
}
boasVindas();
boasVindas();

function mostrarCurso() {
console.log("Curso:Desenvolvimentos De Sistemas");
console.log("instituição: Escola de Tecnologia");
}

mostrarCurso();
boasVindas();
mostrarCurso();

function saudarAluno(nome) {
console.log(`Ola,  ${nome}! Seja Bem Vindo!`);
}

saudarAluno("Carlos");
saudarAluno("Mariana");
saudarAluno("Pedro");

function mostrarAluno(nome, curso) {
console.log(`Aluno: ${nome}`);
console.log(`Curso: ${curso}`);
}

mostrarAluno("Ana", "Programação");
mostrarAluno("Bruno", "Design Grafico");
mostrarAluno("Carla","Rede De Computadores");

function calcularMedia(nota1, nota2) {
let media = (nota1 + nota2) / 2;
console.log(`Media do Aluno: ${media}`);
}

calcularMedia(80, 60);

function adicionarPontos(nota,pontosextras){
let notaatualizada = nota + pontosextras;
console.log(`nota atualizada: ${notaatualizada}`);
}
function verificarAprovacao(media) {
   if(media >= 60) {
   console.log("Aluno aprovado!");
console.log("Aluno reprovado!");
}
}


verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);

function classificarAluno(nota){
 if (nota >= 90 && nota <= 100) {
        console.log("Excelente");
    } else if (nota >= 70 && nota <= 89) {
        console.log("Bom");
    } else if (nota >= 60 && nota <= 69) {
        console.log("Regular");
    } else if (nota >= 0 && nota < 60) {
        console.log("Insuficiente");
    } else {
        console.log("Nota inválida");
    }
}

classificarAluno(95);
classificarAluno(78);
classificarAluno(64);
classificarAluno(50);

function calcularMensalidade(valor) {
    let desconto = valor * 0.10;
    return valor - desconto;
}

let valorFinal = calcularMensalidade(500);
console.log(valorFinal);

function calcularMediaRetorno(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function avaliarAluno(nome, nota1, nota2) {
    let media = calcularMediaRetorno(nota1, nota2);
    let situacao = media >= 60 ? "Aprovado" : "Reprovado";

    console.log("Aluno:" + nome);
    console.log("Média:" +media);
    console.log("Situação:" +situacao);
}

avaliarAluno("Lucas", 80, 70);




