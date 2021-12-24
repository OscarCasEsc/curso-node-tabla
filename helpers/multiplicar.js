const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base = 5, listar, hasta) => {
    try {0
        let salida='';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log(colors.green("==============="));
            console.log('  Tabla del'.blue, base);
            console.log(colors.green("==============="));
            console.log(consola);
        }


        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}