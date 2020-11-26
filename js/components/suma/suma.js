function sum(skaiciuSarasas) {
    let suma = 0;
    const sarasoIlgis = skaiciuSarasas.length;
    for (let i=0; i<sarasoIlgis; i++)
        suma += skaiciuSarasas[i];
        return suma;
}

export { sum }