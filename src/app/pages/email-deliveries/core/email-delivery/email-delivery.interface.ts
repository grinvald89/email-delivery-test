import * as moment from 'moment';

import { Channel } from '../channel/channel';

/**
 * Описывает параметры Email-рассылки
 */
export interface IEmailDelivery {
    readonly id: number;
    name: string;
    status: string;
    sentCount: number;
    showCount: number;
    clickCount: number;
    created: moment.Moment;
    agent: string;
    channel: Channel;
}
