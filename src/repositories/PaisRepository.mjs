import Pais from '../models/Pais.mjs';
import IRepository from './IRepository.mjs';

class PaisRepository extends IRepository {
    async guardarPaises(paises) {
        return await Pais.insertMany(paises);
    }
    async obtenerTodos() {
        return await Pais.find({});
    }
    async eliminarPais(id) {
        return await Pais.findByIdAndDelete(id);
    }
    async obtenerPorId(id) {
        return await Pais.findById(id);
    }
    async actualizarPais(id, datosActualizados) {
        return await Pais.findByIdAndUpdate(id, datosActualizados, { new: true });
    }
    async crearPais(datos) {
        const nuevoPais = new Pais(datos);
        return await nuevoPais.save();
    }

    
}


export default new PaisRepository();
