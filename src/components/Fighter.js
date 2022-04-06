

export default ({name, color, setVisible, setSelectCharacter}) => {
    return(
        <div 
            onClick = {() => { 
                setSelectCharacter({name: name, color: color})
                setVisible(true)}
            }
            className="fighter" 
            style={{ 
            backgroundColor: color, 
            backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${name.toLowerCase()}/main.png)`
            }}>
            <h4>{name.replace('_', ' ')}</h4>
        </div>
    )
}

