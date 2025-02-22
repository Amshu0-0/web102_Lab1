import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className = "Calendar">

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                    
                <tbody>
                    <tr> {/* 1 */}
                        <td className="time">8 am</td>
                        <Event event='Starbucks ☕️' color ='green' location='Maple & Ash'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color ='green' location='355 E Ohio St'/>
                        <td></td>
                    </tr>
                    <tr> {/* 2 */}
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event='Subway 🚊' color ='blue' location='Grand Station'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='green' location='Millennium Park'/>
                        <td></td>
                        <td></td>

                    </tr>
                    <tr> {/* 3 */}
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Millennium Park'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location='Grand Station'/>
                    </tr>
                    <tr> {/* 4 */}
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 5 */}
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 6 */}
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 7 */}
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 8 */}
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 9 */}
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr> {/* 10 */}
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Fancy Dinner 🎩' color ='blue' location='Maple & Ash'/>
                        <td></td>
                    </tr>
                </tbody>

            </table>

        </div>

    )

}
export default Calendar;