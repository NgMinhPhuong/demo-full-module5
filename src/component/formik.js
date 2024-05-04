import {Formik,Field, Form, ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
function FormIk(){
    const validation = {
        name: Yup.string().min(2, 'phải nhiều hơn 2 kí tự').max(5, 'phải it hơn 5 ký tự').required(),
        age: Yup.number().min(2, 'phải lớn hơn 2').max(5, 'phải bé hơn 5').required(),
    }
    return (
        <>
    <Formik 
    initialValues={{
        name:'ten',
        age:18,
        dtb:5
    }}
    validationSchema={Yup.object(validation)}
    onSubmit={(value) => {
        console.log(value);
    }}
    enableReinitialize={true}
    >
        <Form>
            name<Field name='name'></Field>
            <ErrorMessage name='name' component={'span'}></ErrorMessage>
            age<Field name='age'></Field>
            dtb<Field name='dtb'></Field>
            <button>Save</button>
        </Form>
    </Formik>
    </>
    )
}
export default FormIk