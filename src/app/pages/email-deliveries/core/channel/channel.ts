import { IChannel } from './channel.interface';

/**
 * Хранит параметры канала
 */
export class Channel {
    private id: number = 0;
    private name: string = '';

    constructor(params?: IChannel) {
        if (params) {
            this.id = params.id;
            this.name = params.name;
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
}
