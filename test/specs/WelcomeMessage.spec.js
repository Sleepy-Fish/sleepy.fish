import { shallowMount } from '@vue/test-utils'
import WelcomeMessage from '@/components/Home/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const wrapper = shallowMount(WelcomeMessage, {
      propsData: { name }
    })

    expect(wrapper.text()).toBe(`Hello! ${name} is under construction at the moment.`)
  })
})
