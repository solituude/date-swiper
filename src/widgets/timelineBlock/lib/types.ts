export interface IEvent {
    id: string,
    year: number,
    description: string
}

export interface ITimeline {
    id: string,
    topic: string,
    events: IEvent[]
}