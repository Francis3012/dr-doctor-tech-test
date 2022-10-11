
export default {
  name: 'user-selection',
  components: {},
  props: [],
  data () {
    return {
        selectedOption: '',
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    goTo(key) {
        this.$router.push({ path: key });
    }
  }
}


