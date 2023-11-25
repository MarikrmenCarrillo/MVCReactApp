const Tarjeta = (props) => {
    return (
        <div className="card text-center bg-dark mt-5 ">
            <div className="card-body">
                <h1 className="card-title text-info">{ props.titulo || "Título de la tarjeta"}</h1>
                <p className="card-text text-light">{props.descripcion || "Descripción de la tarjeta"}</p>
            </div>
        </div>
    )
}

export default Tarjeta