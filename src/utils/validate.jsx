
export const checkValidate=( email,password,name)=>{

    const isEmailValid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    // const isName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isEmailValid) return "Email icorrect";
    if(!isPasswordValid) return "Pasword incorrect";
    // if(!isName) return "Enter Valid Name"

    return "success"

  
}
