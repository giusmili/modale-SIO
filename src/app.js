document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()
    console.log(e.target)

    const elementParent = document.querySelector(".modal-parent") // parent modale

    const btn_open = document.querySelector("h1 a"); // le link open

    const btn_closed = document.querySelector(".btn-closed")

    const closed = document.querySelector(".closed")

    const elementFigure = document.querySelector("figure")
    


    btn_open.addEventListener("click",(e)=>{
        e.stopPropagation()
        elementParent.classList.add("appear-modal")

    
    })

    btn_closed.addEventListener("click",(e)=>{
        e.stopPropagation()
        elementParent.classList.remove("appear-modal")
    })

    closed.addEventListener("click",(e)=>{
        e.stopPropagation()
        elementParent.classList.remove("appear-modal")
    })

    /* pas de fermeture sur figure */
    elementFigure.addEventListener("click",(e)=>{
        e.stopPropagation()
    })

    document.addEventListener("click",()=>{
        elementParent.classList.remove("appear-modal") /* click exterieur */
    })


})