class paciente {
     public nome: string
     public idade: number
     public peso: number


 constructor (nome:string, idade:number , peso: number){
     this.nome = nome
     this.idade = idade
     this.peso = peso

 }    
}


const leo = new paciente('leo',20,80)