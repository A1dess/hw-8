import {useFormik} from "formik";
import * as yup from 'yup'

export default function FormPage () {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            username: "",
            website: ""
        },
        onSubmit: (values) => {
            fetch('https://jsonplaceholder.typicode.com/users', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(values)
            }).then(response => response.status)
        },
        validationSchema: yup.object().shape({
            name: yup.string().required("обязательное поле")
        })
    })
    return (
        <>
        <label>

            
        </label>
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />

                <input
                    type="text"
                    placeholder="website"
                    name="website"
                    onChange={formik.handleChange}
                    value={formik.values.website}
                />

                <button type="submit">add user</button>
            </form>

        </>
    )
}