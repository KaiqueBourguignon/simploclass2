class banco {
   
    public tipo    : string
    public numero  : number
    public lsaldo  : number = 200
    public mSaldo  : number = 0
    public totalS  : number = 0
    constructor( tipo:string , numero:number  ){
        this.tipo    = tipo
        this.numero  = numero
    
    }
        public soma (totalS :number, mSaldo: number, lsaldo: number){
        this.totalS = totalS
        this.mSaldo = mSaldo
        this.lsaldo = lsaldo
        mSaldo = lsaldo + mSaldo 
    }    
    } 
    let mSaldo = prompt ('quando quer adicionar')
    const cliente = new banco ('conta corrente', 520)
    console.log(`Seu novo saldo e ${mSaldo} e seu dados sao ${cliente}`)

        
         


