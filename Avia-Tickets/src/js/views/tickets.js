import currencyUI from './currency';

class TicketsUI {
  constructor(currency) {
    this.container = document.querySelector('.tickets-sections .row');
    this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
  }

  renderTickets(tickets) {
    this.clearContainer();

    if (!tickets.length) {
      this.showEmptyMsg();
      return;
    }

    let fragment = '';
    const currency = this.getCurrencySymbol();

    tickets.forEach(ticket => {
      const template = TicketsUI.ticketTemplate(ticket, currency);
      fragment += template;
    });

    this.container.insertAdjacentHTML('afterbegin', fragment);
  }

  clearContainer() {
    this.container.innerHTML = '';
  }

  showEmptyMsg() {
    const template = TicketsUI.emptyMsgTemplate();
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  static emptyMsgTemplate() {
    return `
    <div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
    </div>
    `;
  }

  static ticketTemplate(ticket, currency) {
    return `
    <div class="col s12 m6">
      <div class="card ticket-card">
        <div class="ticket-airline d-flex align-items-center">
          <img
            src="${ticket.airline_logo}"
            class="ticket-airline-img"
          />
          <span class="ticket-airline-name"
            >${ticket.airline_name}</span
          >
        </div>
        <div class="ticket-destination d-flex align-items-center">
          <div class="d-flex align-items-center mr-auto">
            <span class="ticket-city">${ticket.origin_name}</span>
            <i class="medium material-icons">flight_takeoff</i>
          </div>
          <div class="d-flex align-items-center">
            <i class="medium material-icons">flight_land</i>
            <span class="ticket-city">${ticket.destination_name}</span>
          </div>
        </div>
        <div class="ticket-time-price d-flex align-items-center">
          <span class="ticket-time-departure">${ticket.departure_at}</span>
          <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
        </div>
        <div class="ticket-additional-info">
          <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
          <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
        </div>
      </div>
    </div>
    `;
  }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;
