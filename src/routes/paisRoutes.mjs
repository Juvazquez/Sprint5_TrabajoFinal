import express from 'express';
import { validarPais } from "../validations/paisValidation.mjs";
import {
    obtenerDashboardPais,
    agregarPaisController,
    editarPaisController,
    eliminarPaisController,
    mostrarFormularioEditarController,
    mostrarFormularioAgregarController,
    obtenerPaisesJSON   
} from '../controllers/paisController.mjs';


const router = express.Router();

router.get("/verPaises", obtenerPaisesJSON);


//  Vista principal (dashboard con la lista)
router.get('/pais', obtenerDashboardPais); // Renderiza dashboard con los datos

router.get('/pais/agregar', mostrarFormularioAgregarController);
router.post('/pais/agregar', validarPais, agregarPaisController);


router.delete('/pais/:id', eliminarPaisController);

router.get('/pais/editar/:id', mostrarFormularioEditarController);
router.put('/pais/editar/:id', validarPais, editarPaisController);


export default router;
