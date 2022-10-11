
export default {
  name: 'user-otp',
  components: {},
  props: [],
  data () {
    return {
        otp: '',
        errorMsg: 'Incorrect code please try again',
        showError: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    validateOTP(otp) {
        if(otp === '0000') {
            this.$router.push({ path: '/account/user-account' });
        } else {
            this.showError = true;
        } 
    }
  }
}


