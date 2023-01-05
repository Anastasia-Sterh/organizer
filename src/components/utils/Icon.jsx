export default function Icon({ icon, color, animation, style, ...otherProps }) {

    let className = '';
    className += `fa-solid fa-${icon} `
    if (animation != undefined) {
        className += `animate__animated animate__${animation}`
    }

    if (style == undefined) {
        style = {}
    }

    if (color != undefined) {
        style.color = color;
    }

    return (<i className={className} style={style} {...otherProps}> </i>)
}

// let a = {
//     "color": color
// }