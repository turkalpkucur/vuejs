const app = Vue.createApp(
    {
        data() {
            return {
                firstGoal: 'Html',
                secondGoal: 'Css',
                website: 'https://www.turkalp.blog'
            }
        },
        methods: {
            ourGoal(){
                const randomNumber = Math.random();
                if(randomNumber < 0.4){
                    return this.firstGoal;
                }else{
                    return this.secondGoal;
                }
            },
        }
    }
);

app.mount('#frontend');