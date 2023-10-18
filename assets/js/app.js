const cl = console.log;
const accod=   [...document.querySelectorAll(".acco-heading")]


 const accodhandler= (eve)=>{

    let getclasses=eve.target.className
    cl(getclasses)
    accod.forEach(head=>{
        head.classList.remove('active')
        head.children[0].classList.add('fa-angle-down')
        head.children[0].classList.remove('fa-angle-up')
    })
    if(getclasses.indexOf('active')>-1){
        eve.target.classList.remove('active')
        eve.target.children[0].classList.add('fa-angle-down')
        eve.target.children[0].classList.remove('fa-angle-up')
    }else{
        eve.target.classList.add('active')
        eve.target.children[0].classList.remove('fa-angle-down')
        eve.target.children[0].classList.add('fa-angle-up')
    }
   
 }











accod.forEach(head=>{
    head.addEventListener("click",accodhandler)
}
)
