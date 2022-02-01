import {Singleton} from './singleton'

it('singleton success', () => {
   
    const clientCode = () => {
        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();
    
        if (s1 === s2) {
            return 'Singleton works, both variables contain the same instance.';
        } else {
            return 'Singleton failed, variables contain different instances.';
        }
    }
    
    const result = clientCode();

    console.log(result)
    expect(result).toEqual("Singleton works, both variables contain the same instance.")
})