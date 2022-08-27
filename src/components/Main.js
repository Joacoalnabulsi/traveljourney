export default function Main(props){
    return(<div className="all">
        
        <div className="image-container"><img src={props.imageUrl} className="place-image"/> </div>
        <div className="info">
        <div className="location">{props.location}  <a href={props.googleMapsUrl} className='view'>View on Google</a></div>
        <div  className="titles">{props.title}</div>
        <div className="date">{props.startDate} - {props.endDate}</div>
        <div className="description">{props.description}</div>
        </div>
    </div>
    )
};