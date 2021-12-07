new Vue({
    el: '#app',
    data: {
        films: [],
        success: false,
    },
    methods: {
        async getMovies() {
            const res = await fetch('JSONURL', {})
            /*
            JSON look liks :
            [
                {
                    "name": "Movie name",
                    "type": "Thriller",
                    "movie": "Link mp4 here",
                    "img": "imgur about your movies",
                    "description": "Description about your films"
                },

                {
                    "name": "Movie name",
                    "type": "Thriller",
                    "movie": "Link mp4 here",
                    "img": "imgur about your movies",
                    "description": "Description about your films"
                }
            ]
            etc...
           */
            this.films = await res.json();
        },

        refreshMovies() {
            window.location.reload();
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