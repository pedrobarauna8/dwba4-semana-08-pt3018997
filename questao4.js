class Aluno{  

constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
}
  
nomeCompleto(){
  alert("Nome: " + this.primeiroNome + " " + this.segundoNome)
}

media(){
  alert("Media: " +((this.primeiraNota*0.6)+(this.segundaNota*0.4)))
}

situacao(){
  if ((this.primeiraNota*0.6)+(this.segundaNota*0.4)>6){
    alert("Aprovado")
  }else{
    alert("Reprovado")
  }
}
  
}

var aluno1 = new Aluno("Matheus", "Silva", 8, 9)
aluno1.nomeCompleto()
aluno1.media()
aluno1.situacao()

var aluno2 = new Aluno("Cleber", "Pirone", 0, 1)
aluno2.nomeCompleto()
aluno2.media()
aluno2.situacao()

var aluno3 = new Aluno("Gustavo", "Lopes", 10, 8)
aluno3.nomeCompleto()
aluno3.media()
aluno3.situacao()
