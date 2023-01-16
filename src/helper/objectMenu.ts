type menu = ''| 'todos' | 'cachorro' | 'gato' | 'peixe';

export function objectMenu(menuBehavior: menu){
    let objetoMenu = {
        todos: false,
        cachorro: false,
        gato: false,
        peixe: false
    }

    if(menuBehavior != ''){
        objetoMenu[menuBehavior] = true;
    }
    return objetoMenu;
}