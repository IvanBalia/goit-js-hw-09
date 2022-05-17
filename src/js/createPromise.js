export function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
        if (shouldResolve) {
            resolve({ position, delay })
        } else {
            reject({ position, delay })
        }
    });
    return promise;
}