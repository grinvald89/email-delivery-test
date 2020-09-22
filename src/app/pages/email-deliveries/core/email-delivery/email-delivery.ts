import * as moment from 'moment';

import { Channel } from '../channel/channel';
import { IEmailDelivery } from './email-delivery.interface';

/**
 * Хранит параметры Email-рассылки
 */
export class EmailDelivery {
    private id: number = 0;
    private name: string = '';
    private status: string = '';
    private sentCount: number = 0;
    private showCount: number = 0;
    private clickCount: number = 0;
    private created: moment.Moment = moment(moment.now());
    private agent: string = '';
    private channel: Channel = new Channel();

    constructor(params?: IEmailDelivery) {
        if (params) {
            this.id = params.id;
            this.name = params.name;
            this.status = params.status;
            this.sentCount = params.sentCount;
            this.showCount = params.showCount;
            this.clickCount = params.clickCount;
            this.created = params.created;
            this.agent = params.agent;
            this.channel = params.channel;
        }
    }

    get Id(): number {
        return this.id;
    }

    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }

    get Status(): string {
        return this.status;
    }
    set Status(value: string) {
        this.status = value;
    }

    get SentCount(): number {
        return this.sentCount;
    }
    set SentCount(value: number) {
        this.sentCount = value;
    }

    get ShowCount(): number {
        return this.showCount;
    }
    set ShowCount(value: number) {
        this.showCount = value;
    }

    get ClickCount(): number {
        return this.clickCount;
    }
    set ClickCount(value: number) {
        this.clickCount = value;
    }

    get Created(): moment.Moment {
        return this.created;
    }
    set Created(value: moment.Moment) {
        this.created = value;
    }

    get Agent(): string {
        return this.agent;
    }
    set Agent(value: string) {
        this.agent = value;
    }

    get Channel(): Channel {
        return this.channel;
    }
    set Channel(value: Channel) {
        this.channel = value;
    }
}
