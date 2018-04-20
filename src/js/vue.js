import 'babel-polyfill'
import '../scss/vue.scss'
import Vue from 'vue/dist/vue.esm.js'
let vm = new Vue({
	el: '#app',
	data() {
		return {
			name: 'LFXxxxx',
		}
	},
})