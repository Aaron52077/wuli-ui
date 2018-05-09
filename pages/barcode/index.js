import { Barcode } from '../../components/index';

Page(Object.assign({}, Barcode, {
	data: {
        value: ''
	},
	onLoad() {
		new Barcode('barcode', '9787115335500')
	},
	bindinput(e) {
		const value = e.detail.value

		if (value.length > 13) return {
			value: value.substr(0, 13), 
		}

		this.setData({
			value,
		})

		new Barcode('barcode', value)
	},
}));