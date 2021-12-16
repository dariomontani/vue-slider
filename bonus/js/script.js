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
            }
        }
    }
);