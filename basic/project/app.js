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
    async getUser(){
      const res  = await fetch('https://randomuser.me/api')
      const{results} = await res.json()
      console.log(results);
      this.firstName = 'Danie'
      this.lastName ='Menie'
      this.email = 'nobdydane01@gmail.com'
      this.gender = 'female'
      this.picture = 'https://randomuser.me/api/portraits/women/3.jpg'
    },
  }
})
app.mount('#app')