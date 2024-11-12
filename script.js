class Aluno {
    constructor(nome, datanascimento, email, nota1, nota2, nota3){
        this.nome = nome;
        this.datanascimento = datanascimento;
        this.email = email;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.media = (nota1+nota2+nota3)/3;
        if (this.media >= 7){
            this.situação = "Aprovado!";
        }else if (this.media >= 5){
            this.situação = "Recuperação";
        }else {
            this.situação = "Reprovado";
        }

    }
};

function ArmazenaDados(){
    nome = document.getElementById("nome").value;
    datanascimento = document.getElementById("datanascimento").value;
    email = document.getElementById("email").value;
    nota1 = document.getElementById("n1").value;
    nota2 = document.getElementById("n2").value;
    nota3 = document.getElementById("n3").value;
    aluno = new Aluno(nome, datanascimento, email, nota1, nota2, nota3);
    
    localStorage.setItem("aluno",JSON.stringify(aluno));

};
function RecuperarDados(){
    const alunoRecuperado = localStorage.getItem("aluno");
    const alunoObj = JSON.parse(alunoRecuperado);
    document.getElementById("nomeAluno").innerHTML = alunoObj.nome;
    document.getElementById("dataAluno").innerHTML = alunoObj.datanascimento;
    document.getElementById("emailAluno").innerHTML = alunoObj.email;
    document.getElementById("nota1Aluno").innerHTML = alunoObj.nota1.toPrecision(3);
    document.getElementById("nota2Aluno").innerHTML = alunoObj.nota2.toPrecision(3);
    document.getElementById("nota3Aluno").innerHTML = alunoObj.nota3.toPrecision(3);
    document.getElementById("mediaAluno").innerHTML = alunoObj.media.toPrecision(3);
    document.getElementById("statusAluno").innerHTML = alunoObj.situação;
    if (alunoObj.situação == "Aprovado"){
        document.getElementById("dadosAluno").style.backgroundColor = "#ffcccc";
        document.getElementById("statusAluno").style.Color= "#ccffcc";
    }
    else {
        document.getElementById("dadosAluno").style.backgroundColor  = "#ffcccc";
    };

};