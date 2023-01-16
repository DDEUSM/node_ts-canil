import {Request, Response} from 'express';
import * as menu from '../helper/objectMenu';
import * as model from '../models/pet';


export const home = (req: Request, resp: Response) => {
    resp.render('pages/home', {
        menuObj: menu.objectMenu('todos'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg' 
        },
        pets: model.getFunctions.getAll()        
    })
}

export const cachorro = (req: Request, resp: Response) => {
    resp.render('pages/home', {
        menuObj: menu.objectMenu('cachorro'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        pets: model.getFunctions.getFromType('dog')
    });
}

export const gatos = (req: Request, resp: Response) => {
    resp.render('pages/home', {
        menuObj: menu.objectMenu('gato'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        pets: model.getFunctions.getFromType('cat')
    });
}

export const peixes = (req: Request, resp: Response) => {
    resp.render('pages/home', {
        menuObj: menu.objectMenu('peixe'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        pets: model.getFunctions.getFromType('fish')
    });
}

