
class Person{

    constructor(nom){
        this._nom = nom;
       
    }

saludar = () => {console.log(`Hola, ${this._nom}`)};

}

  
  const person1 = new Person('Maia');
  person1.saludar(); 