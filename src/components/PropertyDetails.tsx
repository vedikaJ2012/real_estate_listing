import {useParams} from "react-router-dom";
type propDet={
    total:string,
    availble:string,
    area:string,
    price:number,
    
}


type Property ={
    title:String,
    Developer:string,
    Address:string,
    Tags :Array<string>,
    image:Array<string>,
    videpPresentation:string,
    locality:string,
    projectAt:string,
    constructionStage:string,
    propDet:propDet[],
  }

const PropertyDetails = () => {
    
    const {id} = useParams();

    return (
        <div>{id}</div>
    )
}

export default PropertyDetails