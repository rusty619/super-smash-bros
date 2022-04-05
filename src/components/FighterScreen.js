const FighterScreen = ({ isVisible, setVisible, selectCharacter}) => {
    return(
        <div onClick={() => { setVisible(false) }} className='fighter-screen' style={{ display: isVisible ? "block" : "none"}}>
            <h2>{selectCharacter.name}</h2>
            <img width="100" height="100" src={`https://www.smashbros.com/assets_v2/img/fighter/${selectCharacter.name.toLowerCase()}/main.png`} alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestias quibusdam culpa provident magni. Numquam similique, deserunt voluptates illo, sunt vel delectus doloremque quae reprehenderit voluptas dolorum harum perspiciatis assumenda.
            </p>
        </div>
    )
}

export default FighterScreen;