//creation new instance of VUE
const {createApp} = Vue;

createApp({
    data(){
        return{
            salutation : 'Hello world I\'m VUE',
            image : "https://unsplash.it/300/300?image=15"
        }
    }
}).mount('#app')