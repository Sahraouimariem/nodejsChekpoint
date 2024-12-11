const ps=require("generate-password")
const generator=()=>{
    const password=ps.generate({
        length:10,
        numbers:true,
        Symbols:true,
        lowercase:true,
        appercase:true,
    })
    console.log(password)
}
generator()