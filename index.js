var app = new Vue ({
    el: '#app',
    data: {
        message: 'Приветики!'
    }
})

var app2 = new Vue ({
    el: '#app2',
    data: {
        message: 'Сегодня: ' + new Date().toLocaleDateString()
    }
})

var app3 = new Vue ({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue ({
    el: '#app4',
    data: {
        todos: [
            {text: 'v-for' },
            {text: 'изучить JS'},
            {text: 'изучить Vue'},
            {text: 'создать классное приложение'},
        ]
    }
})