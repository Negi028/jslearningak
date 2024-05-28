function cutfruit(fruit){
    return fruit*4;
}
function fruitprocess(apples,oranges){
    const applepieces=cutfruit(apples);
    const orangepieces=cutfruit(oranges);
    const fruitchart= `apples pieces cutted into ${applepieces} pieces and oranges pieces cutted into ${orangepieces} pieces.`;
    return fruitchart;
}
console.log(fruitprocess(2,3));