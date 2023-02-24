// if...else

let temperature = 35;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature >= 37;

// if(temperature >= 37) {
//     console.log('Você está com febre!')
// } else {
//     console.log('Você não está com febre!')
// }

if(highTemperature) {
    console.log('Febre alta!');
} else if(mediumTemperature) {
    console.log('Febre moderada!');
} else {
    console.log('Saudável!');
}