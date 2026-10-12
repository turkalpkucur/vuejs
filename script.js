const app = Vue.createApp(
    {
        data() {
            return {
                firstGoal: 'Html',
                website: 'https://www.turkalp.blog'
            }
        },
        methods: {
            ourGoal(){
                return 'Html'
            },
        }
    }
);

app.mount('#frontend');