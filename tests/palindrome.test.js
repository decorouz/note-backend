const { palindrome } = require('../util/for_testing')

describe('palindrome', () => {
  test('of a', () => {
    expect(palindrome('a')).toBe('a')
  })

  test('of react', () => {
    expect(palindrome('react')).toBe('tcaer')
  })

  test('of releveler', () => {
    expect(palindrome('releveler')).toBe('releveler')
  })
})
