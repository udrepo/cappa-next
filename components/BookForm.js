import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import BookNowButton from "./BookNowButton";

export default function BookForm() {
    return <div className="mt-2 rounded-xl bg-blue-100 -mx-4 px-4">
        <hr/>
        <div className="flex flex-col gap-0.5 mt-2">
           <label>Pick a date:</label>
            <div className="border-2 border-dark-blue w-fit flex items-center">
                <DatePicker
                    selected={new Date()}
                    min={new Date()}
                    dateFormat="dd.MM.yyyy"
                    closeOnScroll={true}
                />
            </div>
            <lable>Your name:</lable>
            <input className="border-2 rounded border-dark-blue px-2 py-1" type="text" required/>
            <lable>Your phone number:</lable>
            <input className="border-2 rounded border-dark-blue px-2 py-1" type="tel" required/>
            <lable>Your email:</lable>
            <input className="border-2 rounded border-dark-blue px-2 py-1" type="email" required/>
            <lable>Additional information:</lable>
            <textarea className="border-2 rounded border-dark-blue px-2 py-1"></textarea>
            <div className="flex justify-between py-2">
                <label>Choose amount</label>
                <select className="border-2 rounded border-dark-blue px-2 py-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <hr/>
            <div className="flex justify-between py-2">
                <p className="font-bold text-xl">Total:</p>
                <p className="font-bold text-xl">$130</p>
            </div>
            <button className="bg-hover-blue hover:bg-dark-blue rounded text-white py-2 mb-4">Book Now</button>
        </div>
    </div>
}