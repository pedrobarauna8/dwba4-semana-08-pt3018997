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
  if (this.media>6){
    alert("Aprovado")
  }else{
    alert("Reprovado")
  }
}
  
}

var aluno = new Aluno("Matheus", "Silva", 8, 9)
aluno.nomeCompleto()
aluno.media()
aluno.situacao()



