const app = Vue.createApp({
    data() {
        return {
            password: '',
        };
    },
    computed: {
        has_uppercase() {
            return /[A-Z]/.test(this.password);
        },
        has_lowercase() {
            return /[a-z]/.test(this.password);
        },
        has_number() {
            return /[0-9]/.test(this.password);
        },
        has_special() {
            return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
        },
    },
    methods: {
        updatePassword(event) {
            this.password = event.target.value;
        },
    },
});

app.mount('#app');
