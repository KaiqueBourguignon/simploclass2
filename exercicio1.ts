class patinete {
   
    public marca     : string
    public velocidade: number
    public cor       : string
    public motorizado: boolean
    constructor( marca:string , velocidade:number , cor: string , motorizado: boolean ){
        this.cor        = cor
        this.marca      = marca
        this.velocidade = velocidade
        this.motorizado = motorizado
    }


    public motorizadoS (motorizado: boolean){
        this.motorizado = motorizado
    }
}
        const motorizadoS = prompt('VOCE QUER MOTOR ELETRICO ?')    
        const patine1 = new patinete ('caloi',200,'verde',true)


console.log(`SEUS PATINETE ${motorizadoS} E ${patine1}`)