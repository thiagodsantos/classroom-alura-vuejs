export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    };

    async lista() {
        try {
            let fotos = await this._resource.query();
            return await fotos.json();
        } catch (error) {
            throw error;
        }
    };

    async cadastra(foto) {
        try {
            return this._resource.save(foto);
        } catch (error) {
            throw error;
        }
    };

    async apaga(id) {
        try {
            await this._resource.delete({ id });
        } catch (error) {
            throw error;
        }
    };
}