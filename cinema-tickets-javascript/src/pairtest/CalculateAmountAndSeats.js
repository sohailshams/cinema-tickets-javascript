import { TICKETDATAOBJ, ADULTTICKETTYPE, CHILDTICKETTYPE, ADULTTICKETPRICE, CHILDTICKETPRICE} from './constants.js'

export const ticketsAmountAndSeatData = function calculateAmountAndSeats(...ticketTypeRequests){    
    let amountToPay = 0; 
    let noOfTickets = 0;
    const ticketTypeRequest =  [...ticketTypeRequests]

    // loop over ticketTypeRequests
    ticketTypeRequest.forEach((ticketTypeRequest) => {
    let ticketsAmount = 0;

    // check ticket type, get no. of tickets and it's amount
    if (ticketTypeRequest.getTicketType() === ADULTTICKETTYPE) {
        ticketsAmount = ticketTypeRequest.getNoOfTickets() * ADULTTICKETPRICE;
    } else if (ticketTypeRequest.getTicketType() === CHILDTICKETTYPE) {
        ticketsAmount = ticketTypeRequest.getNoOfTickets() * CHILDTICKETPRICE;
    }

    // Get total no. of tickets and toal amount
    noOfTickets +=  ticketTypeRequest.getNoOfTickets();
    amountToPay += ticketsAmount;
    });

    // Add amountToPay and totalTickets to TICKETDATAOBJ
    TICKETDATAOBJ.totalAmountToPay = amountToPay;
    TICKETDATAOBJ.totalTickets = noOfTickets;

    return TICKETDATAOBJ;
 };
