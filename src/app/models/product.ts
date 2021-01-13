export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;


    // if user forget to enter something then we can set some default values

    constructor(id: number, name: string, description ='', price=0 , imageUrl='https://images-na.ssl-images-amazon.com/images/I/31vG05E%2BpUL.jpg'){
         this.id= id;
         this.name= name;
         this.description= description;
         this.price= price;
         this.imageUrl= imageUrl;

    }
}
