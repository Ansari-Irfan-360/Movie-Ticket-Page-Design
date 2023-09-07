const Cards = (props) => {
    return (
        <div className="Cards SearchPageCards">
            <img id="photo" src={props.link} alt="img" />
            <h5 id="title" >{props.title}</h5>
            <h5 id="description" >{props.desc}</h5>
            <img src={props.producer} alt="img" id="producer" />
            <h6 id="name" >{props.name}</h6>
        </div>
    );
}
 
export default Cards;



