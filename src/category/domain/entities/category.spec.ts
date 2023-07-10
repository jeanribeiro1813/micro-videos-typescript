import { Category,CategoryProperties } from './category';
import {omit}  from 'lodash'
import {validate as uuidValidate} from 'uuid'
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo'


describe("Category Tests", ()=>{
    //Triple A- Arrange , Act, Assert

    // test("Construtor of Category", ()=>{

    //     //ACT

    //     const  created_ate =  new Date
    //     let category = new Category( {

    //         name:"Movie",
    //         description:"description", 
    //         active:true, 
    //         created_at: created_ate
    //     }
    //     );

    //     //Assert
    //     // expect(category.name).toBe("Movie")
    //     expect(category.description).toBe('description')
    //     // expect(category.active).toBeTruthy()
    //     // expect(category.created_at).toBe(props.created_at)

    //     // expect(category.props).toMatchObject({

    //     //     name:"Movie",
    //     //     description:"description", 
    //     //     active:true, 
    //     //     created_at: created_ate
    //     // }
    //     // )


    // })

    test("id field",()=>{

        type CategoryData = { props : CategoryProperties, id?: UniqueEntityId}

        const data : CategoryData[] = [
            {props: {name: "MOVIE"} },
            {props: {name: "MOVIE"} , id: null},
            {props: {name: "MOVIE"}, id: undefined },
            {props: {name: "MOVIE"}, id: new UniqueEntityId() },
        ];

        data.forEach(i =>{

            const category = new Category( i.props, i.id as any)
        
            expect(category.id).not.toBeNull();
            expect(category.id).toBeInstanceOf(UniqueEntityId);
            expect(uuidValidate(null)).toBeFalsy();
    
            expect(uuidValidate("102d9e39-aedf-4fe4-a9c9-726a00e11779")).toBeTruthy();
        })
    



    })
    test("Construtor of Category", ()=>{


        let category = new Category({name:"Movie"})

        let props = omit(category.props, 'created_at')

        expect(props).toStrictEqual({
            name:"Movie",
            description:null, 
            active:true, 
        })

        expect(category.props.created_at).toBeInstanceOf(Date)

     
       

        category = new Category ({name:'Movie', description:'Some Description', active:false})
        
        let created_at = new Date()

        expect(category.props).toStrictEqual({
            name:"Movie",
            description:'Some Description', 
            active:false, 
            created_at: created_at
        })


        category = new Category ({name:'Movie', description:'Some Description'})

        expect(category.props).toMatchObject({
            name:"Movie",
            description:'Some Description', 
        })


        category = new Category ({name:'Movie', active:false})

        expect(category.props).toMatchObject({
            name:"Movie",
            active:false, 
        })


        category = new Category ({name:'Movie', created_at:created_at})

        expect(category.props).toMatchObject({
            name:"Movie",
            created_at:created_at, 
        })

    });

    test('getter of name field',() =>{
        const category =  new Category({name:"MOVIE"})

        expect(category.name).toBe("MOVIE")
    });

    test('getter and setter of description field',() =>{
        let category =  new Category({name:"MOVIE",description:'some description'})

        expect(category.description).toBe("some description")


        category =  new Category({name:"MOVIE"})

        expect(category.description).toBeNull()



        category =  new Category({name:"MOVIE"})

        //Por conta do setter ser privado , posso usar dessa forma para fazer o teste
        category["description"] = 'other description'

        expect(category.description).toBe("other description")


        category =  new Category({name:"MOVIE"})

        //Por conta do setter ser privado , posso usar dessa forma para fazer o teste
        category["description"] = undefined

        expect(category.description).toBeNull()


    })

    test('getter and setter of active field',() =>{

        let category =  new Category({name:"MOVIE",active:false})

        expect(category.active).toBeFalsy()


         category =  new Category({name:"MOVIE",active:true})

        expect(category.active).toBeTruthy()

        category =  new Category({name:"MOVIE"})

        expect(category.active).toBeTruthy()



    })  

    test('getter  of created_at field',() =>{

        let category =  new Category({name:"MOVIE"})

        expect(category.created_at).toBeInstanceOf(Date)

        let created_at = new Date()

        category =  new Category({name:"MOVIE",created_at:created_at})

        expect(category.created_at).toBe(created_at)

    })  
   
});

