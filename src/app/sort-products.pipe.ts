import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(productos: Product[], sortProperty: string): Product[] {
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
        if (compareValue1 < compareValue2){
          resultado =  -1;
        }else if (compareValue1 > compareValue2){
            resultado =  1;
        }else{
         resultado =  0;
        }
         return resultado;
    });
}else{
  ordenados=[]
}

return ordenados;

  }

}
