(()=>{
  
  interface Client {
    name:string;
    age: number;
    address: Address;
    getFullAddress( id:number ):Address|undefined;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }


  const client:Client = {
    name: 'David',
    age: 29,
    address: {
      id: 123,
      zip: 65432,
      city: 'Cali',
    },
    getFullAddress(id:number):Address|undefined {
      if (id != this.address.id) {
        return;
      }
      return this.address;
    },
  };

  const client2:Client = {
    name: 'Isaac',
    age: 31,
    address:{
      id:2,
      zip:98465,
      city: 'Cartagena'
    },
    getFullAddress(id:number):Address|undefined {
      if (id != this.address.id) {
        return;
      }
      return this.address;
    },
  }

})()