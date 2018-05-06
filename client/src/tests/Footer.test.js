import React from 'react'
import { shallow, mount } from 'enzyme'
import Footer from '../client/src/components/Footer/Footer.js'

describe('Footer', () => {
	test('Render Brand', () => {
		const wrapper = shallow(<h5 class='navbar-brand'>Bearns and Bulls</h5>)
		expect(wrapper).toMatchSnapshot()
	})
})

