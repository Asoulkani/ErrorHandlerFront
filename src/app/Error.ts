interface Error{
    id: number;
    title: string;
    description: string;
    level: number; // 0 low, 1 normal, 2 urgent
    status: number; // 0 open, 1 in progress, 2 fixed
}