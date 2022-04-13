import DatePicker from "react-datepicker";
import {Controller, useForm} from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import ValidationMsg from "./ValidationMsg";
import generateId from "../helper/generateId";
import postData from "../helper/post";

export default function BookForm({price, lg}) {

    const [total, setTotal] = useState(price);
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    const {control, register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log({...data, additional, total, date, lg,
            currency: "EUR",
            payID: generateId(12),
            amount: "something"
        });
        postData({...data, additional, total, date, lg,
            currency: "EUR",
            payID: generateId(12),
            amount: "Tour in Cappadocia"
        }, 'bookings')
            .then(data => {
            console.log("from then");
            window.location.href = data.redirectLink.info.response.pg_redirect_url[0];
        });
    }

    const [startDate, setStartDate] = useState(nextDay);
    const [date, setDate] = useState(startDate);
    const [additional, setAdditional] = useState('');

    return <div className="mt-2 rounded-xl bg-blue-100 -mx-4 px-4">
        <hr/>
        <form className="flex flex-col gap-0.5 mt-2" onSubmit={handleSubmit(onSubmit)}>
            <label>Pick a date:</label>
            <div className="border-2 border-dark-blue w-fit flex items-center">
                        <DatePicker
                            placeholderText='Select date'
                            onChange={(date) => setDate(date)}
                            selected={startDate}
                            minDate={startDate}
                            closeOnScroll={true}
                        />
            </div>
            <label>Your name:</label>
            <input {...register("name", {required: true})}
                   className="border-2 rounded border-dark-blue px-2 py-1"/>
            {errors.name && <ValidationMsg/>}
            <label>Your phone number:</label>
            <input {...register("number", {required: true, minLength: 5, maxLength: 12})}
                   className="border-2 rounded border-dark-blue px-2 py-1"/>
            {errors.number && <ValidationMsg/>}
            <label>Your email:</label>
            <input {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                   className="border-2 rounded border-dark-blue px-2 py-1"/>
            {errors.email && <ValidationMsg/>}
            <label>Additional information:</label>
            <textarea className="border-2 rounded border-dark-blue px-2 py-1"
                      onChange={e => setAdditional(e.target.value)}
            ></textarea>
            <div className="flex justify-between py-2">
                <label>Choose amount</label>
                <select className="border-2 rounded border-dark-blue px-2 py-1"
                        onChange={e => setTotal(e.target.value * price)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </div>
            <hr/>
            <div className="flex justify-between py-2">
                <p className="font-bold text-xl">Total:</p>
                <p className="font-bold text-xl">$ {total}</p>
            </div>
            <button type="submit" className="bg-hover-blue hover:bg-dark-blue rounded text-white py-2 mb-4">Book Now
            </button>
        </form>
    </div>
}