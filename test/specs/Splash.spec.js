import { shallowMount } from '@vue/test-utils'
import Splash from '@/components/Home/Splash'

describe('Splash.vue', () => {
  it('does a thing', () => {
    const wrapper = shallowMount(Splash, {})
    console.log(wrapper)
  })
})
