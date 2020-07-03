import faker from 'faker'
import React from 'react'

import Select from 'src/addons/Select/Select'
import FormSelect from 'src/collections/Form/FormSelect'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  options: [],
}

describe('FormSelect', () => {
  common.isConformant(FormSelect, { requiredProps, ignoredTypingsProps: ['error'] })

  it('renders a FormField with a Select control', () => {
    shallow(<FormSelect {...requiredProps} />)
      .find('FormField')
      .should.have.prop('control', Select)
  })

  describe('id', () => {
    it('adds id to label', () => {
      const id = faker.hacker.noun()
      const wrapper = mount(<FormSelect {...requiredProps} id={id} label='boo' />)
      const label = wrapper.find('label')

      label.should.have.prop('id', `${id}-label`)
      label.should.not.have.prop('for')
    })
  })
})
