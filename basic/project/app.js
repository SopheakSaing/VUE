const app = Vue.createApp({
  data(){
    return{
      firstName: 'Dano',
      lastName: 'NobDy',
      email: 'nobdydano01@gmail.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    }
  },
  methods:{
    getUser(){
    console.log(this.firstName)
    },
  }
})
app.mount('#app')