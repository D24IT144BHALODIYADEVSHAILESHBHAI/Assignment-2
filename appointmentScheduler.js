const appointments = [];
function addAppointment(clientName, appointmentTime, serviceType) {
    try {
        if (!clientName) {
            throw new Error("Client name cannot be empty.");
        }
        if (!(appointmentTime instanceof Date) || isNaN(appointmentTime)) {
            throw new Error("Invalid appointment time.");
        }
        appointments.push({ clientName, appointmentTime, serviceType });
        console.log("Appointment added successfully!");
    } catch (error) {
        console.error("Error adding appointment:", error.message);
    }
}
function upcomingAppointments() {
    const now = new Date();
    const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

    const upcoming = appointments.filter(appointment => 
        appointment.appointmentTime > now && appointment.appointmentTime <= oneHourLater
    );

    console.log("Upcoming Appointments in the next hour:");
    if (upcoming.length === 0) {
        console.log("No upcoming appointments.");
    } else {
        upcoming.forEach(appointment => {
            console.log(
                `Client: ${appointment.clientName}, Time: ${appointment.appointmentTime.toLocaleString()}, Service: ${appointment.serviceType}`
            );
        });
    }
}
function sendReminder() {
    const now = new Date();
    appointments.forEach(appointment => {
        const timeUntilAppointment = appointment.appointmentTime - now;

        if (timeUntilAppointment > 0) {
            setTimeout(() => {
                console.log(
                    `Reminder: Your appointment for ${appointment.serviceType} with ${appointment.clientName} is scheduled at ${appointment.appointmentTime.toLocaleString()}`
                );
            }, timeUntilAppointment);
        }
    });
}
module.exports = {
    addAppointment,
    upcomingAppointments,
    sendReminder
};
