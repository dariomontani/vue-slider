const app = new Vue(
    {
        el: '#app',
        data: {
            n: 0,

            images: [
                'image1.jpg',
                'image2.jpg',
                'image3.jpg',
                'image4.jpg'
            ]

        },

        methods: {
            next: function () {
                this.n += 1;
                if (this.n == this.images.length) {
                    this.n = 0;
                }
            },

            prev: function() {
                this.n -= 1;
                if (this.n < 0) {
                    this.n = this.images.length - 1;
                }
            },

            onePoint: function () {
                this.n = 0;

            },

            twoPoint: function () {
                this.n = 1;
            },

            threePoint: function () {
                this.n = 2;
            },

            fourPoint: function () {
                this.n = 3;
            },
        }
    }
);

// Bonus:
// 1 - al click su uno dei pallini mostrare l’immagine in posizione corrispondente
// 2 - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3 - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce