console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
       tasks: [
            { text: 'comprare il pane', done: false },
            { text: 'studiare js', done: false },
            { text: 'comprare regalo compleanno', done: false },
            { text: 'andare alla posta', done: false }
        ]
    }

})