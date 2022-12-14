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
    
    // Calculate amount to pay and total number of tickets
    const ticketsData = ticketsAmountAndSeatData(...ticketTypeRequests)

    // Create an instance of TicketPaymentService and make payment
    const TicketPaymentServiceInstance = new TicketPaymentService();
    TicketPaymentServiceInstance.makePayment(accountId, ticketsData.totalAmountToPay);

    // Create an instance of SeatReservationService and reserve seats
    const SeatReservationServiceInstance = new SeatReservationService();
    SeatReservationServiceInstance.reserveSeat(accountId, ticketsData.totalTickets);

    }
    }
