import faker from 'faker'
import React from 'react'

import FormDropdown from 'src/collections/Form/FormDropdown'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

describe('FormDropdown', () => {
  common.isConformant(FormDropdown, { ignoredTypingsProps: ['error'] })

  it('renders a FormField with a Dropdown control', () => {
    shallow(<FormDropdown />)
      .find('FormField')
      .should.have.prop('control', Dropdown)
  })

  describe('id', () => {
    it('adds id to label', () => {
      const id = faker.hacker.noun()
      const wrapper = mount(<FormDropdown id={id} label='boo' />)
      const label = wrapper.find('label')

      label.should.have.prop('id', `${id}-label`)
      label.should.not.have.prop('for')
    })
  })
})
