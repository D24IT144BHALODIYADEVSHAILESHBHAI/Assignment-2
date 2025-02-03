const {
    addAppointment,
    upcomingAppointments,
    sendReminder
} = require('./appointmentScheduler');

addAppointment("Alice", new Date(Date.now() + 30 * 60 * 1000), "Consultation"); 
addAppointment("Bob", new Date(Date.now() + 90 * 60 * 1000), "Follow-up"); 
addAppointment("Charlie", new Date(Date.now() - 60 * 60 * 1000), "Consultation"); 

upcomingAppointments();

sendReminder();
