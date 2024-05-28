function fruitprocessor(apples,oranges){    //  setting parameters
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const naturaljuice=fruitprocessor(5,3);  // variable assign and passing arguements
console.log(naturaljuice);    // locking the value