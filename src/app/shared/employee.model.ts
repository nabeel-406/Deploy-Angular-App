export class Employee {
    id: number=0;
    name: string;
    lastName: string = '';
    email: string = '';
    age: number;
    doj: any;
    gender:string='';
    isMarried:number;
    isActive:number;
    designationID:number=0;
    designation:string='';
}
// to remove the undefined error you have to go to tsconfig.json and in compilerOption's under lib you have to write "strictPropertyInitialization": false," 
export class Designation {
    id: number=0;
    designation: string='';
}