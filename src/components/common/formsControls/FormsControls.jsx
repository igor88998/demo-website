import classes from './FormsControls.module.css'

const FormControl = ({ input, meta: { touched, error, warning }, ...props }) => {
    return (
        <div className={classes.formControl + " " + (error && touched ? classes.error : '')}>
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            <div>
                {props.children}
            </div>
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
