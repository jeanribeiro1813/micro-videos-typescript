import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo'

export type CategoryProperties =  {
    name:string;
    description?:string,
    active?:boolean, 
    created_at?:Date
}

export class Category{
    public readonly id:UniqueEntityId
    constructor(readonly props: CategoryProperties, id?:UniqueEntityId){
        this.id = id || new UniqueEntityId()
        this.description = this.props.description;
        this.props.active = this.props.active ?? true;
        this.props.created_at = this.props.created_at ?? new Date();
    }

    get name():string{
        return this.props.name
    }

    get description():string {
        return this.props.description;
    }


    private set description( value:string){
        this.props.description =  value ?? null
     }


     get active():boolean{
        return this.props.active 
    }
    
    private set active( value:boolean){
        this.props.active =  value ?? true
     }   

    get created_at():Date | undefined{
        return this.props.created_at
    }

    
}

