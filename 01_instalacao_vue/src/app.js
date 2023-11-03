const MyNameApp = {
    data() {
        return {
        name: '',
        age: '15',
        inputName: ''
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.inputName);
            this.name = this.inputName;
        }
    }
}
Vue.createApp(MyNameApp).mount('#app');