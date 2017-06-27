import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(productos: Product[], sortProperty: string): Product[] {
    console.log('Pipe', sortProperty);
   console.log(productos);
    let ordenados: Product[];
if (productos){
   ordenados = productos.sort((product1: Product, product2:Product): number => {
        let resultado: number;
        let compareValue1: any;
        let compareValue2: any;
        if (sortProperty === 'seller' || sortProperty === 'category'){
          compareValue1 = product1[sortProperty].name;
          compareValue2 = product2[sortProperty].name;
        }else{
          compareValue1 = product1[sortProperty];
          compareValue2 = product2[sortProperty];
        }
console.log('Product1', product1);
console.log('CompareValue1', compareValue1);
console.log('Product2', product2);
console.log('CompareValue2', compareValue2);
        if (compareValue1 < compareValue2){
          resultado =  -1;
        }else if (compareValue1 > compareValue2){
            resultado =  -1;
        }else{
         resultado =  0;
        }
        console.log('resultado', resultado);
        return resultado;
    });
}else{
  ordenados=[]
}
console.log('Ordenados',ordenados);
return ordenados;

  }

}
