import { useState } from "react";
import "./App.css";
import { useForm } from 'react-hook-form';

export default function App() {
    const [values, setValues] = useState({
        email: '', address: '', phone: '', isRead: false,
    });
    // const [errors, setErrors] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    /// add function when value change
    const handleChange = (event) => {

        if (event.target.name === 'isRead') {
            setValues({
                ...values,
                [event.target.name]: !values.isRead,
            });
        } else {
            setValues({ ...values, [event.target.name]: event.target.value });
        }

    };


    console.log('errors', errors);


    return (
        <div className="container">
            <h1>Khai báo y tế</h1>
            {/* {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))} */}
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                {/* Email */}
                <div className="Email">
                    <p>Nhập Email:</p>
                    <input
                        {...register('email', {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })}
                    />
                    {errors?.email && <p> {errors?.email?.message}</p>}
                </div>

                {/* Địa chỉ */}
                <div className="Address">
                    <p>Nhập Address:</p>
                    <input
                        {...register('address', {
                            required: "Required",
                        })}
                    />
                    {errors?.address && <p> {errors?.address?.message}</p>}
                </div>

                {/* Số điện thoại */}
                <div className="PhoneNumber">
                    <p>Nhập phone number:</p>
                    <input
                        {...register('Phone', {
                            required: "Required",
                            pattern: {
                                value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                                message: "invalid Phone number"
                            }
                        })}
                    />
                    {errors?.phone && <p> {errors?.phone.message}</p>}
                </div>

                {/* Triệu chứng */}
                <div className="symptoms">
                    <p>Triệu chứng:</p>
                    <input {...register('isRead', { required: "Required", })} type="checkbox" value={"Đau đầu"}/>Đau đầu<br />
                    <input {...register('isRead', { required: "Required", })} type="checkbox" value={"Khó ngủ"}/>Khó ngủ<br />
                    <input {...register('isRead', { required: "Required", })} type="checkbox" value={"sốt cao"}/>Sốt cao<br />

                </div>

                <div className="Submit">
                    <button>Submit</button>
                </div>

            </form >
        </div >
    );
}
