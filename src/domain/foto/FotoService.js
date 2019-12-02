export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');
    };

    async lista() {
        try {
            let fotos = await this._resource.query();
            return await fotos.json();
        } catch (error) {
            throw new Error('Não foi possível obter as fotos');
        }
    };

    async cadastra(foto) {
        try {
            if (foto._id) {
                return this._resource.update({ id: foto._id }, foto);
            }
            return this._resource.save(foto);
        } catch (error) {
            throw new Error('Não foi possível salvar foto');
        }
    };

    async apaga(id) {
        try {
            await this._resource.delete({ id });
        } catch (error) {
            throw new Error('Não foi possível remover foto');
        }
    };

    async busca(id) {
        try {
            let foto = await this._resource.get({ id });
            return await foto.json();
        } catch (error) {
            throw new Error('Não foi possível obter foto');
        }
    };
}