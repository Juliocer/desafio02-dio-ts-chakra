
const conta = {
    email: 'julio@gmail.com',
    password: '123456',
    name: 'Julio'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 500)
})