import InvalidUuidError from "./errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"
import { validate as uuidValidate } from "uuid"

function spyValidationMethod(){
    return jest.spyOn(UniqueEntityId.prototype as any, 'validate')
}
describe("UniqueEntity Unit Test",() =>{

    it('Should Throw error when uuid is invalid',()=>{
        const validateSpy = spyValidationMethod()

        expect(()=> new UniqueEntityId('fake id')).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalled()
    })

    it("Should accept a uuid passed in constructor",()=>{
        const validateSpy = spyValidationMethod()
        const uuid = '102d9e39-aedf-4fe4-a9c9-726a00e11779'
        const vo = new UniqueEntityId(uuid)
        expect(vo.id).toBe(uuid)
        expect(validateSpy).toHaveBeenCalled()

    })

    
    it("Should accept a uuid passed in constructor",()=>{
        const validateSpy = spyValidationMethod()
        const vo = new UniqueEntityId()
        expect(uuidValidate(vo.id)).toBeTruthy()
        expect(validateSpy).toHaveBeenCalled()

    })
})