const images = document.querySelectorAll('.image-gallery'); 

images.forEach(function(image){
    image.addEventListener('mouseover', ()=>{
        removeLargeCLassName()
        
        image.classList.add('large')
    })
})
function removeLargeCLassName(){
    images.forEach(image =>{
        image.classList.remove('large')
    })
    
}
