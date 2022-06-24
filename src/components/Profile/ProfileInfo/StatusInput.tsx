
export const StatusInput = (props: any) => {
    const {meta, input, ...rest} = props
    return <div style={{height: '30px'}}>
        <input {...input} {...rest} style={{height:'80%', borderColor:'#1976d2', borderRadius:'5px',outline: 'none'}}/>
    </div>
}