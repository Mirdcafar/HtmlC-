export async function newBmw(src) {
    try {
        let result = await BmdAsync(src);
        Bmw();
    } catch (error) {
        console.error(error);
    }
}

export async function newMersedes(src) {
    try {
        let result = await MersedesAsync(src);
        Mersedes();
    } catch (error) {
        console.error(error);
    }
}

export function BmdAsync(src) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            
            script.onload = () => {
                console.log('Script loaded...');
                resolve(src);
            };
        
            script.onerror = () => {
                reject(new Error('Not found!'));
            };
        
            document.body.append(script);
        }, 3000);
    });
}

export function MersedesAsync(src) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;
            
            script.onload = () => {
                console.log('Script loaded...');
                resolve(src);
            };
        
            script.onerror = () => {
                reject(new Error('Not found!'));
            };
        
            document.body.append(script);
        }, 1000);
    });
}

async function main() {
    try {
        await newBmw('bmw.js');
        await newMersedes('mersedes.js');
    } catch (error) {
        console.error(error);
    }
}

main();
