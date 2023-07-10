import { Category } from './category';

describe("Category Tests", ()=>{

    test("Construtor of Category", ()=>{

        const category = new Category('Movie');

        expect(category.name).toBe('Movie')

    })
});

