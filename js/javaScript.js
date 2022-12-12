//creation new instance of VUE
const {createApp} = Vue;

createApp({
    data(){
        return{
            salutation : 'Hello world I\'m VUE'
        }
    }
}).mount('#app')