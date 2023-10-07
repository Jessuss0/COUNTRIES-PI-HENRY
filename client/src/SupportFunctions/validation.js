const validation = (activity)=>{
    const errors = {};
    if(!/^[a-zA-Z ]+$/.test(activity.name)){
        errors.name= "El name solo permite el uso de letras"
    }
    if(activity.name.length > 50){
        errors.name= "El name solo puede tener un max de 50 caracteres"
    }
    return errors;
}

export default validation;