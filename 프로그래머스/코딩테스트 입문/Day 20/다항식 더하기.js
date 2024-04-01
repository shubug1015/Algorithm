function solution(polynomial) {
    const polynomialList =  polynomial.split(' + ');
    const xArray = polynomialList.filter((v) => v.includes('x')).map((v) => {
        const x = v.replace('x', '');
        if (x === '') {
            return '1';
        }
        return x;
    });
    const nArray = polynomialList.filter((v) => !v.includes('x'));

    const x = xArray.reduce((acc, cur) => {
        acc += Number(cur);
        return acc;
    }, 0);
    const n = nArray.reduce((acc, cur) => {
        acc += Number(cur);
        return acc;
    }, 0);
    
    if (x === 0) {
        return `${n}`;
    }
    if (n === 0) {
        return `${x === 1 ? '' : x}x`;
    }
    return `${x === 1 ? '' : x}x + ${n}`;
}