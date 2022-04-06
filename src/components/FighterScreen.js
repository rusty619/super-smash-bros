const FighterScreen = ({ isVisible, setVisible, selectCharacter}) => {
    return(
        <div onClick={() => { setVisible(false) }} className='fighter-screen' style={{ display: isVisible ? "block" : "none"}}>
            <span className="name-bg">{selectCharacter.name.replace('_', ' ')}</span>
            <h2 className="name-fg">{selectCharacter.name.replace('_', ' ')}</h2>
            <img className="char-portrait" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectCharacter.name.toLowerCase()}/main.png`} alt="" />
            {/*<p className="fighter-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias quibusdam culpa provident magni. Numquam similique, deserunt voluptates illo, sunt vel delectus doloremque quae reprehenderit voluptas dolorum harum perspiciatis assumenda.
            </p>*/}
        </div>
    )
}

export default FighterScreen;