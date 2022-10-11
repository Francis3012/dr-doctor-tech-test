import IconName from '../icons/IconName.vue'
import IconDate from '../icons/IconDate.vue'
import IconPostCode from '../icons/IconPostCode.vue'

export default {
    name: 'user-input',
    components: {
        IconName,
        IconDate,
        IconPostCode
    },
    props: [],
    data () {
        return {
            lastName: '',
            dateOfBirth: '',
            postCode: '',
            showError: false
        }
    },
    computed: {
      
    },
    mounted () {
        
    },
    methods: {
        goTo() {
            this.$router.push({ path: 'account/selection' });
        }
    }
}


