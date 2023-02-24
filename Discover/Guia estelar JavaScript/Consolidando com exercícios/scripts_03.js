/*

    ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrecheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/ 

// transform('50F');
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // fluxo de erro

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    } 

    // fluxo alternativo, F -> C
    
    if(fahrenheitExists) {

        let updateDegree = degree.toUpperCase().replace("F", "");
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
        let degreeSign = 'C';

        return formula(updateDegree) + degreeSign;

    // fluxo alternateativo, C -> F

    } else if(celsiusExists) {

        let updateDegree = Number(degree.toUpperCase().replace("C", ""));
        let formula = (celsius) => celsius * 9/5 + 32;
        let degreeSign = 'F';

        return formula(updateDegree) + degreeSign;
        
    }

}

try {
    console.log(transformDegree('50F'));
    console.log(transformDegree('50C'));
} catch (error) {
    console.log(error.message);
}

