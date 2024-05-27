const $ = document;
const containerProducts= $.querySelector('#containerProducts');
const newCard= ({title,image,description,price,id}) => {
    return `
                                <div class="card" id=${id}>
                                    <h3 class="card-tittle">${title}</h3>
                                    <img class="card-img" src=${image} alt="">
                                    <p class="card-desc" >${description.slice(0,40)}</p>
                                    <strong class="card-price">${price}</strong>
                                     
                                    <a href="../pages/detail.html?idproducto=${id}" class="btn">Detalle</a>
                                </div>
    `
    
};
{/* <button class="btn">Agregar al carrito</button> */}
const renderCards=(array) =>{
    containerProducts.innerHTML='';
    array.map(item=>{
        containerProducts.innerHTML += newCard(item)
    })
}
const handleDetailCard = (id) => {
    window.location=`../pages/detail.html?idproducto=${id}`;
}
const addClickDetailCard=() => {
    const cards = document.querySelectorAll('.card')
    console.log(cards);
    cards.forEach((card) => card.addEventListener('click',(evento) => {
        handleDetailCard(evento.target.id)
    }
))
}
// const handleDetailCard=(id) =>{
//     window.location=`../pages/detail.html?idproducto=${id}`;
// }
// const addClickDetailCard=() =>{
//     const cards= document.querySelectorAll('.card')
//     console.log(cards)
//     cards.forEach((card)=>card.addEventListener('click',(evento)=>{
//         handleDetailCard( evento.target.id)
//     }))
// }
const getAll =async () =>{
    try {
        const response= await fetch('http://localhost:5008/api/productos')
        if(response.status !== 200) throw new Error('Error en la solicitud ')
        const data= await response.json()
        renderCards(data)
    } 
    catch (error) {
        alert('Error: ' + error)
    }

}

document.addEventListener('DOMContentLoaded',async () => {
 await getAll()
  addClickDetailCard()
}
)