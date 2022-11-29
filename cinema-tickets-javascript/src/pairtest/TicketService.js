import InvalidPurchaseException from './lib/InvalidPurchaseException.js';
import TicketPaymentService from '../thirdparty/paymentgateway/TicketPaymentService.js';
import SeatReservationService from '../thirdparty/seatbooking/SeatReservationService.js';
import { ticketsAmountAndSeatData } from './CalculateAmountAndSeats.js';

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException   
    // Create an instance of InvalidPurchaseException and validate ticketTypeRequests
    const InvalidPurchaseExceptionInstance = new InvalidPurchaseException();
    InvalidPurchaseExceptionInstance.validatePurchase(accountId, ...ticketTypeRequests);
    }
    }
