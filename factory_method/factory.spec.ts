import {ConcreteCreator1, ConcreteCreator2, clientCode} from './factory'

it('returns ConcreteCreator1', () => {

    console.log('App: Launched with the ConcreteCreator1.');
    const result = clientCode(new ConcreteCreator1());

    expect(result).toEqual('')
})