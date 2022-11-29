import { ADULTTICKETTYPE} from '../../pairtest/constants.js'
export default class InvalidPurchaseException extends Error {
    validatePurchase(accountId, ...ticketTypeRequests){
        const ticketTypeRequest =  [...ticketTypeRequests]
        let atleastOneAdultTicketFlag = false;
        
        // Throw an error if accountId is not valid
        if (accountId <= 0) {
            throw new TypeError('invalid id');
          }
    
        // loop over ticketTypeRequests
        ticketTypeRequest.forEach((ticketTypeRequest) => {
         // Check if no of tickets are less than one or greater than 20 and throw error
         if (ticketTypeRequest.getNoOfTickets() < 1 || ticketTypeRequest.getNoOfTickets() > 20 ) {
            throw new TypeError('Tickets can only be purchased between 1 to 20.');
        }

        // check ticket type and set atleastOneAdultTicketFlag = true
        if (ticketTypeRequest.getTicketType() == ADULTTICKETTYPE) {
            atleastOneAdultTicketFlag = true;
        }
        
        // Throw an error if adult ticket is not in ticket request
        if (!atleastOneAdultTicketFlag) {
            throw new TypeError('Child or Infant tickets cannot be purchased without purchasing an Adult ticket.');
        } 
    });
    }
}
