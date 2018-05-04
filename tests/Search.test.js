import React from 'react';
import { shallow, mount } from 'enzyme'
import Search from '../client/src/components/Search/Search.js'


describe("Search", function() {
	it('Should return error for non numeric input', () => {
		expect(Search.validateQuantity(2)).to.equal('error')
	})
})
