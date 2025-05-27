import {Router} from "express";

const router = Router()

router.get('/users', (req, res)=>{
    res.send('obteniendo usuarios')
})

router.get('/users/:id', (req, res)=>{
    const {id} = res.params
    res.send('obteniendo usuario' + id)
})

router.post('/users', (req, res)=>{
    res.send('creando usuario')
})

router.delete('/users/:id', (req, res)=>{
    res.send('eliminando usuario')
})

router.get('/users', (req, res)=>{
    res.send('obteniendo usuarios')
})

export default router
