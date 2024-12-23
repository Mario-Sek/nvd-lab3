const app = Vue.createApp({
    data() {
        return {
            password: '',
        };
    },
    computed: {
        has_uppercase() {
            return this.password.split('').some(char => char >= 'A' && char <= 'Z');
        },
        has_lowercase() {
            return this.password.split('').some(char => char >= 'a' && char <= 'z');
        },
        has_number() {
            return this.password.split('').some(char => char >= '0' && char <= '9');
        },
        has_special() {
            const specialCharacters = '!@#$%^&*(),.?":{}|<>';
            return this.password.split('').some(char => specialCharacters.includes(char));
        },
    },
    methods: {
        updatePassword(event) {
            this.password = event.target.value;
        },
    },
});

app.mount('#app');
