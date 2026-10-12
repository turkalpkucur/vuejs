const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        artir() {
            this.counter += 1;
        },
        azalt() {
            this.counter -= 1;
        }
    }
});

app.mount('#frontend');