Vue.config.devtools = true;

new Vue (
    {
        el: '#app',
        data: {
            img: [
                'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg',
                'https://mcdn.wallpapersafari.com/medium/91/50/xwJ1rb.jpg',
                'https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'   
            ],
            counter: 0,
            interval: 5000,
            selectedCircle: false,
        },

        created() {
            this.timer(); 
        },

        methods: {

            colorSelect: function(index) {
                if (index === this.counter) {
                    return 'color';
                } else {
                    return '';
                }
            },

            nextPic: function() {
                this.intervalClear();
                this.counter++;
                if (this.counter === this.img.length) {
                    this.counter = 0;
                }
            },

            prevPic: function() {
                this.intervalClear();
                this.counter--;
                if (this.counter === -1) {
                    this.counter = this.img.length - 1;
                }
            },

            timer: function() {
                window.imgTimer = setInterval(() => {
                    this.counter++
                    if (this.counter === this.img.length) {
                        this.counter = 0;
                    }
                }, this.interval);
            },

            colorClick: function(index) {
                this.intervalClear();
                this.counter = index;
                this.colorSelect();
            },

            intervalClear: function() {
                clearInterval(window.imgTimer);
                this.timer();
            }

        },
    }
)