import * as PropTypes from "prop-types";

Picture.propTypes = {
    picture: PropTypes.shape({
        id: PropTypes.number,
        credit: PropTypes.string,
        author: PropTypes.string,
        name: PropTypes.string
    })
}


export function PicturesPage(props) {
    const {pictures} = props;
    if (!pictures) return;
    return (
        <>
            <header>PicturesPage</header>
            <div style={{}}>
                {pictures.map(p => <Picture key={p.name} picture={p}/>)}
            </div>
        </>
    );

}

export function Picture(props) {
    const {picture} = props;

    return <>
        <img src={`images/${picture.name}`} alt={picture.name} width="50%"/>;
        <p>Made by <a href={picture.credit}>{picture.author}</a></p>
        </>
}


