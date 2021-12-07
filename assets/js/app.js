new Vue({
    el: '#app',
    data: {
        films: [],
        success: false,
    },
    methods: {
        async getMovies() {
            const res = await fetch('https://raw.githubusercontent.com/promise1337/promise1337/main/test.json', {})
            this.films = await res.json();
            console.log(this.films)
        }
    },
    created() {
        this.getMovies();
    },
    beforeMount() {
        this.getMovies()
    },
});

var filter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);