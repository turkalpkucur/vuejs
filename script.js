const app = Vue.createApp({
    data() {
        return {
            result: 0,
        };
    },
    methods: {
        topla() {
             this.result= Math.sum(this.a, this.b);
        } 
    }
});

app.mount('#frontend');