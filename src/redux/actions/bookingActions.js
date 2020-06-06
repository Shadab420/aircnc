import { GATHER_BOOKING_INFO } from 'types';

export const gatherBookingInfo = bookingInfo => {

    return {
        type: GATHER_BOOKING_INFO,
        payload: bookingInfo
    }

}