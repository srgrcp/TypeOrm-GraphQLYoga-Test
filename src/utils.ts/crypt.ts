import * as Argon2 from 'argon2'

export class Crypt {
    static Hash = async (data: string) => {
        return await Argon2.hash(data)
    }

    static Verify = async (hash: string, data: string) => {
        return await Argon2.verify(hash, data)
    }
}
