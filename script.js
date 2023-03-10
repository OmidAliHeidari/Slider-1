var cars = [
    {
        model: "BMW M4",
        image: 'IMG/bmw.jpg'
    },
    {
        model: "Audi A6",
        image: 'IMG/audi.jpg'
    },
    {
        model: "Volvo XC90",
        image: 'IMG/volvo.jpg'
    },
    {
        model: "Range Rover Sport",
        image: 'IMG/land.jpg'
    }
]

var index=0;
var slaytCount=cars.length;
slide(index);
// right - left
document.querySelector('.fa-chevron-left').addEventListener('click',function(){
        index--;
        slide(index);
})
document.querySelector('.fa-chevron-right').addEventListener('click',function(){
        index++;
        slide(index);
})
function slide(i){
    index = i;
    if(i<0){
        index = slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }
    document.querySelector('.img').setAttribute('src',cars[index].image);
    document.querySelector('.text').textContent=cars[index].model;
}
