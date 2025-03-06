import {useParams} from "react-router-dom";
export type PropertyDetails={
    total:number,
    availble:number,
    area:number,
    price:number,
}


export type Property ={
    id:number,
    title:string,
    developer:string,
    address:string,
    tags :string[],
    image:string[],
    videpPresentation:string,
    locality:string,
    projectAt:string,
    constructionStage:string,
    propertyDetails:PropertyDetails[],
    ammenties:string[],
}

const PropertyDetails = () => {
    
    const {id} = useParams();

    return (
        <div>{id}</div>
    )
}

export default PropertyDetails