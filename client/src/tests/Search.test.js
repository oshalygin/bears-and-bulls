import React from 'react'
import { shallow, mount } from 'enzyme'
import Search from '../client/src/components/Search/Search.js'


describe("Search", function() {
	it('Should return error for non numeric input', () => {
		const wrapper = shallow(<Search.WrappedComponent />)
		const actual = wrapper.find('<div>').length
		expect(actual).to.equal('error')
	})
})
