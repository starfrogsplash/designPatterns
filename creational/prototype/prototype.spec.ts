import { ComponentWithBackReference, Prototype } from './prototype'

xit('prototype', () => {

    const clientCode = () => {
        const p1 = new Prototype();
        p1.primitive = 245;
        p1.component = new Date();
        p1.circularReference = new ComponentWithBackReference(p1);
    
        const strings = []
    
        const p2 = p1.clone();
        if (p1.primitive === p2.primitive) {
            strings.push('Primitive field values have been carried over to a clone. Yay!');
        } else {
            strings.push('Primitive field values have not been copied. Booo!');
        }
        if (p1.component === p2.component) {
            strings.push('Simple component has not been cloned. Booo!');
        } else {
            strings.push('Simple component has been cloned. Yay!');
        }
    
        if (p1.circularReference === p2.circularReference) {
            strings.push('Component with back reference has not been cloned. Booo!');
        } else {
            strings.push('Component with back reference has been cloned. Yay!');
        }
    
        if (p1.circularReference.prototype === p2.circularReference.prototype) {
            strings.push('Component with back reference is linked to original object. Booo!');
        } else {
            strings.push('Component with back reference is linked to the clone. Yay!');
        }
    
        return strings
    }



    const result = clientCode();
    console.log(result)

    const res = ["Primitive field values have been carried over to a clone. Yay!", "Simple component has been cloned. Yay!", "Component with back reference has been cloned. Yay!", "Component with back reference is linked to the clone. Yay!"]
    expect(result).toEqual(res)
})

