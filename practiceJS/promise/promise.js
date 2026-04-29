const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 10000);
});


try {
    console.log('Resolving the promise...');
    const message = await promise;
    console.log(message);
} catch (error) {
    console.error(error);
}