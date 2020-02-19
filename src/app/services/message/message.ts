export enum IMessageType {
    Success='success',
    Info='info',
    Warning='warning',
    Danger='danger'
};

export interface IMessage {
    type: IMessageType;
    text: string;
    life?: number;
}