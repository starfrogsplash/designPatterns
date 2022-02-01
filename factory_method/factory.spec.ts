import {ConcreteCreator1, ConcreteCreator2, clientCode} from './factory'

it('returns ConcreteCreator1', () => {
    console.log('App: Launched with the ConcreteCreator1.');
    const result = clientCode(new ConcreteCreator1());
    console.log(result)
    expect(result).toEqual("Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}")
})


xit('returns ConcreteCreator2', () => {
    console.log('App: Launched with the ConcreteCreator2.');
    const result = clientCode(new ConcreteCreator2());
    expect(result).toEqual("Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}")
})