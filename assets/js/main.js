function geral() {
    const form = document.querySelector('#form');
    const result = document.querySelector('#resultado');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        
            const nOrig = form.querySelector('#n').value;
            const pOrig = form.querySelector('#p').value;
            const kOrig = form.querySelector('#k').value;
            const n = Number((nOrig / 10) * 3).toFixed(1);
            console.log(`N: ${nOrig} / 10 * 3 = ${n}`);
            const p = Number((pOrig / 10) * 3).toFixed(1);
            console.log(`P: ${pOrig} / 10 * 3 = ${p}`);
            const k = Number((kOrig / 10) * 3).toFixed(1);
            console.log(`K: ${kOrig} / 10 * 3 = ${k}`);
            const k2O = Number((kOrig / k) * 100).toFixed(0);
            console.log(`K2O = ${kOrig} / ${k} * 100: Resultado -  ${k2O}kg/ha`);
            const p205 = Number((k2O * p) / 100).toFixed(0);
            console.log(`K2O = ${pOrig} * ${p} / 100: Resultado -  ${p205}kg/ha`);
            resultado(k2O, p205, nOrig, pOrig, kOrig);
                                
    })

   
    function resultado(k2O, p205, nOrig, pOrig, kOrig){
        result.innerHTML += `<h3 style="text-align: center;">Com os valores de N: ${nOrig}, P: ${pOrig} e K: ${kOrig}, aplique:</h3>`
        result.innerHTML += `<h4 style="text-align: center;">K2O: ${k2O}Kg/ha</h4>`
        result.innerHTML += `<h4 style="text-align: center;">P205: ${p205}Kg/ha</h4>`
    }
}

geral();





