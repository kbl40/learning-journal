import {defineConfig} from 'vite'

const { resolve } = require('path')

module.exports = {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'about/index.html'),
				post: resolve(__dirname, 'post/index.html')
			}
		}
	}
}

export default defineConfig({
	plugins: []	
})