export default ({name, color}) => {
    return(
        <div className="fighter" style={{background: color}}>
            <h4>{name}</h4>
        </div>
    )
}