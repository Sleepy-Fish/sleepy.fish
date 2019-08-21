import { shallowMount } from '@vue/test-utils'
import Splash from '@/components/Splash.vue'

describe('Splash.vue', () => {
  it('does a thing', () => {
    const wrapper = shallowMount(Splash, {})
    console.log(wrapper)
  })
})
