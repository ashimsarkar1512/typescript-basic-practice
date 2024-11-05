// learning function

// normal funtion 

// arrow function

function add(num1:number, num2:number):number{
            return num1+num2

}

add(2,3)

const addArrow=(num1:number,num2:number)=>num1+num2



const poorUser={
            name:"ashim",
            balance:0,
           
            addBalance(balance:number):string{
                        return`my new balance: ${this.balance+balance}`

            }
            
}



const arr :number[]=[1,2,3,4]

const newArray:number[]=arr.map((elem:number)=>elem*elem)