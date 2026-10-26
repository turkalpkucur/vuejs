const app=Vue.createApp({
data(){
    return {
        firstNumber: '',
        secondNumber: '',
        result: null
    };
},
watch:{

},
computed:{
},
methods:{
    addNumbers(){
        this.result = Number(this.firstNumber || 0) + Number(this.secondNumber || 0);
    }
}




});

app.mount("#frontend");