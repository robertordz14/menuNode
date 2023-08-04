// const Tarea = require("./tarea");
// require('colors');


// class Tareas {
//     _listado = {};



//     get listadoArr(){
//         const listado = [];
//         Object.keys(this._listado).forEach( key => {
//             // console.log(key);
//             const tarea = this._listado[key];
//             listado.push(tarea)
//         });
//         return listado;
//     }

//     constructor(){
//         this._listado = {};

//     }

//     borrarTarea (id){
//         if (this._listado[id]) {
//             delete this._listado[id];
//         }
//     }

//     cargarTareasFromArray(tareas = []) {
//         tareas.forEach(tarea => {
//             this._listado[tarea.id]=tarea;
//         })
//     }

//     crearTarea(desc = ''){
//         const tarea = new Tarea(desc);
//         this._listado[tarea.id] = tarea;
        
//     }


//     listadoCompleto() {
//         // for (let i = 0; i < this.listadoArr.length; i++) {
//         //     let descripcion = this.listadoArr[i].desc;
//         //     let tareaFull = this.listadoArr[i].completadoEn;
//         //     const estado = tareaFull !== null ? 'Completada'.green : 'Pendiente'.red
//         //     console.log(`${i+1}.- ${descripcion} :: ${estado}`);
//         // }

//         this.listadoArr.forEach((tarea, i) => {
//             const idx = `${i+1}`.green;
//             const {desc, completadoEn} = tarea;
//             const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
//             console.log(`${idx} ${desc} :: ${estado}`);
//         })
//     }

//     listarPendientesCompletadas( ) {
//         this.listadoArr.forEach((tarea, i) => {
//             if (this.listadoArr[i].completadoEn !== null) {
//                 const idx = `${i+1}`.green;
//                 const {desc, completadoEn} = tarea;
//                 const estado = (completadoEn) ? completadoEn : 'Pendiente'.red;
//                 console.log(`${idx} ${desc} :: ${estado}`);
//             } 
//         })
//     }


//     listarPendientes( ) {
//         this.listadoArr.forEach((tarea, i) => {
//             if (this.listadoArr[i].completadoEn == null) {
//                 const idx = `${i+1}`.green;
//                 const {desc, completadoEn} = tarea;
//                 const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
//                 console.log(`${idx} ${desc} :: ${estado}`);
//             } 
//         })
//     }
// }

// module.exports = Tareas;


const Tarea = require('./tarea');

/**
 *  _listado:
 *      {  'uuid-123712-123123-2: { id:12, desc:asd,completadoeEN:92231 }  },
 */

class Tareas {

    _listado = {
        'abc': 123
    };


    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }


    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }


    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        
        console.log();
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);

        });         
    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }

        });

        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });


    }

}



module.exports = Tareas;
