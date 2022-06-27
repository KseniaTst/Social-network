export const RequiredField=(value:string)=>{
    if(value) return undefined
    return 'Field is required!'
}
export const MaxLengthCreator=(maxLength:number)=>(value:string)=>{

    if(value&&value.length>maxLength) return `Max value is ${maxLength} symbols`
    return undefined;
}
export const MinLengthCreator=(minLength:number)=>(value:string)=>{
    if(value&&value.length<minLength) return `Min value is ${minLength} symbols`
    return undefined
}