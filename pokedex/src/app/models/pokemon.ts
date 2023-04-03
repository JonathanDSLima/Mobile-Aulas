export class Pokemon {
    name!: string;
    description!: string;
    image!: string;
    favorite!: boolean;
    types!: string;
    stats: any[];
    id: number;
    constructor(stats: any[], id: number) {
        this.stats = stats
        this.id = id
    }
}