import {Request, Response} from 'express';
import { title } from 'process';
import * as menu from '../helper/objectMenu';
import * as model from '../models/pet';

export const search = (req: Request, resp: Response) => {
    let query = req.query.q as string;
    let title: string;
    let pets = model.getFunctions.getFromInputUser(query);
    if(pets.length < 1){
        title = `Não há nenhum animal desta raça "${query}" disponível para adoção`;
    } else {
        title = `Todos os resultados da pesquisa por "${query}"`;
    }
    resp.render('pages/home', {
        menuObj: menu.objectMenu(''),        
        searchTitle: {
            title 
        },        
        pets
    })
}