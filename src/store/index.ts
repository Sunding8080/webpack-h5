import { atom, selector } from 'recoil'

export const info = atom({
  key: 'info',
  default: {
    name: 'sunding',
    age: 28,
  },
})

export const myAge = selector({
  key: 'myAge',
  get: ({ get }) => {
    const Info = get(info)
    return Info.age
  },
})

export const myName = selector({
  key: 'myName',
  get: async ({ get }) => {
    const name = await new Promise((resolve) => {
      const Info = get(info)
      setTimeout(() => {
        resolve(Info.name || '')
      }, 3000)
    })
    return name
  },
})
