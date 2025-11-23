
const conta = {
    email: 'julio@gmail.com',
    password: '123456',
    name: 'Julio',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1000)
})