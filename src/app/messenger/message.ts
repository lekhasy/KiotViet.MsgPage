export class Message {
    constructor(private participantId: string, private messageContent: string) {}

    public get ParticipantId(): string {
        return this.participantId;
    }
}
