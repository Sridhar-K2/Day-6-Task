//3)Write a “person” class to hold all the details.

//                               Solution:

class Person{
    constructor(name,heigth,weigth,age,colour,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.colour=colour;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        color:${this.colour}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`)
    }
}
let Person1=new Person("SRIDHAR K","5.7","72","34","Asian","B.E","Virudhunagar","TamilNadu")
Person1.details()


//                              OUTPUT:

/*
                name:SRIDHAR K
                height:5.7
                weight:72
                age:34
                color:Asian
                qualification:B.E
                city:Virudhunagar
                state:TamilNadu
*/
// ===================================================================================================================================================================================================
