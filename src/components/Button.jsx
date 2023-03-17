import classNames from "classnames"

export function Button({ children, className, style, onClick }) {

    const classes = classNames({
        'btn-primary': style === 'primary',
        'btn-outline': style === 'outline',
        'btn-text': style === 'text'
    });

    return (
        <button className={(typeof className !== 'undefined' ? className : '') + ' btn ' + classes} onClick={onClick}>
            {children}
        </button>
    )
}