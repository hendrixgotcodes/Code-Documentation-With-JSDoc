const {add, subtract, divide, multiply} = require('./calculator')

/**
 * @file index.js is the root file for this example app
 * @author Samuel Opoku Asare
 * @see <a href="https://hendrixthedev.web.app/">Samuel O. Asare</a>
 */

/**
 * Customer Name
 * @type {string}
 */
const customerName = "Adwoa Mansa"

/**
 * Array of cash
 * @type {Array<number>}
 */
const cashHistory = [98, 54, 23]


/**
 * @type {{id:number, text: string}}
 */
const todo = {
    id:1,
    test: "Some text"
}

/**
 * Calcaulate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total tax
 */
const calculateTax = (amount, tax)=>{
    return `${amount + tax*amount}`
}


/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student Name
 * @property {number|string} [age] - Student Age (optional)
 * @property {boolean} [isActive - Student is active
 */

/**
 * @type {Student}
 */

const student = {
    id:1,
    name: 'Kwaku Boateng',
    age: 24,
    isActive: true
}


/**
 * Class to create person object
 */
class Person{
    /**
     * 
     * @param {Object} personInfo - Information about the person
     */
    constructor(personInfo){
        /**
         * @property {string} name - Person's name
         */
        this.name = personInfo.name

        /**
         * @property {string|number} age - Person's age
         */
        this.age = personInfo.age

    }

    /**
     * @property {function} greet - A greeting with name and age
     * @returns {void}
     */
    greet(){
        console.log(`Hello. My name is ${this.name} and I am ${this.age}`);
    }
}

/**
 * New Person.
 * See {@link Person}
 */
const newPerson = new Person({
    name: "Kwaku Asante",
    age: 30
})


/**
 * 
 * @returns {component}
 */
const functionComponent = ()=>{
    return(
        <div></div>
    )
}