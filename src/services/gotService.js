export default class GotService {
    _apiBase = 'https://www.anapioficeandfire.com/api/'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, status ${res.status}`)
        }

        return res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`characters?page=5`)
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`characters/${id}`)
        return this._transformCharacter(res)
    }

    getAllBooks = async () => {
        const res = await this.getResource(`books`)
        return res.map(this._transformBook)
    }

    getBook = async (id) => {
        const res = await this.getResource(`books/${id}`)
        return this._transformBook(res)
    }

    getAllHouses = async () => {
        const res = await this.getResource(`houses?page=5`)
        return res.map(this._transformHouse)
    }

    getHouse = async (id) => {
        const res = await this.getResource(`houses/${id}`)
        return this._transformHouse(res)
    }

    isSet = data => data ? data : 'not data :('

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    }
}