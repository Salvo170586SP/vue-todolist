/* 
MILESTONE 1
*Stampare all'interno di una lista, un item per ogni todo.
*Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
*Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
*Predisporre un campo di input testuale e un pulsante "aggiungi": 
*cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
*che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
*1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)

*/




console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        newTask: "",
        tasks: [
           /*  { text: 'comprare il pane', done: false },
            { text: 'studiare js', done: false },
            { text: 'comprare regalo compleanno', done: false },
            { text: 'andare alla posta', done: false } */
        ]
    },

    methods: {
        //*ELIMINO UN ELEMENTO SPECIFICO DALL'ARRAY
        deleteItem(index) {
            this.tasks.splice(index, 1)
        },

        //*AGGIUNGO UN NUOVO ELEMENTO IN LISTA
        addItemList(){
            //se la stringa non è vuota 
            if(this.newTask.trim() !== ''){
                //crea il nuovo oggetto
                const newObject = {   
                    text: this.newTask,
                    done: false,
                };
                //e aggiungo il nuovo elemento alla lista
                this.tasks.push(newObject);
                //svuoto la casella non appena l'elemento è aggiunto alla lista
                this.newTask = '';
            }
        },

        //*CLICCANDO SUL TESTO TOLGO O AGGIUNGO IL BARRATO SUL TESTO
        toggleItem(index){
            this.tasks[index].done = !this.tasks[index].done;
        }


    }
})