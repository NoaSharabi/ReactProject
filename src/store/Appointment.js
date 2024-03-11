import { observable, makeObservable, action, computed } from 'mobx';
import Swal from 'sweetalert2'

const appointment = {

    name: '',
    description: '',
    price: '',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    dateTime: '',

}
class Appointment {
    appointmentList =
        observable([

        ]);

    constructor() {
        makeObservable(this,
            {

                appointmentList: observable,

                addAppointment: action,
                //currentList: computed,
                initialAppointmentList: action,

            }
        )

    }
    //    get currentList() {
    //         return this.appointmentList;
    //     }



    addAppointment = async (appointment) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(appointment),
            headers: {
                "Content-Type": "application/json",

            },

        });
        console.log(response.statusText + "aaaa");

        if (response.status === 200) {

            this.appointmentList = ([...this.appointmentList, appointment])
            console.log(this.appointmentList + "bbbb");
           
            Swal.fire({
                
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            return true
        }

        Swal.fire({
            title: 'תאריך זה תפוס',
            text: '  נא קבעו תאריך אחר לא ניתן לקבוע את הפגישה',
            icon: "error"
        });
        return false

    }
    initialAppointmentList = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data = await response.json();
        console.log(data);

        const sortedData = [...data].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.appointmentList = sortedData;
    }
}
export default new Appointment();


