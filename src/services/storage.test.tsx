import { createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false
}

describe('storage', () => {

    it('Deve retorna o objeto no localStoge com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStoge', () => {
        const mockSetItem = jest.spyOn(Storage.prototype, 'getItem')
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
})